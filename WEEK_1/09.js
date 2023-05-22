// 스코프, 전역변수, 지역변수, 화살표 함수

function printX() {
    let x = 10;   //-> 함수 안(스코프)으로 선언된 변수임...
    console.log(x);
}

console.log(x);
printX();