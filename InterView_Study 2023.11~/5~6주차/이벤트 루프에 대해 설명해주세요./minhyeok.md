이벤트 루프에 대해 설명해주세요. (선택사항 : 그림을 그리면서 설명해 주셔도 됩니다🖍️)

-   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/976b641b-2e6b-431e-9b42-97c07d7d244f/6d466fca-835e-4159-91e8-cfd490c36844/Untitled.png)
    -   Heap : 메모리 할당이 발생하는 곳, 객체나 동적인 변수
    -   Call Stack : 실행된 코드의 환경을 저장하는 자료구조로, 함수 호출 시 이곳에 저장된다. 어떤 함수를 저장하면 스택에 쌓고 또 다른 함수를 호출하면 그 다음 스택에 쌓이면서 가장 위에 쌓인 함수를 가장 먼저 처리한다. LIFO(Last In First Out)
    -   Web APIs : Web API는 브라우저에서 제공하는 API로 DOM, Ajax, TimeOut 등이 있다.
        CallStack에서 실행된 비동기 함수는 Web API를 호출하고, Web API는 콜백 함수를 Task Queue에 넣는다.
    -   Callback Queue : 함수를 저장하는 자료구조로, Call Stack과 다르게 가장 먼저 들어온 함수를 가장 먼저 처리한다.
    -   Event Loop : 이벤트 루프는 call stack이 다 비워지면 callback queue에 존재하는 함수를 하나씩 call stack으로 옮기는 역할을 한다.
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/976b641b-2e6b-431e-9b42-97c07d7d244f/15200f11-9560-4d1d-a4f2-35117c082825/Untitled.png)
    Callback Queue 3가지 종류
    **1. MacroTask Queue**
    setTimeout, setInterval과 같은 코드입니다.
    **2. Microtask Queue**
    Promise callback, async callback과 같은 코드입니다.
    **3. Animation Frames**
    requestAnimationFrame과 같은 코드입니다.
    "Microtask Queue > Animation Frame > MacroTask Queue" 순으로  Microtask Queue가 가장 먼저 실행되고 MacroTask Queue가 가장 늦게 실행됩니다.
    ### Even Loop
    Call Stack과 Call Queue들을 감시하며 어떤게 비어져있고 어떤것을 채워야할지 정하며 수행합니다.
