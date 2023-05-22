// 스코프, 전역변수, 지역변수, 화살표 함수
let x = 10;   //-> 전체적인 영역으로 선언된 변수임...

function printX() {
    console.log(x);
}

console.log(x);
printX();