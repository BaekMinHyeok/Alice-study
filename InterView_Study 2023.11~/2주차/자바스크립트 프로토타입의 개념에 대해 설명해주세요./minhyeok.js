const 부모객체 = {
  일반기능: function () {
    console.log("안녕하세요!");
  },
};

// 자식 객체
let 자식객체 = {};
자식객체.__proto__ = 부모객체;

// 자식 객체에서 부모의 기능 호출
자식객체.일반기능(); // "안녕하세요!" 출력

const array = [];

console.dir(array);
//실행 결과

const obj = {};

console.dir(obj);
//실행 결과