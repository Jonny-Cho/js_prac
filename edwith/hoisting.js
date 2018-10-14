console.log("Hoisting");

function test() {
    console.log(printName());
    
    function printName(){ // 함수선언문
        return 'anonymouse';
    }
}

test();

function test2(){
    console.log(printName2());

    var printName2 = function(){ // 함수표현식
        return 'printname2';
    }
}

test2(); // 오류 함수선언문과 함수표현식의 호이스팅 차이

// 함수표현식은 var printName2; 만 호이스팅되어 최상단으로 올라가기 때문에
// function()을 불러오지 않는다.