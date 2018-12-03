const express = require("express");
const router = express.Router();
const knex = require("../db/client")

router.get('/new', (req, res)=>{
    const username = req.cookies.username
    res.render('new', {username})
});

router.post('/', (req, res)=>{  //coming from new.ejs
    const username = req.body.username
    const image_url = req.body.image_url
    const content = req.body.content
    const newCluck = {
        username: username,
        image_url: image_url,
        content: content
    };

    knex
        .insert(newCluck)
        .into('cluckrs')
        .returning("*")
        .then((clucks)=>{
            console.log(clucks);
            const [cluck] = clucks;
            // res.redirect('/clucks', { cluck })
            res.redirect('/clucks/index')
        })

});

router.get('/index', (req, res)=>{
    knex   
        .select("*")
        .from("cluckrs")
        .orderBy('id', 'desc')
        .then((clucks)=>{
            res.render('index', { clucks })
        })
})

router.get('/', (req, res)=>{
    res.redirect('/clucks/index')
})



module.exports = router