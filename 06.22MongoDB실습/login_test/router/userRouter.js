const {Router} = require('express') //express모듈에서 Router를 가져온다
const User = require("../model.Users")

const router = Router()
// make-user POST
router.post('/make-user', async (req, res) => {
    const user = new users({
        name: req.body.name,
        password: req.body.password,
    })

    await user.save((err) =>{
        if(err){
            console.log("에러 발생: ", err);
            res.sendStatus(500);
        } else {
            console.log("성공");
            res.sendStatus(200);
        }
    });
})

// delete-all

module.exports = router;