const express = require('express');
const app = express();
const getData = require('./getaap');
const mongodb = require('mongodb');

app.get('/',async(req, res)=>{
    let dd = await getData("dreamcoder","student");
    const findResult = await dd.find({}).toArray();
    let ddd = await getData("lightcode","employ");
    const findResult2 = await ddd.find({}).toArray();
    findResult.push(...findResult2);
    let data = await getData('admin','smpdr');
    const insert = await data.insertMany(findResult);
    res.send(findResult);
    console.log(insert)
});

app.get('/:id',async(req, res)=>{
    let data = await getData("admin","smpdr");
    const findResult = await data.find({_id: new mongodb.ObjectId(req.params.id)}).toArray();
    res.send(findResult);
});

// app.delete('/:id',async (req,res)=>{
//     const data =
// })
app.listen(5000);