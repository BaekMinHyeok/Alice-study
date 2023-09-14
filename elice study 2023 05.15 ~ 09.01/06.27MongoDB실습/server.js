// mongodb+srv://minhyeokbaek100:<password>@cluster0.f1kxjl1.mongodb.net/?retryWrites=true&w=majority

require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Users = require('./model/Users')

const { PORT, MOGO_USER, MONGO_PASS } = process.env;

const uri = `mongodb+srv://${MOGO_USER}:${MONGO_PASS}@cluster0.3maq84k.mongodb.net/?retryWrites=true&w=majority`

mongoose
.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('DB 연결 성공');
})
.catch((err) => {
    console.log('DB 연결 실패: ', err);
});

// 기본 세팅 (1)
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 라우터 설정 (2)
// /user/make-user
const userRouter = require('./router/userRouter');
app.use('/user', userRouter);

// ejs 세팅 (3)
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// index 세팅
app.get('/', (req, res) => {
    Users.find({}).then((users) => {
        res.render('index', { users });
	});
});

app.listen(PORT, () => {
	console.log(`${PORT}번 포트에서 서버가 가동되었습니다.`);
});
