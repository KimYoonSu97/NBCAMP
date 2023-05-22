//객체 / key -value pair
//하나의 변수에 여러개 값을넣을 수 있다.
// 밸류에는 어떠한 값도 올수 있어!! 제한이 없어!!!!!

//1. 객체 생성 방법
//1-1. 기본적인 객체 생성 방법

//1-2 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender =gender;
}

let person1 = new Person("홍길동", 30, "남자")
let person2 = new Person("길순", 60, "여자")

//2. 접근하는 방법
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

//3. 객체 메소드(객체가 가진 여러가지 기능:Object.~~)
//3-1 Object.key() : key를 가져오는 메소드

let person = {
    name : '홍길동',
    age : 30,
    gender : '남자'
};

let keys = Object.keys(person)
// console.log(keys)

//3-2 values
let values = Object.values(person);
// console.log(values)

// 3-3 entries
//key 와 value를 배열로 만든 배열(2차원 배열!!)
let entries = Object.entries(person);
// console.log(entries);

//3-4 assign
//객체복사
let newPerson = {}
Object.assign(newPerson,person, {gender:"여자"})
console.log(newPerson)

//3-5 객체 비교
// 다른 자료형에 비해 크기가 큼. 저장할 때 별도의 공간에 저장합니다.
//person1은 별도 공간에 주소를 저장하는거임
let person01 ={
    name : '홍길동',
    age : 30,

};
let person02 ={
    name : '홍길동',
    age : 30,
    gender : '남자'
};
// console.log(person01 === person02)

//3-6 객체 병합
let perfectMan = {}