//0803
import React, { useState, useCallback, useEffect, useRef, } from "react";
import { resQuestion } from "@/interfaces";
import axios from "axios";
import axiosRequest from "@/api";
//api
const [data, setData] = useState<any>(null)

useEffect(() => {
  async function fetchData() {
    try{
      const response:resQuestion = await axiosRequest.requestAxios(
        "get",
        "http://localhost:3000/api/v1/stats", 
        {});
      setData(response.data); //데이터를 상태에 저장
    } catch (error) {
      console.log(error)
    }
  }

  fetchData();
 }, [])



 interface AxiosRequest {
  requestAxios: <T>(method: string, url: string, data?: {}) => Promise<T>;  
}
//제네릭은 타입을 미리 특정한걸로 정의하는게 아니고 나중에 정의된다는 느낌으로 생각

function test<T>(a: T): T {
  return a;
}
// 이 함수에서 test의 반환값은 무조건 a랑 같은 타입
// 함수를 호출할 때 결정