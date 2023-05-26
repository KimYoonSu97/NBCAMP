var arr = [10,20,30]

var newArr = arr.map((a,b) => {
    return a += a
})
console.log(newArr)