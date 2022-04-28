/* async await 실습 37p */

// '함수명 - 인자' 반환하기
let asyncFunc1 = (msg: string): Promise<string> => {
    return new Promise(resolve => { // 일단은 resolve만
        setTimeout(() => {
            resolve(`asyncFunc1 - ${msg}`); // 함수명 - 인자string  Promise<string> 반환
        }, 1000);
    });
};

let asyncFunc2 = (msg:string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc2 - ${msg}`); // 함수명 - 인자string  Promise<string> 반환
        }, 1500);
    });
};

// 1) Promise 사용하기
let promiseMain1 = (): void => {
    asyncFunc1('server part')
        .then((result: string) => {
            console.log(result); // 출력: asyncFun1 - server part
            return asyncFunc2('김채은');
        })
        .then((result: string) => {
            console.log(result); // 출력: asyncFunc2 - 김채은 
        });
};
promiseMain1();
/* 출력:
asyncFunc1 - server part
asyncFunc2 - 김채은
*/


/*******************************************************************/


// 2) 위 코드를 async await으로 바꾸기 -> Promise를 썼을때보다 정말 간단해진다.
const asyncMain = async () => {
    //동기처리와 비슷한 코드이다! asyncFunc1을 부르고, 그 다음에 asyncFunc2를 부르면됨
    let result = await asyncFunc1('server part');
    console.log(result);

    result = await asyncFunc2('김채은');
    console.log(result);
}
asyncMain();