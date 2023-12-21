리액트 훅에 대해 설명해 주세요.

-   React16.8부터
    클래스형 컴포넌트에서 이용하던 코드를 함수형 컴포넌트에서 다양한 기능을 사용할 수 있게 만들어준 라이브러리입니다. 함수형 컴포넌트나 custom hook에 사용이 가능하고 반복문 조건문 혹은 중첩된 함수 내에서 호출하면 안된다.
    -   **useState**
        -   함수형 컴포넌트 안에 state를 추가하여 사용한다.
        -   현재 상태를 나타내는 state값과 이 상태를 변경하는 setState값을 한 쌍으로 제공한다.
        -   state는 초기값을 설정할 수 있으며, 초기값은 첫 렌더링 때 한번 사용된다.
        -   state는 객체일 필요 없이 문자열, 숫자, boolean, 배열, null, 객체 등의 여러가지 다양한 값을 넣을 수 있다.
        ```jsx
        import React, { useState } from "react";

        function Example() {
            const [count, setCount] = useState(0);

            return (
                <div>
                    <p>You clicked {count} times</p>
                    {/* 버튼을 클릭할 때마다 기존의 state 기본값인 0에 1이 더해진다. */}
                    <button onClick={() => setCount(count + 1)}></button>
                </div>
            );
        }
        ```
    -   **useEffect**
        useEffect는 기존 클래스형 컴포넌트에서 사용했던 componentDidMount, componentDidUpdate, componentWillUnmount를 하나의 API로 통합한 것으로 다음과 같은 특징을 가진다.
        -   useEffect는 기본적으로 useEffect(function, deps)의 형태를 사용한다.
        -   function에는 실행시킬 함수를 넣고 deps에는 의존성 배열을 담는다.
        -   의존성 배열에 어떤 것이 담기느냐에 따라 부수적인 효과 함수가 실행된다.

        -   가장 먼저 의존성 배열 없이 useEffect를 실행시키게 되면 페이지가 렌더링 될 때마다 데이터를 불러온다.
        ```
        import React from "react";

        React.useEffect(() => {
            dispatch(getActions.getFundingAC(page));
        });
        ```
        -   두번째로 의존성 배열에 빈배열을 담아주게 될 경우에는 첫 렌더링 시에만 함수를 실행한다.
        ```tsx
        import React from "react";

        React.useEffect(() => {
            dispatch(getActions.getFundingAC(page));
        }, []);
        ```
        -   마지막으로 의존성 배열에 state값이나 props로 상속받은 데이터값 등을 담아주게 되면 해당값이 변할 때마다 함수를 실행한다.
        ```tsx
        import React from "react";

        const [page, setPage] = React.useState(1);

        React.useEffect(() => {
            dispatch(getActions.getFundingAC(page));
        }, [page]);
        ```
        -   이 외에도 useEffect에서는 언마운트시에 cleanup함수를 적용시킬 수 있다.
        ```tsx
        import React, { useEffect } from "react";

        useEffect(() => {
            dispatch(getActions.getFundingDetailAC(fundId));
            return () => {
                dispatch(getActions.clean());
            };
        }, []);
        ```
    -   **useRef**
        useRef는 특정 DOM에 접근하여 DOM 조작을 가능하게 하는 훅이다. 리액트 프로젝트에서도 특정 요소를 선택해야하는 상황이 생길 수 있는데 이러한 상황에서 useRef 함수를 사용할 수 있게 된다.
        불필요한 재렌더링을 하지 않는다는 장점이 있다.
        useRef가 유용한 상황은 이런 상황이 있다.
        예를 들어 내 컴포넌트가 몇번 렌더링됐는지 알고싶은 상황이라고 해보자.
        useState 사용시 useEffect 안에있는 setRenderingCount()가 계속해서 컴포넌트를 리렌더링해서 무한 루프에 빠지게 된다.
        이를 useRef를 통해 효율적으로 관리할 수 있다
        ```jsx
        function App() {
            const [count, setCount] = useState(1);
            const renderingCount = useRef(1);

            useEffect(() => {
                console.log("renderingCount : ", renderingCount.current);
                ++renderingCount.current;
            });

            return (
                <div>
                    <div>Count : {count}</div>
                    <button onClick={() => setCount(count + 1)}>
                        {" "}
                        count up{" "}
                    </button>
                </div>
            );
        }
        ```
    -   **useMemo, useCallback**
