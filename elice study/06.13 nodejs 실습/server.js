// require를 사용해서 express 모듈을 가져온다.
const express = require('express');

//.env에 있는 코들를 가져온다.
require('dotenv').config();

// express를 호출하고 새로운 객체 app을 생성핟나.
// 이 app은 웹 어플리케이션의 핵심이 된다. 
const app = express();

// .get의 인자로 request와 response를 항상 적어줘야한다.
app.get('', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT, () =>{
    console.log(`서버가 ${process.env.PORT}번에서 돌아가고 있습니다.`)
})

