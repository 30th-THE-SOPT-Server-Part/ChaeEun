import express, { Request, Response, Router } from 'express';
//express 모듈에서 express, (request, response, router) -> 타입 정의를 위해 불러옴!

const router: Router = express.Router(); // express 객체 받아옴

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ // json response로 상태코드 200반환, message도 반환!
        status: 200,
        message: '유저 조회 성공'
    });
});

module.exports = router; // 생성한 router 객체를 모듈로 반환