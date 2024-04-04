-   TDZ란?
    변수가 선언되었지만 아직 초기화 되지 않는 상태를 말 한다.
    쉽게 말 해 '선언만 되고 아직 초기화 되지 않는 변수가 머무는 공간'이라고 생각하면 될 거 같다!
    JS에서'let'이나 'const'로 선언한 변수들이 TDZ을 거쳐 간다.
    이 공간에 있는 변수를 참조하려고 하면  'ReferenceError'를 마주할 것이다.
-   그럼 TDZ가 왜 필요한데?
    TDZ의 주요 목적은 프로그래밍 오류를 줄이는데 있다.
    대표적으로 초기화 되지 않는 변수를 사용하는 것을 방지할 수 있다
    TDZ의 동작(작동) 방식TDZ의 동작 방식은 '
-   변수 선언 전'과 '변수 선언 및 초기화' 2가지로 나누어 볼 수 있다.
    다시 한 번 말 하지만 'let'이나 'const'로 선언한 변수들만 TDZ 동작 방식을 거쳐간다.
    변수 선언전, 변수 선언 및 초기화를 아래에서정말 정말 쉽게 설명하겠다.!!🙊
    변수 선언 전변수가호이스팅 되어 스코프의 시작점에 존재하지만 아직 초기화 되지 않는다.
    이 단계에서 변수에 접근하려고 하면 ReferenceError(참조 불가)에러 발생
    ```jsx
    // let으로 선언된 변수
    console.log(beforeLet); // ReferenceError
    let beforeLet = "이제 사용 가능!";
    console.log(beforeLet); // 출력: "이제 사용 가능!"

    // const로 선언된 변수
    console.log(beforeConst); // ReferenceError
    const beforeConst = "이제 사용 가능!";
    console.log(beforeConst); // 출력: "이제 사용 가능!"
    ```
-   변수 선언 및 초기화
    변수가 선언되고 초기화된 후, 이제 안전하게 사용할 수 있는 단계.이 단계에서는 변수가 TDZ(Temporal Dead Zone)를 벗어나고, 값이 할당되어 접근 및 사용이 가능.
    ```jsx
    // let으로 선언된 변수
    let letVariable;
    console.log(letVariable); // 출력: undefined (TDZ를 벗어남, 하지만 아직 값이 할당되지 않음)
    letVariable = "이제 안전하게 사용 가능!";
    console.log(letVariable); // 출력: "이제 안전하게 사용 가능!"

    // const로 선언된 변수
    // const constVariable; // 오류: const 선언 시 초기화 필요
    const constVariable = "이제 안전하게 사용 가능!";
    console.log(constVariable); // 출력: "이제 안전하게 사용 가능!"
    ```

함수선언문은 할당 초기화 동시에 이루어짐
