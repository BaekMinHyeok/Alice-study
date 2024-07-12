### Error Boundary란?

에러 바운더리는 **하위 컴포넌트 트리의 어디에서든 자바스크립트 에러를 기록하며 깨진 컴포넌트 트리 대신 폴백 UI를 보여주는** React 컴포넌트로 에러 경계는 렌더링 도중 생명주기 메서드 및 그 아래에 있는 전체 트리에서 에러를 잡아낸다.

_(React 공식문서 https://ko.reactjs.org/docs/error-boundaries.html)_

과거에는 컴포넌트 내부의 자바스크립트 에러를 정상적으로 처리할 수 있는 방법이 없었는데, 에러 바운더리를 설정해주면 바운더리 내의 컴포넌트와 그 하위 컴포넌트에서 발생하는 에러를 감지해서 fallback UI를 띄어줄 수 있다.

### 예외

단, 아래와 같은 에러는 에러 바운더리에서 포착하지 못한다.

> 이벤트 핸들러비동기적 코드 (예: setTimeout 혹은 requestAnimationFrame 콜백)서버 사이드 렌더링자식에서가 아닌 에러 경계 자체에서 발생하는 에러

### 예제 코드

```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

생명주기 메서드인 `static getDerivedStateFromError()` 와 `componentDidCatch()`를 사용하면 클래스 컴포넌트 자체가 에러 바운더리가 된다. `static getDerivedStateFromError()`를 사용하여 에러가 발생했을 때 `hasError`의 값을 true로 변경하면 폴백 UI를 렌더링할 수 있고 에러 정보를 기록하려면 `componentDidCatch()`를 사용하면 된다.

## react-error-boundary

hook에는 `static getDerivedStateFromError()` 나 `componentDidCatch()` 같은 메소드가 없기 때문에 React 공식문서에는 class형 컴포넌트를 사용한 예시만 있다.

_(Catch를 사용하여 함수형 컴포넌트로 에러 바운더리를 구현한 좋은 예시가 있다. https://gist.github.com/andywer/800f3f25ce3698e8f8b5f1e79fed5c9c)_

위와 같은 방법으로 에러 바운더리 컴포넌트를 생성할 수 도 있지만 간단하게 구현이 가능한 `react-error-boundary`라는 라이브러리를 사용할 수도 있다. 에러 바운더리가 감지하지 못하는 에러는 try/catch 문 등을 사용하여 직접 핸들링해야 하는데 이를 쉽게 해주는 `useErrorHandler` 기능을 제공한다.

### 설치

```bash
$ npm install --save react-error-boundary
# or
$ yarn add react-error-boundary
```

### 예제 코드

```
function App(){
  ...
  return (
    <ErrorBoundary
          FallbackComponent={OurFallbackComponent}
        >
          <ComponentThatMightThrowAnError/>
    </ErrorBoundary>
  );
}

const OurFallbackComponent = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
```

가장 기본적인 사용법은 fallback UI로 사용할 컴포넌트를 생성하고 `ErrorBoundary` 컴포넌트로 에러 바운더리를 설정한 컴포넌트를 감싸준 후 `FallbackComponent` 속성에 생성한 fallback 컴포넌트를 전달하면 된다.

fallback 컴포넌트는 prop으로 `error`, `resetErrorBoundary`를 받게 되는데, 에러가 발생했을 때 `error`에는 에러 정보가 담겨있고 `resetErrorBoundary`는 실행 시 에러를 초기화 시킨다.

```
import { useErrorHandler } from 'react-error-boundary'

function Greeting() {
  const [greeting, setGreeting] = React.useState(null)
  const handleError = useErrorHandler()

  function handleSubmit(event) {
    event.preventDefault()
    const name = event.target.elements.name.value
    fetchGreeting(name).then(
      newGreeting => setGreeting(newGreeting),
      handleError,
    )
  }
  // 또는
  async function handleSubmit (event) {
    event.preventDefault()
    const name = event.target.elements.name.value
    try {
      const newGreeting = await fetchGreeting(name)
      setGreeting(newGreeting)
    } catch (error) {
      handleError(error)
    }
  }

  return greeting ? (
    <div>{greeting}</div>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input id="name" />
      <button type="submit">get a greeting</button>
    </form>
  )
}
```

에러 바운더리는 비동기 코드에 대한 에러를 인지하지 못하기 때문에 흔하게 에러가 발생하는 AJAX 요청도 `useErrorHandler`를 사용하여 핸들링 해주어야 한다.
