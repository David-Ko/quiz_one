const express = require('express')
const app = express();
const logger = require('morgan');
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.set("view engine", "ejs"); 
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));


const baseRouter = require("./routes/base.js")
app.use('/', baseRouter);
//The above two lines replace the 3 lines below
// app.get('/', (req,res)=>{
//     res.send('hi')
// });



const clucksRouter = require("./routes/clucks.js");
app.use('/clucks', clucksRouter);

app.use((req, res, next) => {
console.log("Cookies:", req.cookies);

const username = req.cookies.username;
res.locals.username = "";
if (username) {
    res.locals.username = username;
    console.log(`Signed in as ${username}`);
}
next();
});

const PORT = 5004;
const HOST = 'localhost'
app.listen(PORT, HOST, ()=>{
    console.log(`Server is listening on http://${HOST}: ${PORT}`)
});