> 자바스크립트로 개발을 하고 배포하는 과정에서 빌드(build) 과정을 거치게 되는데, 이 과정에서 모든 파일들이 하나로 합쳐지게 됩니다. 많은 자바스크립트 코드(.css, .html도 마찬가지)가 탄생합니다. 이 경우 인터넷 환경이 좋지 못한 곳에서는 거대한 소스 코드들을 불러오는데 상당한 로딩시간을 갖게 됩니다. 이를 개선하고자 코드에서 당장 사용하는 부분만을 로딩하고, 현재 필요하지 않은 코드 부분은 따로 분리시켜 나중에 로드함으로써 로딩시간을 개선하는 것이 코드 스플리팅입니다.

-   **코드 비동기 로딩**
    동적 import의 사용법은 import를 함수처럼 사용합니다. 함수 처럼 사용한 import 구문은 **[Promise](https://bamtory29.tistory.com/entry/Javascript-%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A4promise-%EA%B0%9D%EC%B2%B4)**를 반환합니다.
    ```jsx
    import logo from "./logo.svg";
    import "./App.css";

    function App() {
        const onClick = () => {
            import("./notify").then((result) => result.default());
        };

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p onClick={onClick}>code-splitting</p>
                </header>
            </div>
        );
    }

    export default App;
    ```
-   **React.lazy와 Suspense를 통한 컴포넌트 코드 스플리팅**
    ### `React.lazy`
    > 💡 컴포넌트를 렌더링하는 시점에 비동기적으로 로딩할 수 있게 해주는 유틸 함수이다.
    ### `Suspense`
    > 💡 리액트 내장 컴포넌트로 코드 스플리팅 된 컴포넌트를 로딩하고, 로딩이 끝나지 않았을 때 보여줄 UI를 설정할 수 있다.
    >
    > `fallback`이라는 `props`를 통해 로딩 중에 보여줄 `JSX` 문법을 지정할 수 있다.
    ### `React.lazy` + `Suspense`
    ```tsx
    import React, { Suspense } from 'react';

    const SomeComponent = React.lazy(() => import('./SomeComponent'));

    const myComponent = {
    	return (
    		<Suspense fallback={<div>Loading...</div>}>
    			<SomeComponent />
    		</Suspense>)
    }
    ```
-   **Loadable Components 라이브러리**
    마지막으로 소개할 방식은 Loadable Components 라이브러리입니다. 이 라이브러리는 코드 스플리팅을 편하게 도와주는 동시에 서버 사이드 렌더링이 가능하게 해줍니다. 리액트의 공식 문서에서도 서버 사이드 렌더링을 할 경우 이 라이브러리를 사용하도록 권고하고 있습니다.
    서버 사이드 렌더링은 추후에 다룰예정이니 지금은 간략하게만 설명하고 넘어가자면, UI를 서버에서 렌더링 하는 것을 의미합니다. 우리가 지금까지 만들었던 리액트 앱들은 클라이언트 사이드 렌더링 앱이었습니다.
    ```jsx
    import logo from "./logo.svg";
    import "./App.css";
    import React, { useState, Suspense } from "react";
    import loadable from "@loadable/component";

    const SplitMe = loadable(() => import("./SplitMe"));

    const App = () => {
        const [visible, setVisible] = useState(false);
        const onClick = () => {
            setVisible(true);
        };
        const onMouseOver = () => {
            SplitMe.preload();
        };

        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <img src={logo} className={"App-logo"} alt={"logo"} />
                    <p onClick={onClick} onMouseOver={onMouseOver}>
                        code splitting
                    </p>
                    {visible && <SplitMe />}
                </header>
            </div>
        );
    };

    export default App;
    ```
-   **코드 분할을 결정하는 요소**
    그 중 가장 많이 쓰이는 방법 중 하나는 라우트 기반 분할이다.
    -   **Route level**
        ```tsx
        import React, { Suspense, lazy } from "react";
        import {
            BrowserRouter as Router,
            Route,
            Switch,
        } from "react-router-dom";

        const Home = lazy(() => import("./routes/Home"));
        const About = lazy(() => import("./routes/About"));

        const App = () => (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Suspense>
            </Router>
        );
        ```
        > 💡 라우트마다 다른 컴포넌트로 관리를 하고 있을 경우, 각 라우트를 import 함수를 통해 분리된 빌드 파일로 관리 할 수 있다.
        >
        > 유저가 다른 페이지로 넘어갈때만 그 페이지를 비동기적으로 로딩할 수 있다.
    -   **Component level**
        > 💡 페이지 안에 있지만 보이지 않는 컴포넌트가 존재할 수 있다.
        >
        > 예를 들어 유저가 이메일 페이지에서 새로운 메일을 작성하고자 할 때, 작성하기 버튼을 눌러 모달이 뜨게 된다면 그 모달을 `import()`로 스플리팅해서 관리할 수 있다.
        **모달 대신 `alert` 함수 스플리팅하기**
        `Notify.tsx`
        ```tsx
        const Notify = () => {
            window.alert("notify!");
        };

        export default Notify;
        ```
        `App.tsx`
        ```tsx
        import React, { useState } from "react";
        import { TextField, Box, Button } from "@mui/material";

        const App = () => {
            const handleNotify = () => {
                import("./Notify").then(({ default: Notify }) => {
                    Notify();
                });
            };

            return (
                <Button variant="contained" onClick={handleNotify}>
                    추가
                </Button>
            );
        };

        export default App;
        ```
        > 💡 Button을 눌렀을 때 example.chunk.js라는 파일을 불러오게 된다.
        >
        > `import` 함수를 사용하면 웹팩이 알아서 코드를 분리해서 저장해주고, `import`가 호출할 때 불러와서 사용할 수 있게 해준다.
        **❗여기서는 함수 level을 스플리팅했다.**
        -   `*chuck` 파일 생성 차이\*\*
        **스플리팅 전**
        !https://velog.velcdn.com/cloudflare/s_sangs/f6bbd597-356b-4565-b5a4-d29d8411739d/22.PNG
        **스플리팅 후**
        !https://velog.velcdn.com/cloudflare/s_sangs/8c9997f2-6086-42b8-882c-c82907d22388/11.PNG
        1. **하나의 페이지를 스플리팅하기**

            > 💡 페이지 하나가 되게 긴 경우,
            >
            > 그 페이지에 들어갈 때 당장 보이는 부분을 나머지와 분리하고 그 뒷부분을 다른 컴포넌트로 만들어 스플리팅할 수 있다.
    -   **Webpack: Entry Point**
        `Entry Point`는 웹팩이 앱에서 번들링하려는 모듈의 진입파일이다.
        리액트 앱이 여러 엔트리 포인트를 설정한다면 각각의 엔트리 포인트 마다 코드 스플리팅이 가능하다.
        ```tsx
        // webpack.config.js
        const path = require("path");

        module.exports = {
            mode: "development",
            entry: {
                index: "./src/index.js",
                another: "./src/another-module.js",
            },
            output: {
                filename: "[name].bundle.js",
                path: path.resolve(__dirname, "dist"),
            },
        };
        ```
        > 💡 entry 프로퍼티를 작성하면 웹팩에서 자동으로 index와 another를 다른 chunk로 관리를 해서 로딩한다.
        >
        > 웹팩은 둘 간의 의존성(dependency)도 분리를 해서 관리를 하는데, 만약 같은 의존성을 여러 `entry point`에서 가지고 있다면, 중복된 로딩이 많아져서 성능 저하를 일으킬 수 있다.
        >
        > 중복 되는 `dependencies`는 다른 `chunk`로 관리해주는 것이 바람직하다.
