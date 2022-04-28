/** 2. 컨트롤러 만들기 */
import express, { Request, Response } from "express";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { UserService } from "../services";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import User from "../models/User";

    /**
 *  @route POST /user
 *  @desc Create User
 *  @access Public
 */


const createUser = async (req: Request, res: Response) => {
    //컨트롤러 로직 작성
    const userCreateDto: UserCreateDto = req.body; // req.body 받아옴

    try {
        //서비스호출
        const data = await UserService.createUser(userCreateDto);
        
        //response 던지기
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_USER_SUCCESS, data));

    } catch (error) {
        console.log(error);
        //서버 내부에서 오류 발생 - 500번대의 response 보냄
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));

    }

}

    /**
 *  @route PUT /user/:userId
 *  @desc Update User
 *  @access Public
 */
const updateUser =async (req: Request, res: Response) => {
    const userUpdateDto: UserUpdateDto = req.body;
    const { userId } = req.params;

    try {
        await UserService.updateUser(userId, userUpdateDto);
        res.status(statusCode.NO_CONTENT).send();

    } catch (error) {
        console.log(error);
        //서버 내부에서 오류 발생 - 500번대의 response 보냄
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));

    }
}

    /**
 *  @route GET /user/:userId
 *  @desc READ User
 *  @access Public
 */
const findUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    //get은 반환값이있으니까 dto를 사용한다.
    try {
        const data = await UserService.findUserById(userId);

        if (!data) {
            //404처리
            return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        }

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_USER_SUCCESS, data));
    } catch (error) {
        console.log(error);
        //서버 내부에서 오류 발생 - 500번대의 response 보냄
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}


    /**
 *  @route DELETE /user/:userId
 *  @desc DELETE User
 *  @access Public
 */
const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        await UserService.deleteUser(userId);

        res.status(statusCode.NO_CONTENT).send(); //204
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createUser,
    updateUser,
    findUserById,
    deleteUser
}
