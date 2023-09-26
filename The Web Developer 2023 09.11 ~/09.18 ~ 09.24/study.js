// function scope 

function helpMe() {
  let msg = "I'm on fire!";
  msg; //"I'm on fire";
} //함수 범위에 밖에서는 메세지가 나오지 않는다.
msg; // NOT DEFINED!


예제문제


let deadlyAnimal = "Blue-Ringed Octopus";

function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal)


"Scorpionfish"
"Blue-Ringed Octopus"

// 함수안으로 실행하면 지역 스코프안의 변수 값이 적용되고
// 전역 상태의 변수를 적용시키면 초기 전역 상태값이 나오게 된다



// const 와 let 은 범위 규칙을 따르는 변수들을 추가 가능
// var 는 범위 없이 사용가능


//ex) const 와 let 은  함수없이 if, for 문을 사용하면 에러가 나오지만 
//var 는 함수없이도 값이 적용된다. 


// 고차함수


function callTwice(func) {
  func();
  func();
}

function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f()
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1
  console.log(roll)
}

callTwice(rollDie)


// ### 메서드 정의하기
// 메서드는 함수나 객체일 경우가 있다.



//객체일 경우
const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  }
}

const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'scottish fold',
  meow() {
    console.log("THIS IS:", this)
    console.log(`${this.name} says MEOWWWW`);
  }
}

const meow2 = cat.meow;