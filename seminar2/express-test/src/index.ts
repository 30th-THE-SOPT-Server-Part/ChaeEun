import express, { Request, Response, NextFunction } from 'express';

const app = express(); // express 객체 받아옴

app.use(express.json()); // express 에서 request body를 json으로 받아오겠다.

app.use('/api', require('./api')); // app.use -> 모든 요청
// -> localhost:8000/api 로 들어오는 모든 요청은 -> api 폴더로 간다.
// -> localhost:8000/api/user -> api폴더에서 user 파일로간다. 

/* 최상단 - 클라이언트요청req, 서버응답res, 미들웨어 NextFunciton..? */
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hi! My name is KIMCHAEEUN!'); // string문자열을 response로 전송한다.
}); // -> get : http method이다. app.post, app.put 등등.

/* 8000번 포트에서 서버를 실행한다. callback함수로 -> 포트가 열렸는지 확인을 위해 콘솔 찍음 */
app.listen('8000', () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: 8000 🛡️
        #############################################
    `);
});


