-   클로저는 무엇인가요? 원리와 사용하는 이유를 설명해 주세요.

    -   함수가 속한 렉시컬 스코프를 기억하여, 함수가 렉시컬 스코프 밖에서 실행될 때도
        이 스코프에 접근할 수 있게 해주는 기능입니다.
        > 렉시컬 스코프란 함수가 선언이 되는 위치에 따라서 상위 스코프가 결정되는 스코프 입니다.
        > 내부함수는 외부함수의 지역변수에 접근할 수 있는데 외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근할 수 있는 것을 말합니다.
    -   클로저 예시

        ```jsx
        function outerFunc() {
            var x = 10;
            var innerFunc = function () {
                console.log(x);
            };
            innerFunc();
        }

        outerFunc(); // 10
        ```

        -   함수 outerFunc 내에서 내부함수 innerFunc가 선언되고 호출되었다.
        -   이때 내부함수 innerFunc는 자신을 포함하고 있는 외부함수 outerFunc의 변수 x에 접근할 수 있다.
        -   이는 함수 innerFunc가 함수 outerFunc의 내부에 선언되었기 때문이다.
            > 스코프는 함수를 호출할 때가 아니라 함수를 어디에 선언하였는지에 따라 결정된다. 이를 **[렉시컬 스코핑(Lexical scoping)](https://poiemaweb.com/js-scope#7-%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84)**라 한다. 위 예제의 함수 innerFunc는 함수 outerFunc의 내부에서 선언되었기 때문에 함수 innerFunc의 상위 스코프는 함수 outerFunc이다. 함수 innerFunc가 전역에 선언되었다면 함수 innerFunc의 상위 스코프는 전역 스코프가 된다.

        ```jsx
        function outerFunc() {
            var x = 10;
            var innerFunc = function () {
                console.log(x);
            };
            return innerFunc;
        }

        /**
         *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
         *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
         */
        var inner = outerFunc();
        inner(); // 10
        ```

        -   함수 outerFunc는 내부함수 innerFunc를 반환하고 생을 마감했다.
        -   즉, 함수 outerFunc는 실행된 이후 콜스택(실행 컨텍스트 스택)에서 제거되었으므로 함수 outerFunc의 변수 x 또한 더이상 유효하지 않게 되어 변수 x에 접근할 수 있는 방법은 달리 없어 보인다.
        -   그러나 위 코드의 실행 결과는 변수 x의 값인 10이다. 이미 life-cycle이 종료되어 실행 컨텍스트 스택에서 제거된 함수 outerFunc의 지역변수 x가 다시 부활이라도 한 듯이 동작하고 있다.
            이처럼 자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우, 외부 함수 밖에서 내부함수가 호출되더라도 외부함수의 지역 변수에 접근할 수 있는데 이러한 함수를 클로저(Closure)라고 부른다.

    -   클로저의 활용
        -   상태 유지
            -   클로저는 함수가 데이터를 기억하고 유지할 수 있게 해주어 여러 호출 간에 특정 상태를 유지할 수 있습니다
        -   전역 변수의 사용억제
            -   전역 변수에 과도하게 의존하는 것을 줄이고, 프로그램의 다른 부분에서 의도치 않은 간섭을 방지하기 위해 데이터를 보호할 수 있습니다
        -   정보의 은닉
            -   함수 안에 데이터를 숨길 수 있게 해줍니다. 이로써 외부에 필요한 기능만 드러내고, 그 외의 정보는 감추어 프로그램의 안전성을 높일 수 있습니다

```jsx
const a = 1;
{
    const a = 2;
    {
        const a = 3;
        console.log(a);
    }
}
```
