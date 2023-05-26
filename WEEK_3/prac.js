var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }
    },
    
    getName: function() {
        return this.fullname;
    },

    getFirstName: () => {
        return this.fullname.split(' ')[0];
    },

    getLastName: (function() {
        return this.fullname.split(' ')[1];
    })()

}

// not 1 vs 2
// it is 3 vs 4,5

// 1. 
// getFullname이라는 key값을 가진 익명함수는 opponent라는 객체데이터에서 메소드로서 실행되고 있다.그렇게 되면 메서드는 자신을 호출한 대상객체에 대한 동작을 수행하기 때문에 여기서의 this는 opponent를 바라보게 되고 해당 객체에서의 fullname(key)의 value인 Francis Ngannou를 반환한다..
// getName이라는 key값을 가진 익명함수는 fighter라는 호출의 대상인 객체가있기 때문에 fighter라는 객체 데이터에 fullname이라는 key값의 value를 찾아서 반환한다.  
// getFirstName이라는 키값을 가진 화살표 함수. 화살표함수의 경우에는 this를 바인딩하지 않기 때문에 전역객체를 바라보게 되고 fullName이라는 변수에 담긴 'Ciryl Gane'를 반환한 뒤,
// 공백으로 분할된 배열의 0번째 인덱스. 즉 Ciryl를 최종반환한다.
// getLastName이라는 키값의 밸류인 함수는 메소드로 실행된다고 하더라도, 함수 그 자체로 호출되는것 이기 때문에 this는 전역객체를 바라보게 되고 위와 동일하게 fullName이라는 변수의 'Ciryl Gane'를 반환한 뒤,
// 공백으로 분할된 배열의 1번째 인덱스. 즉 Gane를 반환한다.


console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);

// Not Francis Ngannou VS John Jones
// It is John Jones VS Ciryl Gane


var user = {
    name: "john",
    age: 20,
}

var getAged = function (user, passedTime) {
		var a = {};
        for ( const b in user ) {
            a[b] = user[b]
        }
        return a.age += passedTime
}


var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
    if (!user2) {
		    console.log("Failed! user2 doesn't exist!");
	  } else if (user1 !== user2) { 
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
}

agedUserMustBeDifferentFromUser(user, agedUser);