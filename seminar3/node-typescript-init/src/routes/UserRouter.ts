/**모든 유저에 관한 라우터 */
import { Router } from "express";
import UserController from "../controllers/UserController";

const router: Router = Router();

//routes => use (/user) => post (/)
router.post('/', UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.get('/:userId', UserController.findUserById);
router.delete('/:userId', UserController.deleteUser);

export default router;