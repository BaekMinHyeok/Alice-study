import React, {useState, useEffect,useMemo} from 'react';
import Greeting from './components/Greeting';

function App() {
    const [isCreated,setIsCreated] = useState(false)
  return (
    <div className="App">
        <button onClick={() =>{
            setIsCreated((current)=>{
               return !current
            })
        }}>컴포넌트 생성/제거</button>
        {isCreated && <Greeting />} 
        {/* isCreated가 true이면 <Greeting/>으로 넘어가고 false이면 멈춘다 */}
    </div>
  );
}


// useMemo  지정한 State나 Props가 변경될 경우 해당 값을 활용해 
//계산된 값을 메모이제이션하여 재렌더링 시 불필요한 연산을 줄입니다.

function App() {
    const [foo, setFoo] = useState(0);
    const [bar, setBar] = useState(0);
    const multi = useMemo(()=>{
        return foo * bar;
    }, [foo,bar])
    
  return (
    <div className="App">
        <input value={foo} onChange={(event)=>{
            setFoo(parseInt(event.target.value));
        }}/>
        <input value={bar} onChange={(event)=>{
            setBar(parseInt(event.target.value));
        }}/>
        <div>{multi}</div>
    </div>
  );
}

//useCallback  함수를 메모이제이션하기 위해 사용하는 Hook입니다. 
//컴포넌트가 재렌더링될 때 불필요하게 함수가 다시 생성되는 것을 방지합니다.
//useMemo(() => fn, deps) 와 useCallback(fn, deps) 는 같습니다.

function App() {
  const [foo, setFoo] = useState(0);
  const [bar, setBar] = useState(0);
  const calc = useCallback(() =>{
      return foo + bar
  }, [foo, bar])
return (
  <div className="App">
      <input value={foo} onChange={(event) =>{
          setFoo(parseInt(event.target.value));
      }}/>
      <input value={bar} onChange={(event) =>{
          setBar(parseInt(event.target.value));
      }}/>
      <div>{calc()}</div>
  </div>
);
}

//Custom Hooks

const useToggle = (initialValue) =>{
    const [isOn, setIsOn] = useState(initialValue)
    const toggle = () => {
        setIsOn((current) => {
            return !current;
        });
    }
    return { isOn, toggle};
}

function App() {
  const{ isOn, toggle} = useToggle(false);
return (
  <div className="App">
      <button onClick ={()=>{
          toggle();
      }}>
          {isOn ? "켜짐" : "꺼짐"}
      </button>
  </div>
);
}

//React의 컴포넌트는 Mounting, Updating, Unmounting을 가지며 각 과정은 컴포넌트가 생성되고, 수정되고, 해제될 때를 의미합니다.
class App extends React.Component {
  // componentDidMount() 메소드를 완성하세요.
componentDidMount() {
    alert(`${this.state.count}번 클릭했습니다.`)
}
  // componentDidUpdate() 메소드를 완성하세요.
componentDidUpdate() {
    alert(`${this.state.count}번 클릭했습니다.`)
}
}

function HideAndSeek() {
  // 지시사항에 따라 코드를 작성하세요.
    useEffect(() => {
        alert("토끼를 찾았습니다!");

        return function cleanup() {
            alert("토끼가 숨었습니다.")
        }
    })
  return "토끼 등장";
}


export default App;
