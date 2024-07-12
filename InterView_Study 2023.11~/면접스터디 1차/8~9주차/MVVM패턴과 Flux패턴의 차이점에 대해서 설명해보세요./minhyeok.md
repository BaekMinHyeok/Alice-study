-   MVVM패턴과 Flux패턴의 차이점에 대해서 설명해보세요.
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/976b641b-2e6b-431e-9b42-97c07d7d244f/501236a8-bcf0-4d9b-994a-3c890476228b/Untitled.png)
    -   Flux
        Flux는 사용자 입력을 기반으로 Action을 만들고 Action을 Dispatcher에 전달하여 Store(Model)의 데이터를 변경한 뒤 View에 반영하는 단방향의 흐름으로 애플리케이션을 만드는 아키텍처입니다
        Flux의 가장 큰 장점은 단방향 데이터 흐름입니다.
        데이터 흐름은 항상 Dispatcher에서 Store로 Store에서 View로 View에서 다시 Action을 통해 Dispatcher 이렇게 흘러가게 됩니다.
        이렇게 흘러가게 되면 나중에 디버깅을 할 때에도 어디서 오류가 났는지 어느지점에서 멈췄는지 바로바로 찾아서 해결할 수 있으며, 구조의 흐름도 쉽게 파악 할 수 있습니다.
        -   Dispatcher
            Flux의 모든 데이터 흐름을 관리하는 허브 역할을 담당합니다.
            Action이 발생되면 Dispatcher는 전달된 Action을 확인하고 등록된 콜백함수를 실행하여 Store로 전달하게 됩니다. (Dispatcher는 전체 어플리케이션에서 한 개의 인스턴스만 사용됩니다.)
        -   Store
            어플리케이션의 모든 상태변경은 Store에서 결정이 됩니다. Dispatcher로부터 수신받기 위해서는 Dispatcher에 콜백 함수를 등록해야 합니다. Store가 변경되면 View에 변경되었다는 사실을 알려주게 됩니다.
        -   View
            View는 화면에 나타내는 것 뿐만 아니라, 자식 View로 데이터를 흘러 보내는 View 컨트롤러의 역할도 합니다.
        -   Action
            Dispatcher에서 콜백 함수가 실행 되면 Store가 업데이트 되게 되는데, 이 콜백 함수를 실행 할 때 데이터가 담겨 있는 객체가 인수로 전달 되어야 합니다. 이 전달 되는 객체를 Action이라고 하는데, Action은 대채로 액션 생성자(Action creator)에서 만들어집니다.
    -   MVVM
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/976b641b-2e6b-431e-9b42-97c07d7d244f/141e9277-5426-47e0-9a93-35ba4a8a2504/Untitled.png)
        Model, View, ViewModel로 구성되어 있으며 Model과 View는 다른 패턴과 동일합니다.
        웹 기술이 점점 진화하면서 우리가 사용하고 있는 하나의 서비스는 엄청나게 크고 복잡한 형태로 되어있습니다. 그렇기 때문에 MVC패턴에는 한계가 있을 수 밖에 없습니다.
        즉 모든 데이터를 서버에서 처리하는 것은 매우 많은 서버 비용과 부담이 컸기 때문입니다.
        그래서 이를 보완하기 위해 웹 화면상에 데이터를 처리하고 이를 바로 실시간으로 동적으로 화면의 뷰를 변화시킬 수 있도록 하기 위해 탄생한게 바로 MVVM패턴이라고 할 수 있습니다.
        -   Model : 도메인 특화 데이터를 처리
        -   View : 유저 인터페이스(UI), HTML/CSS/XML 등으로 작성
        -   ViewModel : 상태와 연산 View의 실제 논리 및 데이터 흐름을 담당, 상태 데이터를 변경하면 즉시 View에 반영된다. (데이터 요소를 바꿀거야! 그리는건 신경 쓰지 않는다.)
        **장점**
        1. MVVM 패턴은 View와 Model 사이의 의존성이 없습니다.(MVP와 같음)
        2. Command패턴과 Data Binding을 사용하여 View와 ViewModel 사이의 의존성 또한 없앤 디자인 패턴
        **단점**
        1. ViewModel의 설계가 쉽지 않다!
