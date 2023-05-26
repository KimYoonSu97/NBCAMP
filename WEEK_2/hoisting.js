//action point 1 : 결과 값 예상해보기
//action point 2 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	console.log(b);
	var b = 'bbb';
	console.log(b);
	function b() { }
	console.log(b);
}
a();