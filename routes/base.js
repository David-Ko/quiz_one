const express = require("express");
const router = express.Router();
// const knex = require("../db/client") 

router.get("/", (req, res)=>{
    const username = req.cookies.username
    res.render('homePage', {username})
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7; // A week in milliseconds
router.post("/sign_in", (req, res) => {
  const username = req.body.username;
  res.cookie("username", username, { maxAge: COOKIE_MAX_AGE });
  res.redirect("/");
});

router.post("/sign_out", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});




module.exports = router