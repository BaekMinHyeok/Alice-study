### == 동등비교 연산자

-   `==`는 두 값의 내용(값)을 비교합니다.
    자바스크립트가 형변환을 해주기 때문에 예기치 못한 에러가 나올 수 있다.
-   비교하기 전에 피연산자를 동일한 유형으로 변환합니다.

```jsx
"5" == 5; // true, '5'가 숫자로 강제 변환됨
false == 0; // true, false가 0으로 강제 변환됨
null == undefined; // true, null과 undefined는 느슨하게 동일하게 취급됨
```

-   NaN: `==`연산에서 **`NaN`**은 항상 **`false`**를 반환하며 자체와의 비교조차도 참이 되지 않습니다.

```jsx
NaN == NaN; // false
```

-   객체비교: 객체를 비교할 때 **`==`** 연산자는 참조 동등성을 확인하며 구조적 동일성이 아닌 경우 동등하지 않다고 간주합니다. 동일한 속성과 값이 있는 두 객체도 정확히 동일한 객체를 참조하지 않으면 동일하지 않은 것으로 간주됩니다.

```jsx
const obj1 = { key: "value" };
const obj2 = { key: "value" };
obj1 == obj2; // false, 속성과 값이 같더라도 동일한 객체를 참조하지 않음
```

### ===

-   `===`는 두 값의 내용과 데이터 유형을 비교합니다.
-   `==`, `===`는 같은 주소까지 비교합니다.

```jsx
const obj1 = { key: "value" };
const obj2 = { key: "value" };
const obj3 = obj1;

console.log(obj1 === obj2); // false, 다른 메모리 위치를 참조함
console.log(obj1 === obj3); // true, 같은 메모리 위치를 참조함
```

-   **`===`** 연산자는 두 **`NaN`** 값을 비교할 때 **`false`**를 반환합니다. 이는 'NaN'이 자신과 동일하지 않은 것으로 간주되기 때문입니다. **`NaN`**을 확인해야 하는 경우 **`isNaN()`** 함수를 사용해야 합니다.
    ```jsx
    NaN === NaN; // false
    ```
-   undefined 와 null 은 다른 값으로 간주됩니다.
    ```jsx
    undefined === null; // false
    ```
