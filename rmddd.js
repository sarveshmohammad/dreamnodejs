const express = require('express');
const app = express();
 const data =require('./Mw2');
const arrs=require('./Mw2')
const route = express.Router();

route.use(data);
//  app.use(arrs)
// console.log(data);

route.get('',(req, res)=>{
    res.send("this is a home page");
});
app.use('',route);
app.listen(5000);


