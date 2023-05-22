//for문...!!!!!!!!!! : 반복문!!!!!

//i라는 변수가 0부터 시작할꺼임.
//그리고 10에 도달하기까지! 계속할꺼임
//그리고 한번 돌고나면 변수에 1씩 더할꺼임
// for (let i = 0; i<10; i++) {
//     console.log(i)
// }

//배열과 for문은 짝꿍쓰!!

// const arr = ["one","two","three","four","five"];

// for ( let i = 0; i < arr.length ; i++) {
//     console.log(i)
//     console.log(arr[i])
// }


// 0 부터 10까지 중에서 2의 배수만 출력해라.

// for (let i = 0 ; i <11 ; i ++) {
//     if ( i % 2 !== 1 && i !==0 ) {
//         console.log(i)
//     } 
// }


//for in 문
//객체의 속성을 출력하는 문법
let person = {
    name: 'john',
    age: 30,
    gender : 'male',
};

for(let key in person) {
    console.log(key + ":" + person[key])
}