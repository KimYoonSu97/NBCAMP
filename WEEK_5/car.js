// Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는 다음 네 개의 값이 필수로 입력돼야 합니다!

// - **`modelName`**
// - **`modelYear`**
// - **`type`**
// - **`price`**

// **`makeNoise()`** 메서드를 만들어 클락션을 출력해주세요.

//원장님 ...핃백...
// set , get은 수정할때... 하는것임
//만약 니가 애진작 유효성검사가하고싶으면 컨스트럭터에서 미리 해야하고... 그건 니가 함수를 선언해놓고 재사용을하면됨.

class Car {
    
    constructor (modelName, modelYear, type, price) {
        // if (typeof modelName !== 'string') {
        //     console.log("[오류] 입력된 모델명이 문자형이 아니잖아!")
        //  }
        //  이렇게 애진작에 확인하지 않으면... 안되는지..?
        // set, get은 회원정보 수정같은 경우에만 적용할수있는건지?
        //위에는 내비두고 밑에만 언더스코어를 붙임 그렇게 하면
        // 오류가 나오면서 모델네임이 없는 객체가 생겨벌임...
        // 그럼 모델네임에 객체가 있는지를 유효성 검사를 또 해야하겠지?
        // 아니면 오류가 나온다고 말하고 다시입력하게끔 만들면 되겠고...?
        // 
        this.modelName = modelName;
        this._modelYear = modelYear;
        this._type = type;
        this._price = price;
    }

    get modelName () {
        return this._modelName;
    }
    set modelName(value) {
      // console.log(1);
        if (value.length <= 0) {
          console.log("[오류] 모델명이 입력되지 않았습니다. 확인해!");
          return;
        } else if (typeof value !== "string") {
          console.log("[오류] 입력된 모델명이 문자형이 아니잖아!");
          return;
        }
    
        this._modelName = value;
      }

    makeNoise(){
        console.log(`${this.modelName} 빵!!`)
    }

    LaunchIn() {
        console.log(`${this.modelName}은 ${this.modelYear}년에 런칭하였읍니다.`)
    }
}

const car1 = new Car(1, '2008' , 'd',5000);
const car2 = new Car('티볼리','2007','g',9000);
const car3 = new Car('렉서스','2020','e',15000);

console.log(car1)
// car1.modelName = 1;
// console.log(car1)
