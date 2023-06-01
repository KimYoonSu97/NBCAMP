// 나머지 매개변수는 ...으로 사용

//인수의 개수를 맞출필요는 없음
function showName(...name) {
    console.log(name)
}
//아무값도 안넣으면 빈 배열을 반환함..
showName() // []
showName('mike') // mike
showName('mike', 'tom') // mike tom

