const a = 10;
const b = 10;
console.log(a === b); // true
let c = 20;
let d = c;
console.log(c === d); // true

d = 30;
console.log(c); // 20
console.log(d); // 30
console.log(c === d); // false

const obj1 = {
  a: 10,
  b: "abc",
};
let obj2 = obj1;
console.log(obj1 === obj2); // true

obj2.a = 20;
console.log(obj1); // {a: 20, b: 'abc'}
console.log(obj2); // {a: 20, b: 'abc'}
console.log(obj1 === obj2); // true


const obj3 = {
  a: 1,
  b: {
    c: 2,
  },
};
const obj4 = {
  ...obj3
};
console.log(obj3 === obj4); // false
console.log(obj3.b === obj4.b); // true


const obj5 = {
  a: 10,
  b: {
    c: "abc",
  },
};
const obj6 = Object.assign({}, obj5);
obj6.a = 20;
obj6.b.c = "def";

console.log(obj5); // { a: 10, b: { c: "def" } }
console.log(obj6); // { a: 20, b: { c: "def" } }




var person1 = {
  name: 'Lee'
}
var person2 = {
  name: 'Lee'
}
var person3 = {
  ...person1
};


console.log(person1 === person2); //1
console.log(person1.name === person2.name); //2
console.log(person1 === person3); //3

var person4 = {
  name: {
    first: 'll',
    last: 'jj'
  }
}
var person5 = {
  ...person4
}
person5.name.first = 'dd';
console.log(person4.name.first === person5.name.first) //4