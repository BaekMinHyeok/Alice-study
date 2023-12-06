-   자바스크립트에서 프로토타입은 객체 지향 프로그래밍의 중요한 개념 중 하나입니다.
-   모든 객체는 프로토타입을 가지며, 이를 통해 상속 관계가 형성됩니다.
-   프로토타입은 객체의 기본 동작 및 속성을 정의하고, 이를 다른 객체가 공유하도록 허용합니다.

예를들어 A라는 객체가 특정 기능을 가지고 있다면, B객체가 A객체의 프로토타입을 이용하면 A의 기능을 B에서도 사용할 수 있게 됩니다.

```jsx
// 부모 객체
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
```

`부모객체`가 일반기능을 가지고 있고, `자식객체`는 이 기능을 부모의 프로토타입을 통해 물려받아 사용하고 있어요. 이런 식으로 프로토타입을 이용하면 코드를 더 간결하게 만들 수 있고, 유지보수도 쉬워집니다.

```jsx
const array = [];

console.dir(array);실행 결과
```

!https://blog.kakaocdn.net/dn/kw6HP/btrF2Nsd7qT/qKzDfTIpc5Ifw9wNSOBAOK/img.png

```jsx
const obj = {};

console.dir(obj);실행 결과
```

!https://blog.kakaocdn.net/dn/0GKzR/btrFZLu4nVl/sddyrCkVlnWdDlhWlfEKQ0/img.png

실행 결과에 공통적으로 존재하는 [[Prototype]] 프로퍼티가 바로 프로토타입입니다. 프로토타입 체이닝에 의해 array는 Array의 함수 및 프로퍼티, obj는 Object의 함수 및 프로퍼티를 사용할 수 있습니다.

-   JavaScript는 값을 할당하는 시점에 프로토타입이 정해집니다.
-   프로토타입은 상위 객체를 의미합니다.
