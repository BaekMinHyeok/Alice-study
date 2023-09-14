require("dotenv").config; //.env 사용가능
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Users = require("../model/Users")


const {PORT, MONGO_URI} = process.env;

// DB 연결 (4)
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB 연결 성공"))
  .catch((err) => console.log("DB 연결  실패",err));

//기본 세팅(1)
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false})); //json으로 바꾸는 세팅

//라우터 설정(2)
// /user/make-user
const userRouter = require("./router/userRouter");
app.use("/user", userRouter);

//ejs 설정(3)
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// index 세팅
app.get("/", (req, res) => {
    Users.find({}, (err, users) => {
      if (err) {
        console.log(err);
      } else {
        res.render("index", { users: users });
      }
    });
  });

app.listen(PORT, () => {
    console.log(`${PORT}번 포트에서 서버가 가동되었습니다.`);
})