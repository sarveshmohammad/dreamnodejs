const http = require('http');
const express = require("express")
const app = express();
const path = require('path');
const pathname = path.join(__dirname,"HTML");

const arr=[
    {
    name:"nijam",
    class:"node",
    address:"pbc"
   },
   {
    name:"sharif",
    class:"html",
    address:"merta"
   },
   {
    name:"sarvesh",
    class:"react",
    address:"piplad"
   },
]

//app.use(express.static(pathname))
app.set('view engine','ejs');

app.get('/login',(req,res)=>{
    res.render('login',{arr});
});

app.listen(5000);