/* 원시타입 & 객체타입 비교 */
const name = '김채은';
console.log(typeof name); // string 찍힘

let age = 18;
console.log(typeof age); // number 찍힘

let server = true;
console.log(typeof server); //boolean 찍힘

/* string 백틱 사용하기 */
console.log('안녕 나는' + name + '이야. 내 나이는' + age + '야.');

console.log(`안녕 나는 ${name}이야. 내 나이는 ${age}야.`);

/* null과 undefined는 다른 타입이다! */
console.log(typeof null); // object
console.log(typeof undefined); // undefined

/* Array.map() 사용하기*/
let num = [1, 2, 3, 4];
const newNumArr1 = num.map(x => x * 2); // 한줄일경우
const newNumArr2 = num.map(x => { //두줄일 경우

});

console.log(newNumArr1); //한번에 출력
newNumArr1.map(x => {
    console.log(x);
}); //하나씩 찍기

for (const x of newNumArr1) { //순회하기
    console.log(x);
}