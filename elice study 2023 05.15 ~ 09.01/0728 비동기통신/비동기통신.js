import React, { useState } from "react";
import axios from "axios";

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

  const menuName = cafe.map((menu) => <li key={menu.id}> {menu.item} </li>);

  // 지시사항을 참고하여 카페 메뉴를 등록하는 기능을 완성하세요.
  async function postCafe() {
    const newMenu = { id: id, item: item };

    try {
      await axios.post(
        `https://${window.location.hostname}:8190/data`,
        newMenu
      );
      setFail();
    } catch (e) {
      setFail("메뉴 등록에 실패했습니다.");
    }
  }

  const updateId = (event) => {
    setId(event.target.value);
  };
  const updateItem = (event) => {
    setItem(event.target.value);
  };

  return (
    <>
      <h4>카페 메뉴</h4>
      <div> {menuName} </div>
      <button id="load" onClick={fetchCafe}>
        불러오기
      </button>{" "}
      <br />
      <br />
      <p style={{marginLeft: "50px"}}>
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
      <div id="fail"> {fail} </div>
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