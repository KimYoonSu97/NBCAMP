// Destructuring assignment

//기본 개념 배열의 요소를 할당!
let [x,y] = [1, 2]

// console.log(x) // 1
// console.log(y) // 2

//순서대로 선언된 변수에 할당!
let users = ['mike', 'tom', 'jane']

let [user1, user2, user3] = users;
//이 의미가 뭐냐면.
// let user1 = users[0];
// let user2 = users[1];
// let user3 = users[2];
// 위 코드랑 똑같음

// console.log(user1) // mike
// console.log(user2) // tom
// console.log(user3) // jane

let str = "mike - tom - jane";
let [users1, users2, users3] = str.split("-");

// console.log(users1.trim()) // mike
// console.log(users2.trim()) // tom
// console.log(users3) // jane

//배열 구조분해할당의 기본값.
// let [a,b,c=3] = [1,2];
// console.log(a) //1
// console.log(b) //2
// console.log(c) //3

// let [d,,f] = [3,4,5]
// console.log(d)
// console.log(f)

// 배열 구조분해는 바꿔치기가 쉬움

let a = 1;
let b = 2;
// 이상황에서 a와b를 바꾸고싶을때!
// a=b
// 라고하면 그냥 a가 2가됨
[a, b] = [b,a]

// console.log(a)
// console.log(b)


// 객체도 구조분해할당 가능!
// 키값을 안쓰고 변수로 하려면 : 변수명 으로 작성!
// 기본값 적용이 가능! 객체로 받은값이 없을때만! undefined일때만 기본값이 적용됨
let user = {name: 'mike', age: 30}
let {name: hisName, age, gender = 'male'} = user

// console.log(hisName)
// console.log(age)
// console.log(gender)



