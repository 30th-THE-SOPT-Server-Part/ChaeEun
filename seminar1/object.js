const sopt = { //object의 key:value 형태!
    season: 30,
    group: ['YB', 'OB'],
    part: ['서버', '시획', '디자인', '안드', '아요', '웹'],
    president: '김규민',
    introduce: function() {
        this.part.map(name => {
            console.log(`솝트 내 파트는 ${name}`)
                /*
                솝트 내 파트는 서버
                솝트 내 파트는 시획
                솝트 내 파트는 디자인
                솝트 내 파트는 안드
                솝트 내 파트는 아요
                솝트 내 파트는 웹 출력됨!
                */
        });
    }
}

console.log(sopt.group);
sopt.introduce(); //속성 함수 실행


/* Array */
let array = [1, true, "string"]; //여러타입 섞여도됨
console.log(array);

//array안에는 객체도 들어갈수있다.
let array2 = [{
        name: '김채은',
        age: 23
    },
    {
        name: '금잔디',
        age: 4
    }
];
console.log(typeof array2); //object


/* function */
//1)함수 선언식 -> 함수 선언문이 정의되기도 전에 호출될수도있다.
function menu(dinner) {
    return `오늘 메뉴는 ${dinner} 입니다`;
}
const str2 = menu('삼겹살');
console.log(str2);

//2)함수 표현식 (우리는 이걸 사용하자!!) -> 실행 흐름이 도달했을때 함수를 생성하니까 화살표함수를 사용하자.
const menu2 = (dinner) => {
    return `오늘 메뉴는 ${dinner} 입니다.`
}
const str3 = menu2("곱창");


const func2 = (num) => {
    return num * num;
}
const multiple = (func, num) => {
    console.log(func2(num));
}
multiple(func2, 3); // 9출력


/* 증감 연산자 */
let a = 2;
let b = a++;
console.log(b); //b=2
let c = ++a;
console.log(c); //c=4

/* 사칙 연산자 */
let a1 = 2 + 3;
let b1 = 2 * 3;
let c1 = 3 - 2;
let d = 4 / 2;
console.log(a, b, c, d); // 5, 6, 1, 2 출력

/* 비교 연산자 */
// == 값만 비교
a2 = 5;
x = 5;
y = '5';

if (a2 == y) {
    console.log("5=='5'"); // 5=='5' 출력
}

// === 값과 타입 모두 비교
if (a2 === 5) {
    //보통 ===을 쓰는 것을 권장한다 함.
    console.log("5===5"); // 5===5 출력
}

if (a2 !== y) {
    console.log("5!=='5'"); // 5!=='5' 출력
}


/**  6/2 나머지  */
if (6 % 2 == 0) {
    console.log(6 % 2); // 0 출력
    console.log('나머지 0');
}


/* 논리 연산자 */
if (a2 === 5 && d === 2) {
    console.log('a2는 5, d는 2이다.'); //출력됨
}

if (a === 5 || d === 2) {
    console.log('a는 5가아님, d는 2맞음'); //출력됨
}

if (typeof a2 === number) { //이럼 안찍힘&오류남 ! - typeof로 하면 스트링으로 반환하기때문에 
    console.log('a2는 숫자타입이다.'); // ReferenceError: number is not defined
}

if (typeof a2 === "number") { //이럼 찍힘 ! 
    console.log('a2는 숫자타입이다.');
}