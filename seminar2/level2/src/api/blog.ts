import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: '블로그 글 목록 조회'
    });
});

router.get('/:postId', (req: Request, res: Response) => {
    const postId = req.params.postId;

    return res.status(200).json({
        status: 200,
        message: `${postId}번 글 조회중`
    });
});

module.exports = router;