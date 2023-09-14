//  /make-user, /delete-all

const { Router } = require('express');
const Users = require('../model/Users');

const router = Router();

router.post('/make-user', async (req, res) =>{
    const { username, password} = req.body;
    try{
        const user = await Users.create({username, password});
        res.status(200).json({ user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
})

router.delete('/delete-all', async(req, res) =>{
    try{
        await Users.deletMany({});
        res.status(200).json({message:'모든 유저가 삭제되었습니다.'});
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
})
// 
module.exports = router;