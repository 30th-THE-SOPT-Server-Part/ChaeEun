/** Blog 컨트롤러 만들기 */
import express, { Request, Response } from "express";
import { BlogCreateDto } from "../interfaces/blog/BlogCreateDto";
import { BlogUpdateDto } from "../interfaces/blog/BlogUpdateDto";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import BlogService from "../services/BlogService";

    /**
 *  @route POST /blog
 *  @desc Create Blog
 *  @access Public
 */


const createBlog = async (req: Request, res: Response) => {
    //컨트롤러 로직 작성
    const blogCreateDto: BlogCreateDto = req.body; // req.body 받아옴

    try {
        //서비스호출
        const data = await BlogService.createBlog(blogCreateDto);
        
        //response 던지기
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_POST_SUCCESS, data));

    } catch (error) {
        console.log(error);
        //서버 내부에서 오류 발생 - 500번대의 response 보냄
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));

    }

}

    /**
 *  @route PUT /blog/:postId
 *  @desc Update Blog
 *  @access Public
 */
const updateBlog =async (req: Request, res: Response) => {
    const blogUpdateDto: BlogUpdateDto = req.body;
    const { postId } = req.params;

    try {
        await BlogService.updateBlog(postId, blogUpdateDto);
        res.status(statusCode.NO_CONTENT).send(util.success(statusCode.OK, message.UPDATE_POST_SUCCESS));

    } catch (error) {
        console.log(error);
        //서버 내부에서 오류 발생 - 500번대의 response 보냄
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));

    }
}

    /**
 *  @route GET /blog/:postId
 *  @desc READ Blog
 *  @access Public
 */
const findBlogById = async (req: Request, res: Response) => {
    const { postId } = req.params;
    //get은 반환값이있으니까 dto를 사용한다.
    try {
        const data = await BlogService.findBlogById(postId);

        if (!data) {
            //404처리
            return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        }

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_POST_SUCCESS, data));
    } catch (error) {
        console.log(error);
        //서버 내부에서 오류 발생 - 500번대의 response 보냄
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}


    /**
 *  @route DELETE /blog/:postId
 *  @desc DELETE Blog
 *  @access Public
 */
const deleteBlog = async (req: Request, res: Response) => {
    const { postId } = req.params;

    try {
        await BlogService.deleteBlog(postId);

        res.status(statusCode.NO_CONTENT).send(); //204
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createBlog,
    updateBlog,
    findBlogById,
    deleteBlog
}