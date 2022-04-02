/* interface */
interface Sopt {
    name: string;
    age: number;
    organization: string;
    completion: number[]; // 또는 Array<number>
}

interface ServerPart {
    name: string; //인터페이스 내부에 프로퍼티들의 타입을 각각 지정한다.
    age: number;
    group: string;
    mbti: string[];
}

/*
const server: ServerPart = { //ServerPart라는 타입을 지정한것임.
    name: '김소령',
    age: 5,
    group: 'YB'
}
*/
//인터페이스의 프로퍼티값을 다 안넣고 출력하면? ->
//console.log(server); // missing type~~ mbti쓰라고 오류뜸.

const server2: ServerPart = { //ServerPart라는 타입을 지정한것임.
    name: '김채은',
    age: 5,
    group: 'YB',
    mbti: ['esfj', 'istj']
}
console.log(server2); // { name: '김채은', age: 5, group: 'YB', mbti: [ 'esfj', 'istj' ] } 출력

//인터페이스자체를 배열로 쓸수있다. 
const sopts: Sopt[] = [
    {
        name: '김채은',
        age: 5,
        organization: 'YB',
        completion: [28, 29]

    },
    {
        name: '김모모',
        age: 10,
        organization: 'oB',
        completion: [28, 29]

    }
];


/* 선택적 프로퍼티 */
// 인터페이스내부에 들어올수도, 안들어올수도있는 프로퍼티에 대해-> ?를 붙이면된다.

interface Closet {
    name: string;
    hat? : number; // optional - 안써도 오류가 나지않도록 설정한 프로퍼티!
}

const ohmygirl: Array<Closet> = [ //인터페이스 타입 배열
    {
        name: '효정'
        //hat을 안써도 오류x optional지정했기때문에.
    },
    {
        name: '아린',
        hat: 2
    }
];
console.log(ohmygirl); // [ { name: '효정' }, { name: '아린', hat: 2 } ] 출력

/* function interface */
const showOhmygirl = (arr: Closet[]) => {
    arr.map(e => {
        console.log(e.name);
    })
};

showOhmygirl(ohmygirl); //효정 아린 출력

const returnOhmygirl = (arr: Closet[]): Closet[] => {
    return arr;
};

console.log(returnOhmygirl(ohmygirl)); // [ { name: '효정' }, { name: '아린', hat: 2 } ] 출력

interface Sopt2 {
    season: number;
    group: string[];
    part: string[];
    president: string;
    introduce(): string[];
}

const currentSopt: Sopt2 = {
    season: 30,
    group: ['YB', 'OB'],
    part: ['서버', '기획', '디자인', '안드로이드', '웹', 'iOS'],
    president: '김규민',
    introduce: function () {
        return this.part.map(name => {
            // console.log(`솝트 내 파트는 ${name} 파트가 있어요!`)
            return `솝트 내 파트는 ${name} 파트가 있어요!`
        });
    }
}

console.log(currentSopt.introduce());