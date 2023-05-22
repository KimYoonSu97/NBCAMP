//문 (if, else if, switch ~)
// 조건문 - if, else if, else, switch

//1. if문
// let x = -10;

// //1-1
// if(x > 0) {
//     console.log("x는 양수입니다.")
// }

// //1-2
// let y = "hello world";

// if ( y.length >= 5 ) {
//     console.log(y.length)
// }

//2. if else 문
// if () {
//     맞았을때!
// } else {
//     틀렸을때!
// }

// let x = -10;
// if( x > 0) {
//     console.log("x는 양수입니다요.")
// } else {
//     console.log("x는 음수입니다요.")
    
// }
// let x = -1;
// //3. if else if else
// if( x < 0) {
//     console.log('1')
// } else if ( x >= 0 && x < 10) {
//     console.log('2')
// } else {
//     console.log('3')
// }

//4. switch 
//변수의 값에 따라, 여려개의 경우(case)중 하나를 선택
// default
let fruit = "사과";

switch (fruit) {
    case "사과" :
        console.log('사과임')
        break;
    case "바나나" :
        console.log('브내너')
        break;
    case "키위" :
        console.log('키위')
        break;
    default :
        console.log('암것도 아닙니다.')
        break;
}
