// //이런 패턴은 어떨까요?
// var copyObject = function (target) {
// 	var result = {};

// 	// for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 있습니다.
// 	// 하드코딩을 하지 않아도 괜찮아요.
// 	// 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면
// 	// 되겠죠!?
// 	for (var prop in target) {
// 		result[prop] = target[prop];
// 	}
// 	return result;
// }

// //위 패턴을 우리 예제에 적용해봅시다.
// var user = {
// 	name: 'wonjang',
// 	gender: 'male',
// };

// var user2 = copyObject(user);
// user2.name = 'twojang';

// if (user !== user2) {
// 	console.log('유저 정보가 변경되었습니다.');
// }

// console.log(user.name, user2.name);
// console.log(user === user2);


// // 함수 선언문. 함수명 a가 곧 변수명
// // function 정의부만 존재, 할당 명령이 없는 경우
// function a () { /* ... */ }
// a(); // 실행 ok

// // 함수 표현식. 정의한 function을 별도 변수에 할당하는 경우
// // (1) 익명함수표현식 : 변수명 b가 곧 변수명(일반적 case에요)
// var b = function () { /* ... */ }
// b(); // 실행 ok

// // (2) 기명 함수 표현식 : 변수명은 c, 함수명은 d
// // d()는 c() 안에서 재귀적으로 호출될 때만 사용 가능하므로 사용성에 대한 의문
// var c = function d () { /* ... */ } 
// c(); // 실행 ok
// d(); // 에러!


// console.log(sum(1, 2));
// console.log(multiply(3, 4));

// function sum (a, b) { // 함수 선언문 sum
// 	return a + b;
// }

// var multiply = function (a, b) { // 함수 표현식 multiply
// 	return a + b;
// }


// console.log(sum(3, 4));

// // 함수 선언문으로 짠 코드
// // 100번째 줄 : 시니어 개발자 코드(활용하는 곳 -> 200군데)
// // hoisting에 의해 함수 전체가 위로 쭉!
// function sum (x, y) {
// 	return x * y;
// }


// // var a = sum(1, 2);


// // // 함수 선언문으로 짠 코드
// // // 5000번째 줄 : 신입이 개발자 코드(활용하는 곳 -> 10군데)
// // // hoisting에 의해 함수 전체가 위로 쭉!
// // function sum (x, y) {
// // 	return x + ' + ' + y + ' = ' + (x + y);
// // }

// // var c = sum(1, 2);

// // console.log(c);




// console.log(sum(3, 4));

// // 함수 표현식으로 짠 코드
// // 함수 선언부만 위로 쭉!
// // 이 이후부터의 코드만 영향을 받아요!
// var sum = function (x, y) {
// 	return x + y;
// }



// var a = sum(1, 2);


// // 함수 표현식으로 짠 코드
// // 함수 선언부만 위로 쭉!
// // 이 이후부터의 코드만 영향을 받아요!
// var sum = function (x, y) {
// 	return x + ' + ' + y + ' = ' + (x + y);
// }


// var c = sum(1, 2);

// console.log(c);

// 아래 코드를 여러분이 직접 call stack을 그려가며 scope 관점에서 변수에 접근해보세요!
// 어려우신 분들은 강의를 한번 더 돌려보시기를 권장드려요 :)
var a = 1;
var outer = function() {
	var inner = function() {
		console.log(a); // 이 값은 뭐가 나올지 예상해보세요! 이유는 뭐죠? scope 관점에서!
		var a = 3;
        return a = 3;
	};
	inner();
	console.log(a); // 이 값은 또 뭐가 나올까요? 이유는요? scope 관점에서!
};
outer();
console.log(a); // 이 값은 뭐가 나올까요? 마찬가지로 이유도!

var obj1 = {
	outer: function() {
		console.log(this); // (1)
		var innerFunc = function() {
			console.log(this); // (2), (3)
		}
		innerFunc();

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod();
	}
};
obj1.outer();


var obj1 = {
	outer: function() {
		console.log(this); // (1) outer

		// AS-IS
		var innerFunc1 = function() {
			console.log(this); // (2) 전역객체
		}
		innerFunc1();

		// TO-BE
		var self = this;
		var innerFunc2 = function() {
			console.log(self); // (3) outer
		};
		innerFunc2();
	}
};

// 메서드 호출 부분
obj1.outer();

var func = function (a, b, c) {
	console.log(this, a, b, c);
};

// no binding
func(1, 2, 3); // Window{ ... } 1 2 3

// 명시적 binding
// func 안에 this에는 {x: 1}이 binding돼요
func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6