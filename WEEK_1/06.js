//연산자(+,-,*,/,%)
//1. 더하기 연산자
// console.log(1 + 1);
// console.log(1 + "1");

//2. 빼기 연산자
// console.log(1 - "2") // -1
// console.log(1 - 2) // -1

//3. 곱하기 연산자
// console.log(2 * 3);
// console.log("2" * 3);

//4. 나누기 연산자
// console.log(4 / 2);
// console.log("4" / 2);

//5. 나누기 연산자 vs 나머지 연산자
// console.log(5/2) // 2.5
// console.log(5%2) // 1

//6. 할당 연산자(assignment)
//6-1. 등호 연산자(=)
// let x = 10;
//x라는 변수에 10을 할당했다.
// console.log(x)
//6-2. 더하기 등호 연산자(+=)
// x += 5;
// console.log(x)

//6-3 빼기 등호 연산자 (-=)
// x -= 5;
// console.log(x)
// x -= 20;
// console.log(x)

//비교 연산자(true 또는 false를 반환하는 연산자)
//1. 일치 연산자(===)
//타입까지 일치해야 true를 반환함!
console.log(2===2);
console.log( "2" === 2);

// 2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환하는 연산자
console.log( 2 !== 2);
//숫자 2가 숫자 2와 다르니?

// 3. 작다 연산자( < )
// 4. 작거나 같다 연산자( <= )
console.log(2 < 3); // true


// 4.논리 연산자
// 4.1 논리 곱 연산자 (모두 트루일때 트루 반환)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


//4.2 논리 합 연산자(둘중 하나가 트루일때 트루)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

//4.3 논리 부정 연산자
// : 값을 반대로 바꿈


//5. 삼항 연산자(중요!)
//조건에 따라 값을 선택한다.... ㅇㅂㅇ...

let x = 10;
let result = (x > 5) ? "크다" : "작다";
console.log("-------")
console.log(result)

let y = 20;
//3항 연산자를 활용하여 y가 10보다 작으면
console.log(y < 10 ? "작다" : "크다")

//6. 타입연산자
console.log(typeof "5")