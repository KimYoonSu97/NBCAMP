//배열

//1. 생성
//1-1. 기본 생성
// let fruit= ["apple",'banana','kiwi'];

//1-2 크기 지정
let number = new Array(5)

// console.log(fruit.length);
// console.log(number.length);

//2. 요소 접근
// console.log(fruit[0])
// console.log(fruit[1])
// console.log(fruit[2])

// console.log(fruit[0]);
// fruit = push("오렌지");
// console.log(fruit);
//3. 배열 메소드
//3-1 push
//배열에 마지막에 집어넣기
// let fruit= ["apple",'banana'];
// console.log(fruit)
// fruit.push("오렌지")
// console.log(fruit)

//3-2 pop
//마지막 요소 삭제


// console.log(fruit)
// fruit.pop();
// console.log(fruit)

//3-3 shift
//첫번째 요소 삭제

// fruit.shift();
// console.log(fruit)

//3-4 unshift
//앞에 요소 넣기
// fruit.unshift("포도");
// console.log(fruit)

// 3-5 splice
//위치를 지정해서 삭제?
// splice(위치, 개수, 넣을꺼)
// fruit.splice(1, 1, "브내너")
// console.log(fruit)

//3-6 slice
// let fruit= ["apple",'banana','grape'];

// let slicedFruits = fruit.slice(1,3);
// console.log(slicedFruits)

//forEach, map, filter, find

let numbers = [1,2,3,4,5];
// 매개 변수자리에 함수를 넣는거를 콜백함수라고함.
numbers.forEach(function(item){
// 넘버스라는 배열의 요소들이 하나하나 들어가면서 돌아감.
    console.log(item)
});


//map = 항상 원본길이만큼의 배열이 리턴된다..
//리턴을 안하면 언디파인드가 개수만큼 나오는거임...
let newNumbers = numbers.map(function(item){
    //멥함수에 들어가는 펑션은 리턴을 가져야함...
    //왜냐하면... 기존의 배열을 가공해서... 새로운 배열을 생산하기 떄문임.
    //맵을 거치면 반드시 새로운 배열이 튀어나옴 그래서 변수 선언을 꼭해줘야함
    return item * 2;

});
// console.log(newNumbers)

//filter
//맵이랑 비슷하게 새로운 배열을 만들어줌 ,
//필터는 조건이 들어감... 필터링할 조건이 들어가는거임..

let filteredNumbers = numbers.filter(function(item){
    return item !== 5
})
console.log(filteredNumbers)


//find
//리턴문을 통해서 조건에 맞는거만 리턴함
//첫번째꺼만! 얘는그럼 배열을 반환하진않네...
let result = numbers.find(function(item){
    return item > 3;
})

console.log(result)