// 함수 = function(기능)
// input, output 

//1. 함수 선언문
// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수를 만들어보자
function add(x,y) {
    return x + y;
};

//2. 함수 표현식
let add2 = function (x,y) {
    return x + y;
};

// 함수를 호출한다 (= 사용한다)
// 함수명(매개변수) -> add(3,4)
// add(2,3)
// console.log(add(2,3))

let functionResult = add(10,20);
console.log(functionResult);

// 함수의 input -> 매개변수(매개체가 되는 변수!)
// returen문 뒤에 오는 값 = 반환값!

