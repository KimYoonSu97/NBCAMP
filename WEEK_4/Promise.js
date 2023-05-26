setTimeout(
    function (name) {
        var coffeeList = name;
        console.log(coffeeList);
        
        setTimeout(
            function (name) {
                coffeeList += ", " + name;
                console.log(coffeeList);
                
                setTimeout(
                    function (name) {
                        coffeeList += ", " + name;
                        console.log(coffeeList);
                        
                        setTimeout(
                            function (name) {
                                coffeeList += ", " + name;
                                console.log(coffeeList);
                                
                            }
                        ,500
                        ,'cafe latte')
                    }
                ,500
                ,'cafe mocca')
            }
        ,500
        ,"americano")
    }
,500
,"espresso")