const express = require('express');
require('./mongosedb')
//const { response } = require('express');
//const url = 'mongodb+srv://akram:Solanki167@travesycluster0.sg3iqyi.mongodb.net/?retryWrites=true&w=majority';

const Product = require('./mongose')

const app = express();
app.use(express.json());
//app.use(config())
app.post('/AddData', async (req, res) => {
    let data = new Product(req.body)
    let result = await data.save();
    res.send(result);
    console.log("===result====>", result);
})

app.get('/get', async (req, res) => {
    let data = await Product.find();
    //let result = await data.find();
    console.log("===result===>", data);
    res.send(data);
})
app.put('/update/:_id', async (req, res) => {
    console.log("==========>iddd", req.params)
    let data = await Product.updateOne(req.params, { $set: req.body });
    res.send(data);
    console.log("====>data", data);
})
app.get('/search/:name', async (req, res) => {
    let data = await Product.find({
        "$or": [
            { "name": { $regex: req.params.name } },
            { "class": { $regex: req.params.name } },
            { "address": { $regex: req.params.name } }

        ]
    });
    res.send(data);
})
app.delete('/delete/:_id', async (req, res) => {

    let data = await Product.deleteOne(req.params);
    if (data.deletedCount) {
        res.send(data);
    }
    else {
        res.send("Recored note Found");
    }

})
app.delete('/LastIndexDelete', async (req, res) => {
    let Alldata = await Product.find();
    let obj = Alldata[Alldata.length - 1]
    let data = await Product.deleteOne({ "name": obj.name })
    res.send(data)
    console.log("======data===", data);
})
app.listen(5000)