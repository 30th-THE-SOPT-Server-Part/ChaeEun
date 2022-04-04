interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    shuffle(array: Member[]): Member[];
    organize(array: Member[]): void;
}

const dinner: Dinner = {
    member: [
        {
            name: '채정아',
            group: 'ob'
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
            name: '김동재',
            group: 'yb'
        }
        ,
        {
            name: '김루희',
            group: 'ob'
        }
        ,
        {
            name: '박진수',
            group: 'ob'
        }
    ],
    shuffle(array: Member[]) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array: Member[]) {
        let dinnerMember: string[] = [];
        let random_member: string;

        this.shuffle(array);;

        for(let group of ['ob', 'yb']) {
            random_member = array.filter((member: Member) => member.group === group)[0].name;
            dinnerMember.push(random_member);
        }
        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    }
};

dinner.organize(dinner.member);