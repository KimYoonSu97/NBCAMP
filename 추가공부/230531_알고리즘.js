







let num = 0;
function a(a){
    let answer = "";
    let count = 1;
    for (let i = 0; i < a.length; i++){
        if( a[i]=== a[i+1]){
            count++
        } else {
            answer += a[i] + count + "/"
            count = 1
        }
        console.log(answer)
    }
return answer
}

a("acccdeee")