import React, { useState, useEffect } from 'react';
import './math-problem.css';

// GameStatus를 이용해 상태를 처리합니다.
const GameStatus = {
  CORRECT: 'correct',
  INCORRECT: 'incorrect',
  READY: 'ready',
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

function MathProblem() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  // 필요한 숫자의 상태를 정의하세요.
  const [gameStatus, setGameStatus] = useState(GameStatus.READY);
  const [answer, setAnswer] = useState('');

  const generateProblem = () => {
    setGameStatus(GameStatus.READY);
    // generateRandomNumber를 이용해 새로 숫자를 생성하세요.
    setN1(generateRandomNumber());
    setN2(generateRandomNumber());
  };

  const handleSubmit = () => {
    // 제출시 정답 여부에 따라 GameStatus의 상태를 설정하세요.
    const originalAnswer = n1 + n2;

    setGameStatus(
      originalAnswer === Number(answer)
        ? GameStatus.CORRECT
        : GameStatus.INCORRECT
    );
  };

  const handleAnswerInput = e => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    generateProblem();
  }, []);

  // 실행 결과와 동일한 기능을 하도록 마크업을 작성하세요.
  return (
    <div>
      <div className="problem">
        <span>{n1}</span>
        <span>+</span>
        <span>{n2}</span>
      </div>

      <hr />
      <div>{gameStatus}</div>
      <div>
        <div> = </div>
        <input
          id="answer"
          type="number"
          name="answer"
          value={answer}
          onChange={handleAnswerInput}
        />
        <button onClick={handleSubmit}>제출</button>
      </div>

      <div>
        {gameStatus === GameStatus.CORRECT
          ? '정답입니다'
          : gameStatus === GameStatus.INCORRECT
          ? '오답입니다'
          : ''}
      </div>

      {gameStatus === GameStatus.CORRECT && (
        <div>
          <button onClick={generateProblem}>문제생성</button>
        </div>
      )}
    </div>
  );
}

export default MathProblem;

//styled-compinents 예시
const Container = styled.div`
  width: 400px;
  height: 400px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid rgba(0, 0, 0, 0.3);
`;
const Button = styled.button`
  background: orangered;
  color: white;
  padding: 12px 40px;
border: none; `;

const Button1 = styled.button`
background: ${({ clicked }) => (clicked ? "orangered" : "lavender")}; color: ${({ clicked }) => (clicked ? "lavender" : "orangered")}; padding: 12px 40px;
border: none;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li` padding: 20px 100px; background: orangered; color: white;
&+& { margin-top: 8px;
} `;





//JSX를 사용하면 코드의 재사용성을 높여, 개발자의 생산성이 높아진다.
//Hook이 없을 때는 함수형 컴포넌트를 이용해 State와 생명주기를 관리해야한다
function App() {
  return <div>
      <p>엘리스 식당에 오신 것을 환영합니다.</p>
  </div>
}

const Menu = () => {
  return <div>
      <ul>
      <h3>엘리스 식당 메뉴판</h3>
          <li>짜장면</li>
          <li>짬뽕</li>
          <li>볶음밥</li>
      </ul>
  </div>
}

const Order = (props) => {
  return <p>사장님, {props.menu} {props.count}개 주세요!</p>
}

//결제를 위한 Pay 컴포넌트를 완성하세요.
function Pay() {
  const handleClick = () => {
    alert("결제가 완료되었습니다.");
  }
  return <button onClick={handleClick}> 결제하기 </button>;
}

//4
function App() {
  const [person, setPerson] = useState({
    name: "",
    age: 20,
    school: ""
  })
  const handleChange = (event) => {
    const {name, value} = event.target;
    setPerson((current) => {
      const newPerson = {...current};
      newPerson[name] = value;
      return newPerson;
    })
  }
  return (
    <div className="App">
      <input name="name" value={person.name} onChange={handleChange} />     
      <input name="age" value={person.age} onChange={handleChange} />
      <input name="school" value={person.school} onChange={handleChange} />
      <p>
        {person.name}님은 {person.school}에 재학 중이며 현재 {person.age}세입니다.
      </p>
    </div>
  );
}
