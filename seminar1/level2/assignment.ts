enum Sopt { 
    OB = 'ob', YB = 'yb' 
}

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
            group: Sopt.OB
        },
        {
            name: '김채은',
            group: Sopt.YB
        },
        {
            name: '김경린',
            group: Sopt.YB
        },
        {
            name: '황서경',
            group: Sopt.YB
        },
        {
            name: '김동재',
            group: Sopt.YB
        }
        ,
        {
            name: '김루희',
            group: Sopt.OB
        }
        ,
        {
            name: '박진수',
            group: Sopt.OB
        }
    ],
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array) {
        const dinnerMember: string[] = [];

        this.shuffle(array);

        const ob_member = array.filter((member) => member.group === Sopt.OB)[0].name;
        const yb_member = array.filter((member) => member.group === Sopt.YB)[0].name;

        dinnerMember.push(ob_member);
        dinnerMember.push(yb_member);
        
        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    }
};

dinner.organize(dinner.member);