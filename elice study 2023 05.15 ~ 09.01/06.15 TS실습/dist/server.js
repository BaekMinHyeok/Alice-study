"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// // 필요한 라이브러리 불러오기
// const express = require('express');
// const dotenv = require('dotenv');
// // 환경변수 쓸 수 있도록 설정
// dotenv.config();
// // app 선언
// const app = express();
// const port = process.env.PORT;
// // '/' get 엔드포인트 설정
// app.get('/', (req, res) => {
//     res.send('Express + TypeScript Server');
//   });
// // 서버 실행 코드
// app.listen(port, () => {
//     console.log(`[server]: Server is running at http://localhost:${port}`);
//   });
