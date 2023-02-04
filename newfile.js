const mongoose = require('mongoose');
const express = require ('express');
const app = express();
const url = 'mongodb://127.0.0.1:27017/student';
mongoose.connect(url) ;   

const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    address: String
})

app.get('',async(req,res)=>{
    const student = mongoose.model('person', studentSchema);
    let data = await student.find({});
    res.send(data[data.length-1]);
    
})
app.use(express.json())
app.put('/update',async(req,res)=>{
    const student = mongoose.model('person', studentSchema);
    const abc = await student.updateOne({name:"nijam"},{$set:req.body})
    res.send(abc);
  })
  
  app.listen(5000);