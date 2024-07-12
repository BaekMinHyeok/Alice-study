-   사용해봤던 전역상태관리 도구가 있었나요?
    있었다면 (어떤 걸 사용했는지, 왜 썼는지, 장단점을) 설명해주세요.
        **전역 상태라고 하면 상위 컴포넌트의 자식 컴포넌트들에게 모두 공유될 수 있는 상태를 의미합니다.**

        - ****React-Redux — Context API 기반****
            1. **Centralized Store:** Redux는 애플리케이션의 전역 상태를 하나의 중앙 저장소(Store)에 저장합니다.
            2. **Immutable State:** 상태는 불변(Immutable)하며, 상태를 변경하기 위해서는 액션(Action)을 발생시켜야 합니다.
            3. **Predictable State Changes:** 액션과 리듀서(Reducer)를 통해 상태 변경이 예측 가능하고, 디버깅이 쉽습니다.
            4. **Middleware:** 액션을 디스패치하기 전에 미들웨어를 통해 추가적인 로직을 수행할 수 있습니다.

            Redux는 Flux 패턴을 구현한 라이브러리로 유명합니다. 상태 관리에 있어 상태 변화 추적의 어려움을 양방향 바인딩으로 판단했던 React가 단방향 바인딩의 Flux 패턴을 제시하였고 이를 구현한 것입니다.

            ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/976b641b-2e6b-431e-9b42-97c07d7d244f/1ae78b40-e0ed-4f3c-bf6f-fcabcf0bda55/Untitled.png)

            - Action : View 단에서 발생한 일을 Action type으로 정의.
            - Dispatch : Action을 Store에 전달하여 Reducer 함수를 실행하게 하는 것.
            - Reducer : 새로운 상태를 반환하는 함수.
            - Store : 단일 객체에 상태가 저장 되는 곳.
            - Middleware : Action이 Dispatch 되고 Reducer 함수가 실행 되기 전에 특정 작업을 진행할 수 있도록 도와주는 함수.
        - ****Recoil — Context API 기반****

            **Atom 기반의 상태 관리**

            - **Atom과 Selector:** Recoil은 상태를 Atom(원자)이라는 단위로 정의하고, 이를 통해 상태를 읽고 쓸 수 있습니다. Selector는 파생된 상태를 정의하는 데 사용됩니다.
            - **Reactivity:** Recoil은 React의 특정 컴포넌트가 상태에 의존할 때 자동으로 해당 컴포넌트를 리렌더링합니다.
            - **No Central Store:** Recoil은 중앙 저장소가 없이 컴포넌트 간에 직접 상태를 공유합니다.
            - **Mutable State:** Recoil은 상태를 직접 변경할 수 있습니다. 이는 일부 개발자에게 더 직관적일 수 있지만, 예측 가능성이 감소할 수 있습니다
        - **Redux는 중앙 집중화와 불변성에 중점**을 둬 예측 가능하고 엄격한 상태 관리를 제공합니다.
        - **Recoil은 컴포넌트 간 직접적인 상태 공유와 렌더링 최적화에 중점**을 둬 간단한 구조와 자동 리렌더링을 제공합니다.
