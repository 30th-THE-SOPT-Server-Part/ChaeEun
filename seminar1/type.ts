export{}; // 'name'을 다시 선언할 수 없다는 오류해결을 위해

/* 기본적인 타입 표현 */
let name: string = '김채은'; // string 이라고 변수에 타입을 명시해준다!
//const sum: number = 'sum is number!'; //오류가 생김 - 타입검사로 오류를 바로 잡아준다!
console.log(name);

/* 배열의 두가지 표현법 */
//1)
const ages: number[] = [1,2,3,4,5];
//2)
const ages2: Array<number> = [1,2,3,4,5]; 
console.log(ages);
console.log(ages2);

const strArray: string[] = ["hi", "hello"];

/*객체담는 배열 표현해보기 */
const objArr: Array<object> = [
    { item: 'value' },
    { itme: 'value2' }
];


/* Object와 object의 차이 */
//Object -> 자바스크립트의 모든 타입이 할당될 수 있다.
//object -> 원시 타입을 제외한! 나머지를 모두 받을 수 있다.

const f1 = (obj: object): void => {  //object
    console.log(obj);
}

const f2 = (obj: Object): void => { //Object
    console.log(obj);
}

//Object에서는 -> 둘다 받아서 잘 출력
f2([1,2,3,4]);
f2('hihi');

//object에서는 -> 원시타입은 제외하고 받을 수 있다.
f1([1,2,3,4]);
//f1('hihi'); //원시타입이어서 이부분에서 오류! string' 형식의 인수는 'object' 형식의 매개 변수에 할당될 수 없습니다.t


const div = (x: number, y: number): number => { //넘버/넘버는 넘버니까 number타입명시
    return x / y;
}

/*
const div = (x: number, y: number): string => { //string을 반환한다 명시하면 오류난다.
    return x / y;
}
*/


/* 타스의 null과 undefined */

// null과 undefined에는 자기 자신만 할당가능하다. 다른거 넣을 수 없음!
// null과 undefined값은 자기자신이 타입이다.
let p: null = null;
let u: undefined = undefined;


/* 타입 단언 */
// 1) angle-bracket 타입 단언
let name3: any = '김채은'; //any는 아무 타입이나 가능하다는 의미
let name3Length: number = (<string>name3).length; // 길이니까 number타입 지정할건데. name3는 any타입이라 길이를 모른다!!! -> 이때 타입단언으로 개발자가 직접 타입을 보장해주는것이다.

//2) as 타입 단언
let name4: any = '서버';
let name4Length: number = (name4 as string).length; //언제쓰는건지 이해안될수도 : name4가 any인데 string이라고 타입단언하기. api짤때 쓰는경우생긴다 함.
console.log('길이는', name4Length); // 길이는 2 출력


