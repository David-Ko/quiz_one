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
//Below is for method-override
// app.use(
//     methodOverride((req,res)=>{      
//         if(req.body && req.body._method){
//             const method = req.body._method;
//             return method;
//         }
//     })
// );

const baseRouter = require("./routes/base.js")
app.use('/', baseRouter);
//The above two lines replace the 3 lines below
// app.get('/', (req,res)=>{
//     res.send('hi')
// });



const clucksRouter = require("./routes/clucks.js");
app.use('/clucks', clucksRouter);



const PORT = 5004;
const HOST = 'localhost'
app.listen(PORT, HOST, ()=>{
    console.log(`Server is listening on http://${HOST}: ${PORT}`)
});