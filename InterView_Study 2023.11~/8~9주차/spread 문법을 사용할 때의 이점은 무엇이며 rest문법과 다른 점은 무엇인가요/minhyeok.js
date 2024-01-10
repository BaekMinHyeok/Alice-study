// spread 문법

// 1. 객체 병합
const obj1 = {
  a: 1,
  b: 2
};
const obj2 = {
  c: 3,
  ...obj1
};
// 결과: { c: 3, a: 1, b: 2 }

// 2. 배열 확장
const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1];
// 결과: [4, 5, 1, 2, 3]

// 3. 함수 호출 시 인자 전달 
function exampleFunction(a, b, c) {
  console.log(a, b, c);
}

const args = [1, 2, 3];
exampleFunction(...args);
// 결과: 1 2 3
// rest 문법

// 1. 나머지 인수 수집

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));
// 결과: 15

// 2. 배열 분해에서 나머지 활용
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 결과: 1
console.log(rest); // 결과: [2, 3, 4, 5]

// 3. 함수 매개변수에서 나머지 활용
function printInfo(name, age, ...details) {
  console.log(name); // 결과: John
  console.log(age); // 결과: 30
  console.log(details); // 결과: ["Male", "Developer"]
}

printInfo("John", 30, "Male", "Developer");