const express = require('express');
const app = express();
const getData = require('./db');
app.use(express.json())
app.get("",async (req,res)=>{
    let data = await getData('student','person');
    const findData=await data.find({}).toArray()
    let x = findData
    console.log("=========>",findData)
    res.send(findData)
    
})
app.post("/addStudent",async(req,res)=>{
     console.log("res=========>",req.body)
     let data = await getData('student','person');
     let postData = await data.insertOne(req.body);
     if(postData.acknowledged){
        console.log("Data successfully inserted")
        res.send(postData.insertedId)
     }

})

app.put("/updStudent",async(req,res)=>{
   let data = await getData('student','person');
    let updataData = await data.updateOne({name:req.query.params},{$set:req.body.obj})
    console.log("data is Updated",)
    res.send("Data is Updated")
})


app.listen(5000);