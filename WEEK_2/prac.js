// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면
// 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다. 

let strings = ['sun','bed','car'];
let n = 1

function solution(strings, n) {
    var answer = [];
    //새로운 배열 생성.
    let string = [];
    // n번째 인덱스 글자를 맨 앞으로 집어넣음.
    for ( let i = 0; i < strings.length; i++) {
        string.push(strings[i].slice(n,n+1) + strings[i]);
    }
    // 그냥 냅다 사전순으로 정렬
    string.sort()
    
    //n번째 인덱스 글자 삭제하기.
    for (let i = 0; i < strings.length; i++) {
        answer.push(string[i].slice(1,string[i].length));
    }

    return answer;
}

solution(strings,n)


// let strings = ['sun','bed','car']
// let n = 1

// // console.log(string[0][1] < string[1][1])
// // console.log('a' < 'b')

// function solution(strings, n) { 
//     var answer = [];

//     strings.sort(function(a, b){
//         if ( a[n] < b[n] ) return -1;
//         else if ( a[n] > b[n] ) return 1;
//         else return 0
//     })
//     console.log(strings)

// }
// solution(strings,n)