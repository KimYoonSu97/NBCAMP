var kim = '왜안나와...'

var obj1 = {
	outer: function() {
		console.log(this.a); // { outer: [Function: outer], a: 'yoons' } 잘~!나온다~!
		var innerFunc1 = function() {
			console.log(this.kim);
		}
		innerFunc1();
		//여기서의 this는 메소드로 호출된게아니라 함수 자체로 호출된거라 전역객체를 바라보고있음.
		//근데 왜 전역에 있는 프로퍼티는... 가져오질 못하는것임???
	},

	//글로발 객체에 대하여.. 연구하시오.... 허나 잘 쓰지않소.. 위험하기 때문이오...
    a : 'yoons',
};

// 메서드 호출 부분
obj1.outer();

// var innerFunc1 = () => {
//     console.log(this)
// };
// innerFunc1()
// TO-BE
// var self = this;
// var innerFunc2 = function() {
// 	console.log(self); // (3) outer
// };
// innerFunc2();