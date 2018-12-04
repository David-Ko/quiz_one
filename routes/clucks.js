const express = require("express");
const router = express.Router();
const knex = require("../db/client")

router.get('/new', (req, res)=>{
    res.render('new')
});

router.post('/', (req, res)=>{  //coming from new.ejs
    const username = res.locals.username
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
            res.redirect('/clucks/index')
        })

});

router.get('/index', (req, res)=>{
    knex   
        .select("*")
        .from("cluckrs")
        .orderBy('createdAt', 'desc')
        .then((clucks)=>{
            res.render('index', { clucks })
        })
})

router.get('/', (req, res)=>{
    res.redirect('/clucks/index')
})

module.exports = router