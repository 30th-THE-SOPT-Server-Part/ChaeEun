import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import config from "../config";
import { JwtPayloadInfo } from "../interfaces/common/JwtPayloadInfo";

const getToken = (userId: mongoose.Schema.Types.ObjectId): string => {
    //JWT Payload
    const payload: JwtPayloadInfo = {
        user: {
            id: userId
        },
    };

    const accessToken: string = jwt.sign(
        payload,
        config.jwtSecret,
        { expiresIn: '2h' }, //유효기간. 2시간뒤 자동으로 만료된 토큰이 된다.
    );

    return accessToken;
};

export default getToken;