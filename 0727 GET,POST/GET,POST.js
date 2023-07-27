import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URL = `https://reqres.in/api/users/2`;

function Users() {
  let [result, setResult] = useState('');

  useEffect(() => {
    login();
  }, []);

  async function login() {
    try {
      const response = await axios.get(URL);
      setResult(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  // axios.get을 호출하고 result에 반환되는 데이터를 저장하세요.

  return (
    <div>
      <h4>React Axios로 HTTP GET 요청하기</h4>
      <div>
        Name: {result.first_name + ' ' + result.last_name} <br />
        Email: {result.email}
      </div>
    </div>
  );
}
useEffect(() => {
  login();
}, []);

async function login() {
  try {
    const response = await axios.post(URL, DATA);
    setResult(response.data.token);
  } catch (error) {
    console.log(error);
  }
}


return (
  <div>
    <h4>React Axios로 HTTP POST 요청하기</h4>
    <div>Token: {result}</div>
  </div>
);
export default Users;
