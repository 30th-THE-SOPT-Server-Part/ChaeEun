// 과제 조건
// 1. Member, Dinner interface 만들고 타입 지정하기
interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    shuffle(array: Member[]): Member[];
    organize(array: Member[]): void;
}

// 2. organize 내부 로직 채우기
const dinner: Dinner = {
    member: [
        {
            name: '금잔디',
            group: '5조'
        },
        {
            name: '김채은',
            group: 'yb'
        },
        {
            name: '김경린',
            group: 'yb'
        },
        {
            name: '황서경',
            group: 'yb'
        },
        {
            name: '허유정',
            group: 'ob'
        }
    ],
    shuffle(array: Member[]) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array: Member[]) {
        const dinnerMember: Member[] = this.shuffle(array);
        //console.log('dinnerMember=', dinnerMember); // 궁금해서 찍어봄
        //console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`); // 기존의 코드
        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0].name}, ${dinnerMember[1].name}`); // 수정한 코드
    }
};

dinner.organize(dinner.member);