const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("this is  test file");
})
app.listen(5000)