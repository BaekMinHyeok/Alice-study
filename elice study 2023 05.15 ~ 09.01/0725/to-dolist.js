//1. useState를 react에서 import하세요.

import React, { useState } from 'react';
import Todo from './todo';
import TodoForm from './TodoForm';

function App() {
  //2. useState가 반환하는 첫 번째 인자인 state와 두 번째 인자인 setState를 todos, setTodos로 변경하세요.
  const [todos, setTodos] = useState([
    //3. useState의 배열에 초기화면에 display할 원소를 작성하세요.이렇게하면 useState 는 배열로 초기화하는데, 개별 원소는 text(사용자가 입력한 todo)와 hasCompleted(완료여부)로 구성됩니다.
    {
      text: 'Upload the video by tonight',
      hasCompleted: false,
    },
    {
      text: 'Read Book from page 51~220',
      hasCompleted: false,
    },
    {
      text: 'Finish Season3 of La Case De Papel',
      hasCompleted: false,
    },
  ]);

  //4. addTodo()와 completeTodo() 함수를 작성하세요.이때 사용자가 입력한 text 데이터를 array(newTodos)로 받아 text로 전달하세요.
//   const addTodo = text => {
//     const newTodoItem = {
//       text: text,
//       hasCompleted: false,
//     };
//     setTodos(todos => [...todos.newTodoItem]);
//   };
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

//   const completeTodo = index => {
//       setTodos(todos=> {
//           let curr = [...todos]
//           curr[index].hasCompleted = true;
//           return curr
//       })
//   };
//   const completeTodo = index => {
//       const newTodos = [...todos];
//       newTodos[index].hasCompleted = true;
//       setTodos(newTodos);
//   };

   const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].hasCompleted = !newTodos[index].hasCompleted;
    setTodos(newTodos);
  };


  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>TO DO LIST</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => {
          return (
            <Todo
                key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;



// 07/25

// e.current.target 
// e.target

// form태그를 추가하여 enter키 활성화
// 이벤트 핸들러가 등록된 요소와 이벤트가 발생한 요소

// 숫자로 변환하는 방법
// 1. Number()
// 2. parseInt()
// 3. 바꾸고싶은 값 * 1

// useCallback 은 컴포넌트가 재렌더링 될 때 불필요하게 함수가 다시 생성되는 것을 방지하기 위해서


// 전역객체를 많이 사용하면 메모리가 쌓여서 지양하는편이 좋음
// 생명주기가 길다 (메모리에 있는 시간이 길다)


// 생성자 함수에서 파스칼케이스를 주로 사용한다.
// 인스턴스를 반환한다.


// 옵셔널 체이닝
// 셔널 체이닝(optional chaining) ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있습니다.
