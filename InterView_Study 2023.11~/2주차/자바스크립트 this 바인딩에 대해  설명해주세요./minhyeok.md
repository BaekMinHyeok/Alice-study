this가 참조하는 것은 함수가 호출되는 방식에 따라 결정되는데 이것을 “this binding”이라고 한다

-   기본 바인딩
    -   기본 바인딩이 적용될 경우 **this는 전역 객체에 바인딩된다.**
    -   this는 호출을 한다는 뜻이고 만약 호출 대상이 없으면 브라우저 환경인 경우 window, Node.js 환경인 경우 global를 나타냅니다.
        ```tsx
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
        ```
        bindWhoIsIt함수처럼 bind함수에 바인딩을 원하는 객체를 함께 넣어주면 내가 원하는 결과가 나옵니다. (또는 화살표 함수를 사용하면 됩니다.)
        -   **엄격모드에서는 기본 바인딩 대상에서 전역객체는 제외된다.(’use strict’)**
            ```tsx
            function printStudent() {
                console.log(this);
            }
            printStudent(); // window 객체
            ```
            ‘use strict’
            ```tsx
            "use strict";

            function printStudent() {
                console.log(this);
            }
            printStudent(); // undefined
            ```
-   암시적 바인딩
    -   함수가 객체의 메서드로서 호출되는 상황에서 this가 바인딩되는 것을 말합니다.
    -   이때 this는 **해당 함수를 호출한 객체, 즉 콘텍스트 객체에 바인딩됩니다.**
-   명시적 바인딩
    -   자바스크립트의 모든 Function 은 [call()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [apply()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), [bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)라는 프로토타입 메소드를 가지고있다. 이 3가지 메서드 중 하나를 호출함으로써 this 바인딩을 코드에서 명시하는 것을 명시적 바인딩이라고 한다. 이때 this는 **내가 명시한 객체에 바인딩된다**.
        **call(), bind()**
        ```tsx
        const foo = {
            a: 20,
        };

        function bar() {
            console.log(this.a);
        }

        bar.call(foo); // 20
        bar.apply(foo); // 20
        ```
        -   bar의 Function 프로토타입 메서드 call, apply의 매개변수로 바인딩할 객체를 넘겨주면서 **bar 함수를 실행할 때의 this 컨텍스트를 foo로 직접 바인딩** 해주었다.
        -   call과 apply의 동작은 같지만 두번째 매개변수로 객체의 인자를 전달해주는데(e.g. 생성자의 매개변수), call은 매개변수의 목록, apply는 배열을 받는다는 차이점이 있다.
        bind()
        ```tsx
        function Foo() {
            this.a = 20;
        }

        const foo = new Foo();

        console.log(foo.a); // 20
        ```
        -   bind 메서드는 매개변수로 전달받은 오브젝트로 **this가 바인딩된 함수를 반환**한다.
        -   이것을 하드 바인딩이라고 하는데 하드 바인딩된 함수는 이후 호출될 때마다 처음 정해진 this 바인딩을 가지고 호출된다.
-   new 바인딩
    -   new 키워드는 함수를 호출할 때 앞에 new 키워드를 사용하는 것으로 객체를 초기화할 때 사용하는데, 이때 사용되는 함수를 생성자 함수라고 한다.(컨벤션으로 생성자 함수는 대문자로 시작한다)그리고 생성자 함수에서는 **this키워드를 해당 생성자를 이용해 생성할 객체에 대한 참조**로 사용한다.
        ```tsx
        function Foo() {
            this.a = 20;
        }

        const foo = new Foo();

        console.log(foo.a); // 20
        ```
        -   위 코드에서 Foo 함수가 new 키워드와 함께 호출되는 순간 새로운 객체가 생성되고, **새로 생성된 객체가 this로 바인딩이 된다**. 그리고 생성된 객체의 a라는 프로퍼티에 20이라는 값이 할당되고, 해당 객체는 foo라는 변수에 할당된다.
-   **_+ 화살표 함수(ES6)_**
    -   Arrow 함수는 일반함수와 달리 렉시컬 환경세의 this를 기억합니다. 그래서 화살표 함수 자체에는 this가 없지만, 화살표 함수는 자신을 포함하고 있는 스코프 중 제일 근접한 상위 스코프의 this를 정적으로 바인딩합니다.
        이때문에 bind 함수를 이용해서 억지로 우너하는 객체를 바인딩해줄 필요가 없습니다.
            ```tsx
            const student = {
                name: 'Jane',
                age: 33,
                arrowTest: function() {
                    const arrowTest2 = function () {
                        console.log(this.name)
                    }
                    arrowTest2();
                }
            }

            student.arrowTest(); //undefined
            ```

            화살표 함수는 호출 시 상위에 있는 객체를 가리킵니다.

            ```tsx
            const student = {
                name: 'Jane',
                age: 33,
                arrowTest: function() {
                    const arrowTest2 = () => {
                        console.log(this.name)              // Jane
                    }
                    arrowTest2();
                }
            }

            student.arrowTest();
            ```
    -   그 외에 \***\*\_this, that, self\*\***
