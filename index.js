const http = require('node:http');
const fs = require('fs')
const app = require('express');
const { type } = require('node:os');
const { application, json } = require('express');

let arr = [
    {name:{name:"nijam",class:"js"},name2:{name3:[{name:"nijam",class:"nodejs"},{name:"sharif",class:"js"},],},},
    {name:[{name:"sarvesh",class:"js"},name2=[{name:"ramjan",class:"html"},{name:"ayan",class:"react"}],],name3:{name:"gullu",class:"php"},}

]

http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','application\json');
    res.write(JSON.stringify(arr));
    res.end();
}).listen(7000);

console.log(arr);

console.log("nijam sherani");
