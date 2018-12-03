const express = require("express");
const router = express.Router();
// const knex = require("../db/client") 

router.get("/", (req, res)=>{
    const username = req.cookies.username
    res.render('homePage', {username})
});

router.get('/signin', (req, res)=>{
    res.render('signIn')
});

router.post('/signin', (req, res)=>{
    const username = req.body.username;
    res.cookie('username', username)
    res.redirect('/')
});

router.post('/signout', (req, res)=>{
    res.clearCookie("username"); //but where's the value of "username" coming from?
    res.redirect("/");
})




module.exports = router