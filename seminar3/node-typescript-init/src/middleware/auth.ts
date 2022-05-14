import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";

export default (req: Request, res: Response, next: NextFunction) => {
    // request-header 에서 토큰 받아오기 -> reverse를 해서 0번을 가져온이유는 : ['Bearer', 'jwt token'] 이런식이기때문에 바꾼것!
    const token = req.headers["authorization"]?.split(' ').reverse()[0];
 
    // 토큰 유무 검증 -> 토근을 안넣었을 수도 있으니까! 꼭 검증
    if (!token) {
        return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.NULL_VALUE_TOKEN));
    }

    // 토큰 검증
    try {
        const decoded = jwt.verify(token, config.jwtSecret); //유저의 토큰과, 뭘로 암호화했는지를 넣어서 verify를 한다.

        req.body.user = (decoded as any).user; //decoded는 마땅한 타입이 없어서 any로 타입단언해서 타입에러 막긴

        next(); //우리 검증하고, user안에 넣었으니까 다음 미들웨어로 넘길게!

    } catch (error: any) { //에러가 잡히면,
        console.log(error); 
        if (error.name === 'TokenExpiredError') {
            return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.INVALID_TOKEN));
        }
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
};