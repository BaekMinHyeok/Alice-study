  const student = {
    name: "mike",
    age: 25,
    printStudent: function () {
      console.log(this);
    },
  };

  student.printStudent(); // {name: 'mike', age: 25, printStudent: ƒ}

  let whoIsIt = student.printStudent;
  whoIsIt(); // window 객체

  let bindWhoIsIt = whoIsIt.bind(student);
  bindWhoIsIt(); // {name: 'mike', age: 25, printStudent: ƒ}

  function printStudent() {
    console.log(this);
  }
  printStudent(); // window 객체
  ``
  `
            ‘use strict’
            `
  ``
  tsx
    "use strict";

  function printStudent() {
    console.log(this);
  }
  printStudent(); // undefined

  //call() bind()
  const foo = {
    a: 20,
  };

  function bar() {
    console.log(this.a);
  }

  bar.call(foo); // 20
  bar.apply(foo); // 20



  function Foo() {
    this.a = 20;
  }

  const foos = new Foo();

  console.log(foos.a); // 20