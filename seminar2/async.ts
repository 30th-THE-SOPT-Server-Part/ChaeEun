/* 1) 비동기 처리방식 - 콜백함수 */
/* 출력 : 안녕하세요 -> 끝 -> set time out*/
// node.js가 비동기 방식을 사용하기때문에, 끝이 먼저 출력되고, setTimeout의 2초가 지난 특정 시점에 callback함수를 실행한다.
console.log('안녕하세요');

setTimeout(() => {
    console.log('set time out');
}, 2000); // -> 2초

console.log('끝');



/* 2) 비동기 처리방식 - promise 만들기 */
const condition: boolean = true; //Fullfiled
//const condition: boolean = false; //Rejected

const promise = new Promise((resolve, reject) => { //promise에 callback function 넣어주기
    
    if (condition) { //특정 작업이 성공시 resolve 호출하도록 예시 작성
        /* Fullfiled */
        resolve('성공'); //promise에서 비동기처리 제대로 완료시 호출되는 resolve
    } else {
        /* Rejected */
        reject(new Error('reject!! error'));
    }
});

/* resolve 반환값인 Promise 받아오기 - then으로 받아온다. */
/* reject 상태 - catch로 받아온다. */
//promise값을 then으로 받아서 출력해본다.
promise
    .then((resolveData): void => { // resolveData로 반환된 Promise객체 받음 
        console.log(resolveData); // 성공 출력시 -> Fullfiled 상태
    })
    .catch(error => console.log(error));  // error 메시지 출력시 -> Rejected 상태



/* 3) Promise Chaining 실습 27p~ */
const restaurant = (callback: () => void, time: number) => { // 함수를 인자로 받음
    setTimeout(callback, time);
}

//주문
const order = (): Promise<string> => { // 반환값 타입이 Promise<string>인 이유 : resolve('음식 주문 시작');에서 string을 뱉기 때문이다.
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황] - 음식 주문 중');
            resolve('음식 주문 시작');
        }, 1000);
    });
}

//조리
const cook =(progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황] - 음식 조리 중');
            resolve(`${progress} -> 음식 조리중`);
        }, 2000);
    });
}

//서빙
const serving = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황] - 음식 서빙 중');
            resolve(`${progress} -> 음식 서빙중`);
        }, 2500);
    });
}

//먹기
const eat = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황] - 음식 먹는 중');
            resolve(`${progress} -> 음식 먹는중`);
        }, 3000);
    });
} 

order()
    .then(progress => cook(progress))
    .then(progress => serving(progress))
    .then(progress => eat(progress))
    .then(progress => console.log(progress));


/*
위 코드 출력
---------------------------------
[레스토랑 진행상황] - 음식 주문
[레스토랑 진행 상황] - 음식 조리중
[레스토랑 진행 상황] - 음식 서빙 중
[레스토랑 진행 상황] - 음식 먹는 중
음식 주문 시작 -> 음식 조리중 -> 음식 서빙중 -> 음식 먹는중
*/



/* 4) Promise는 여러개여도 catch는 단일임 실습 -  "에러 발생" 출력됨 31p*/
Promise.resolve(123) // 바로 resolve만 하고싶을 때 Promise.resolve()형태로 씀
    .then(res => {
        throw new Error('에러 발생'); //에러 던지기
        return 456; //이건 실행될 수 없음. 위에서 에러를 던지니까
    })
    .then(res => {
        console.log(res); // 절대 실행 되지 않음 !! 위에서 456이 반환되지 않으니까
        return Promise.resolve(789);
    })
    .catch(error => { // 에러 발생시 catch로 받아줌. catch는 한번만 써서 promise 여러개여도 에러를 모두 받을 수 있음.
        console.log(error.message);
    });