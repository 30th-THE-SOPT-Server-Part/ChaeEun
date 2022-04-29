/**모든 블로그에 관한 라우터 */
import { Router } from "express";
import BlogController from "../controllers/BlogController";

const router: Router = Router();

//routes => use (/user) => post (/)
router.post('/', BlogController.createBlog);
router.put('/:postId', BlogController.updateBlog);
router.get('/:postId', BlogController.findBlogById);
router.delete('/:postId', BlogController.deleteBlog);

export default router;