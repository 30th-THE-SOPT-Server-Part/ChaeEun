/* 서버를 만들어보자 42p */

const http = require('http'); //http 모듈 이용

http.createServer((req, res) => {
    //여기에 서버에서 보내줄거 작성
    // http://localhost:8080/ 접속시 뜨는 문구!
    res.end('<p>server Love</p>');
    res.write('<h1>Hello server part</h1>');
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다.') //실행시 이거 출력됨
});