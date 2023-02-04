const express = require('express');
const app = express();
require('./config');
const { isValidForm, validators } = require('./helper');
const userschema = require('./userschema');
app.use(express.json());
const userSchema = require('./userschema');


app.post('/form', async (req,res)=>{
    const { email, name, password, MoNumber } = req.body;
    const form = {
        email:validators.checkEmail('email',email),
        name:validators.checkRequire('name',name),
        password:validators.checkPassword('password',password),
        MoNumber:validators.checkPhoneNumber('phone number',MoNumber)
        
    };
    let data = await new userschema(req.body);
    let result = await data.save();
    res.send(result);   
    res.send(form)
    console.log(form);
});

app.post('/singup',async(req,res)=>{
    let Email = req.body.email;
    let EmailErr = "";
    if(Email.includes("@gmail.com")== false){
        EmailErr = "Plase valid Email";
        res.send(EmailErr);
    }
    else{
        let data =  await new userSchema(req.body)
        let result = await data.save();
        console.log(result);
        res.send(result);
    } 
});

// app.get('/find',async(req,res)=>{ 
//     let data = await userSchema.find();
//     res.send(data);
// });

// app.put('/update/:id',async(req,res)=>{
//     let data = await userSchema.updateOne(req.params, { $set: req.body });
//     res.send(data);
// })

// app.delete('/delate/:id',async(req,res)=>{
//     let data = await userSchema.deleteOne(req.body)
//     res.send(data);
// })

app.get('/',(req,res)=>{
    res.send("Hellow sarvesh mohammad");
    console.log("how are you");
})


app.listen(3000);

