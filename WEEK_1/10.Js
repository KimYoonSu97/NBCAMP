//화살표 함수
//ES6 등장한 신 문법
// 기존의 함수
function 함수명(매개변수){
    리턴문
}

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x,y) => {
    return x + y;
}

// 1-2.한 줄로 쓸 수있읍니다.
// 중간에 중괄호를 생략할 정도로 짧을때 가능
let arrowFunc02 = (x,y) => x + y;

//
function textFunc(x) {
    return x;
}

// 화살표 함수로!
let arrowFunc03 = (x) => x;
