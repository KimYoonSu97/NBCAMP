//while / do while / continue

// let i = 0;

// while (조건) {
    //메인로직
    //증감
// }

// while( i < 10) {
//     console.log(i);
//     i++;
// }
// let i = 0;
// while ( i < 100) {
//     if ( i > 3 && i % 5 === 0) {
//         console.log(i)
//     }
//     i++;
// }

// let i = 0;
// while(i > 3 && i < 100) {
//     if ( i % 5 === 0) {
//         console.log(i)
//     }
//     i++;
// }


// do ~ while

// let i = 0;
// do {
//     console.log(i)
// } while (i > 10);


//break / continue

// for ( let i = 0 ; i<10; i++){
//     if( i === 5 ){
//         break;
//     }
//     console.log(i);
// }

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의
// 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.

// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

let s = "pyy"

// if ()

// 문자열을 다 자르고.. 그 문자 열중에
// p나 P면 pNum이라는

let sSplit = s.split("")
let pNum = 0;
let yNum = 0;
for (let i = 0; i < sSplit.length ; i++) {
    if ( sSplit[i] === 'p' || sSplit[i] === 'P') {
        pNum += 1;
    } else if ( sSplit[i] === 'y' || sSplit[i] === 'Y' ) {
        yNum += 1;
    }

}
if (pNum === yNum) {
    console.log('True');
} else {
    console.log('false');
};

// 어떤 정수들이 있습니다.
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가
// 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return
// 하도록 solution 함수를 완성해주세요.
let absolutes = [ 1,1,1,1];
let signs = [true,false,true,true];


function solution(absolutes, signs){

let signsTxt = [];
let number = [];
let addNumber = [];
let answer = 0;

for (let i = 0; i < signs.length ; i++) {
    if ( signs[i] === true) {
        signsTxt.push("+")
    } else {
        signsTxt.push('-')
    }
}
for ( let i = 0; i < absolutes.length ; i++) {
    addNumber.push(signsTxt[i] + absolutes[i])    
}
// return answer;
for (let i = 0; i < addNumber.length; i ++) {
    answer += Number(addNumber[i])
}
return answer
}

solution(absolutes,signs)