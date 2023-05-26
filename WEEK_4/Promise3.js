var coffeeList = '';

var addEspresso = function(name) {
    coffeeList = name;
    console.log(coffeeList);
    setTimeout(addAmericano, 500, 'americano')
}

var addAmericano = (name) => {
    coffeeList += ", " + name;
    console.log(coffeeList);
    setTimeout(addCafeMocca, 500, 'cafe mocca')
}

var addCafeMocca = (name) => {
    coffeeList += ", " + name;
    console.log(coffeeList);
    setTimeout(addCafeLatte, 500, 'cafe latte')
}
var addCafeLatte = (name) => {
    coffeeList += ", " + name;
    console.log(coffeeList);
}

setTimeout(addEspresso, 500, 'Espresso')
 

// setTimeout(
//     function (name) {
//         var coffeeList = name;
//         console.log(coffeeList);
        
//         setTimeout(
//             function (name) {
//                 coffeeList += ", " + name;
//                 console.log(coffeeList);
                
//                 setTimeout(
//                     function (name) {
//                         coffeeList += ", " + name;
//                         console.log(coffeeList);
                        
//                         setTimeout(
//                             function (name) {
//                                 coffeeList += ", " + name;
//                                 console.log(coffeeList);
                                
//                             }
//                         ,500
//                         ,'cafe latte')
//                     }
//                 ,500
//                 ,'cafe mocca')
//             }
//         ,500
//         ,"americano")
//     }
// ,500
// ,"espresso")