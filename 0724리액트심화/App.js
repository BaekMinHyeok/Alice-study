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