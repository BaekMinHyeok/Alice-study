-   spread 문법을 사용할 때의 이점은 무엇이며 rest문법과 다른 점은 무엇인가요?
    -   **spread 문법**
        JavaScript에서 객체나 배열의 값을 확장하거나 병합하는 데 사용됩니다.
        **이점**
        1. 코드를 간결하게 작성하고, 배열 또는 객체의 요소를 펼쳐서 가져와 읽기 쉬운 코드를 작성합니다.
        2. 기존 배열이나 객체를 수정하지 않고 새로운 배열이나 객체를 생성하여 불변성을 유지합니다.
        3. **전개 연산자와의 호환성:** 전개 연산자와 유사하게 동작하므로 코드 일관성을 유지할 수 있습니다.
        4. **중첩된 배열/객체의 편리한 다룸:** 중첩된 배열 또는 객체를 편리하게 다룰 수 있습니다.

        5. **객체 병합(Object Merging):** 객체의 속성을 병합할 때 사용됩니다. 기존 객체의 속성을 유지한 채로 새로운 속성을 추가하거나 덮어쓸 때 효과적입니다.

            ```jsx
            javascript복사;
            const obj1 = { a: 1, b: 2 };
            const obj2 = { c: 3, ...obj1 };
            // 결과: { c: 3, a: 1, b: 2 }
            ```

        6. **배열 확장(Array Spreading):** 배열의 요소를 다른 배열에 추가하거나 두 배열을 병합할 때 사용됩니다.

            ```jsx
            javascript복사;
            const arr1 = [1, 2, 3];
            const arr2 = [4, 5, ...arr1];
            // 결과: [4, 5, 1, 2, 3]
            ```

        7. **함수 호출 시 인자 전달:** 함수를 호출할 때 배열이나 객체의 요소를 펼쳐서 인자로 전달할 수 있습니다.

            ```jsx
            javascript복사;
            function exampleFunction(a, b, c) {
                console.log(a, b, c);
            }

            const args = [1, 2, 3];
            exampleFunction(...args);
            // 결과: 1 2 3
            ```
    -   **rest 문법**
        **이점**
        1. **가변적인 인수 처리:** 함수의 매개변수에서 나머지 인수들을 배열로 수집하여 가변적으로 함수를 호출할 수 있습니다.
        2. **매개변수의 유연한 활용:** 함수 정의 시 명시한 매개변수 외의 나머지 인수를 배열로 처리하여 유연한 매개변수 활용이 가능합니다.
        3. **인수 수에 대한 제약 감소:** 함수가 몇 개의 인수를 받을지 미리 알 수 없는 상황에서 유용하게 사용할 수 있습니다.

        4. **나머지 인수 수집:** 함수 매개변수에서 `...rest`를 사용하여 함수에 전달된 나머지 인수들을 배열로 수집하는 기능.

            ```jsx
            javascript복사;
            function sum(...numbers) {
                return numbers.reduce((acc, num) => acc + num, 0);
            }

            console.log(sum(1, 2, 3, 4, 5));
            // 결과: 15
            ```

        5. **배열 분해에서 나머지 활용:** 배열 분해(Destructuring)에서 `[first, ...rest]`와 같이 사용하여 첫 번째 요소를 제외한 나머지 요소들을 새로운 배열로 할당하는 기능.

            ```jsx
            javascript복사;
            const [first, ...rest] = [1, 2, 3, 4, 5];
            console.log(first); // 결과: 1
            console.log(rest); // 결과: [2, 3, 4, 5]
            ```

        6. **함수 매개변수에서 나머지 활용:** 함수 정의 시 매개변수로 `...details`와 같이 사용하여 함수에 전달된 인수 중에서 첫 번째와 두 번째 매개변수 이외의 나머지 인수들을 배열로 수집하는 기능.

            ```jsx
            javascript복사;
            function printInfo(name, age, ...details) {
                console.log(name); // 결과: John
                console.log(age); // 결과: 30
                console.log(details); // 결과: ["Male", "Developer"]
            }

            printInfo("John", 30, "Male", "Developer");
            ```
    `spread` 문법과 `rest` 문법은 비슷해 보이지만 사용되는 맥락에서 차이가 있습니다. `spread`는 주로 객체나 배열의 확장이나 병합에 사용되고, `rest`는 함수의 매개변수로 여러 인자를 배열로 받거나, 나머지 요소들을 배열로 수집할 때 사용됩니다. `spread`는 주로 값을 펼치는 데 사용되고, `rest`는 주로 값을 수집하는 데 사용됩니다.
