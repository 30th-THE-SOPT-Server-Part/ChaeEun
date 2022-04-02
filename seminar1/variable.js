var name = "김채은";
var name = "서버_김채은"; //재선언 가능

console.log(name);

let name2 = "금잔디";
//let name2 = "5조"; //재선언 불가능(오류)

console.log(name2);

let name3 = '오비';
name3 = '와이비'; //재할당 가능

const name4 = '경린';
//name4 = '서경'; //재할당 불가능(오류)

//---------scope
if (true) {
    var x = 'var variable';
}
console.log(x); //function scope라 가능

if (true) {
    const y = 'const variable'; ////block scope라 이 중괄호안에서만 사용가능
}
//console.log(y); //block scope라 에러남

//-------function scope  - var
function foo() {
    if (true) {
        var name = "김채은";
        console.log('if - block - ', name);
    }
    console.log('function - block-', name);
}

console.log('global - ', name); //var가 함수내에 선언되어있어서, 함수 밖에서는 오류남