//router index file
import { Router } from 'express';
import UserRouter from './UserRouter'
import BlogRouter from './BlogRouter'
import ReviewRouter from './ReviewRouter';
import MovieRouter from './MovieRouter';
import upload from '../config/multer';
import FileController from '../controllers/FileController';

const router: Router = Router();

router.use('/user', UserRouter);
router.use('/blog', BlogRouter);
router.use('/review', ReviewRouter);
router.use('/movie', MovieRouter);

router.post('/file/upload', upload.single('file'), FileController.uploadFileToS3);
router.post('/files/upload', upload.array('file'), FileController.uploadFilesToS3);

export default router;