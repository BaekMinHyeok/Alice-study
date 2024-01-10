// 1. 중첩된 객체
const person = {
  name: 'John',
  age: 30,
  address: {
    city: 'Seoul',
    country: 'South Korea'
  }
};

const {
  name,
  age,
  address: {
    city,
    country
  }
} = person;

console.log(name); // 'John'
console.log(age); // 30
console.log(city); // 'Seoul'
console.log(country); // 'South Korea'

//2. 기본값 설정
const person1 = {
  name: 'John'
};

const {
  name1,
  age1 = 25
} = person;

console.log(name); // 'John'
console.log(age); // 25 (기본값이 설정되어 있지 않으므로 기본값이 적용됨)

// 3. 변수이름 변경
const person2 = {
  fullName: 'Jane Doe',
  age: 28
};

// 변수 이름을 바꿔서 디스트럭처링
const {
  fullName: name2,
  age2
} = person;

console.log(name); // 'Jane Doe'
console.log(age); // 28


// 1. 스프레드 연산자와 함께 사용
const numbers = [1, 2, 3, 4, 5];

// 첫 번째 요소와 나머지 요소들을 분리
const [first, ...rest] = numbers;

console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

// 2. 기본값 설정
const colors = ['red', 'blue'];

// 배열에 요소가 없을 경우를 대비하여 기본값 설정
const [primary = 'green', secondary = 'yellow'] = colors;

console.log(primary); // 'red'
console.log(secondary); // 'blue'

//3. 배열 요소의 순서 변경

let a = 1,
  b = 2;

// 변수 a와 b의 값을 서로 바꿈
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1