// // 각종 ES6문법 을 알아보자!

// ECMAscript 6(ES6)문법은 자바스크립트 버전 중 하나로
// 새로운 문법과 기능을 도입하여 보다 쉽고 효율적인 코드 작성이 가능하다.ECMAscript

// 1. let / const
// 기존의 변수 선언을 위해 존재하던 var를 대체해서 나온 변수/상수 키워드

// 선언과 할당을 다시 알아봐요!

// 선언 : 변수 명을 자바스크립트엔진에 알리는 것
// 할당 : 엔진에 알린 변수에 값을 저장하는것 ('=' 할당연산자를 사용)

// let 과 const의 특징

// let은 재할당이 가능하고, 재선언은 불가능해요.

// let a = 1;
// a = 1 ==> !재할당! 가능
// let a = 2; ==> !재선언! 불가능

// const a = 1;
// a = 2; ==> 불가
// const a = 2; ==> 불가

// 잠깐 var의 특성을 알아봐요!

// 1. var는 재할당, 재선언이 가능합니다!
// 2. 호이스팅 됩니다.


// 2. 화살표 함수
// function,이나 return키워드 없이 함수를 만드는 문법이에요.ECMAscript
// function(매개변수){
//     메인코드
// }

// const func = (매개변수) => true(메인코드가 한줄일때 한줄로 작성가능)
// const func = (매개변수) => {
//     메인코드
// }

// 매개변수 => 메인코드
// 이렇게 괄호를 다 생략이 가능

// function은 호출을 할때 this가 정해지고
// 화살표함수는 선언할 때 this가 정해져요!
// 이건 3주차에서 알아봐요

// 3. 삼항 연산자

// condition ? 코드1 : 코드2
// 불린판별식 ? 참일때 : 거짓일때

// 4. 구조분해 할당!

// 배열이나 객체의 속성을 분해해서 변수에 담아주는 문법

// [배열일때]

// let [val1, val2] = [1, "new"];
// console.log(val1) = 1
// console.log(val2) = "new"

// let arr = [1,2,3]
// let [a,b,c] = arr
// console.log(a) ==> 1

// 만약
// let [a,b,c,d] = arr 을 하면?
// console.log(d) = undefined

// 그럼 혹시 없을 수도 있는 d값에 초기값을 설정해준다.

// let [a,b,c,d = 4] = arr
// console.log(d) = 4


// [객체일때]

// let user = {
//     name : 'nbc',
//     age : 30,
// }
// let {name, age} = user;

// [새로운 키값으로 할당하는법]
// let {name:newName, age:newAge} = user;
// 키값이 바뀜.

// 초기값 설정은 배열과 동일함


// 5. 단축속성명

// 객체의 key와 value의 값이 똑같다면 생략이 가능해요.


// 6. 전개 구문

// 배열이나 객체를 전개하는 문법, 구조분해할당과 함께 정말 많이 사용됨

// [배열]
// let arr = [1,2,3];
// let newArr = [...arr, 4]
// console.log(newArr) = [1,2,3,4]

// [객체]
// let user = {
//     name : 'nbc',
//     age : 30,
// }

// let user2 = {...user}
// user2.name = nbc2

// 7. 나머지 매개변수