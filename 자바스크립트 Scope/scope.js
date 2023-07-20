f2(); //1번

var f = function(){
    console.log("function 1");
    console.log("f3 : ", f3); // 2번
};

f(3); //3번

let f4 = () => console.log("function 4");

function f2() {
    console.log("function 2");
    f4(); //4번
}

var f3 = () => console.log("function 3");