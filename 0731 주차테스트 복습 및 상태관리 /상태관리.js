//0731
// spa는 Server-side routing 기술을 활용하여 페이지 진입 시 리로드 없이 라우팅한다.
//Promise가 중첩되어 있고 에러가 발생하는 경우 .catch 뒤에 있는 핸들러들은 동작하지 않고 종료된다.

import React from 'react';

const Number = ({ data }) => {
  return (
    <div>
      {data.map(value => {
        return <p>{value}</p>;
      })}
    </div>
  );
};

// export default Number;


import React from "react";
import "./App.css";
// 필요한 파일 및 패키지를 import하세요.
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";


function App() {
  // 지시사항을 참고하여 코드를 작성하세요.
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// export default App;


import React, { useState } from "react";
import axios from "axios";

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  // 과자 목록을 불러오는 함수를 완성하세요.
  async function fetchData() {
      const response = await axios.get(
          `https://${window.location.hostname}:8190/data`
      );
      setSnacks(response.data)
  }
  
  // 가져온 과자 데이터를 매핑하여, 이름만 가져옵니다.
  const snackName = snacks.map((snack) => (
    <li key={snack.id}> {snack.name} </li>
  ));
  
  // 가져온 과자 목록을 반환합니다.
  return (
    <>
      <h4>과자 목록</h4>
      <div> {snackName} </div>
      <br />
      <button id="load" onClick={fetchData}> 불러오기 </button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Snacks />
    </div>
  );
}

// export default App;

import React, { useState } from "react";
import axios from "axios";

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  // 과자 목록을 불러오는 함수를 완성하세요.
  async function fetchData() {
    const response = await axios.get(
        `https://${window.location.hostname}:8190/data`
    )
    setSnacks(response.data)
  }
  
  // 가져온 과자 데이터를 매핑하여, 이름만 가져옵니다.
  const snackName = snacks.map((snack) => (
    <li key={snack.id}> {snack.name} </li>
  ));
  
  // 가져온 과자 목록을 반환합니다.
  return (
    <>
      <h4>과자 목록</h4>
      <div> {snackName} </div>
      <br />
      <button id="load" onClick={fetchData}> 불러오기 </button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Snacks />
    </div>
  );
}

// export default App;

/* container 클래스를 Flexobx로 만들고, 안에 있는 아이템을 일정한 간격으로 띄우세요. */
// .container {
//   display: flex;
//   border: solid 2px black;
//   justify-content: space-between;
// }
// .container > div {
//   background-color: yellow;
//   width: fit-content;
//   margin: 4px 8px;
//   padding: 4px 8px;
//   border: solid 2px black;
//   text-align: center;
// }
// /* 미디어쿼리를 이용해 768px 이하일 때 Flexbox를 다시 배치하세요. */
// @media (max-width: 768px) {
//   .container {
//       flex-direction: column;
//   }
//   #box1 {
//       align-self: flex-start;
//   }
//   #box2 {
//       align-self: center;
//   }
//   #box3 {
//       align-self: flex-end;
//   }
// }


import React, { useState } from 'react';
import axios from 'axios';

function Cafes() {
  const [cafe, setCafe] = useState([]);
  const [id, setId] = useState();
  const [item, setItem] = useState();
  const [fail, setFail] = useState();

  // 카페 메뉴를 불러오는 함수입니다.
  async function fetchCafe() {
    const response = await axios.get(
      `https://${window.location.hostname}:8190/data`
    );
    setCafe(response.data);
  }

  const menuName = cafe.map(menu => <li key={menu.id}> {menu.item} </li>);

  // 지시사항을 참고하여 카페 메뉴를 등록하는 기능을 완성하세요.
  async function postCafe() {
      const newMenu = {id:id, item: item};
      try {
          await axios.post(
              `https://${window.location.hostname}:8190/data`,
              newMenu
          );
          setFail();
      } catch (e) {
          setFail("메뉴 등록에 실패했습니다.")
      }
  }

  const updateId = (event) => {
      setId(event.target.value);
  }
  const updateItem = (event) => {
      setItem(event.target.value);
  }

  return (
    <>
      <h4>카페 메뉴</h4>
      <div> {menuName} </div>
      <button id="load" onClick={fetchCafe}>
        불러오기
      </button>{' '}
      <br />
      <br />
      <p style={{ marginLeft: '50px' }}>
        ID: &nbsp;
        <input id="save_id" value={id} onChange={updateId} />
      </p>
      <p>
        카페 메뉴: &nbsp;
        <input id="save_item" value={item} onChange={updateItem} />
      </p>
      <button id="save" onClick={postCafe}>
        등록하기
      </button>
      <div id="fail">{fail}</div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Cafes />
    </div>
  );
}

export default App;
