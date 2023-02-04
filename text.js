 /*const http = require('node:http');
 const { Console } = require("console");
 const { application, json } = require("express");
 const { constants } = require("fs/promises");
 //const { type, hostname } = require("os");
 const fs = require('fs');


 const hostname = '127.0.0.1';
  const port = 5000;*/
  const app = require('express')();


  let arr = [
    {
        name:"nijam",
        class:"node",
        address:"piplad"
    },
    {
        name:"sharif",
        class:"js",
        address:"bhasni"
    },
    {
        name:"sarvesh",
        class:"react",
        address:"pidiyar"
    },
    {
        name:"ramjan",
        class:"html",
        address:"pbc"
    },
    {
        name:"mustkim",
        class:"css",
        address:"parbatsar"
    },
    {
        name:"ayan",
        class:"c",
        address:"pbc"
    },
    {
        name:"imran",
        class:"c++",
        address:"padu"
    },{
        name:"gullu",
        class:"html",
        address:"merta"
    },
    {
        name:"sahil",
        class:"css",
        address:"merta"
    },
    {
        name:"sameer",
        class:"js",
        address:"bhakri"
    },
  ]

  let str = "nijam sarvesh sharif vajir";
  let newstr = str.split(" ");
  console.log("===",newstr);

  app.get('',(req,res)=>{
    /*let data = arr.filter((value,index)=>{
        return value.name == req.query.name*/
        let data = newstr.filter((value,index)=>{
            return value.newstr == req.query.newstr
        })
            res.send({data});

    })
    /*if (data.length == 0) {
        res.send("Invalid Name");
    }
    else {
        res.send(data);
    }*/
    //res.send({data});
  //});
  app.listen(5000);


 /*const server = http.createServer((req,res)=>{
     res.statusCode = 200;
     res.setHeader('content-type', 'application/json');
     res.write(JSON.stringify(arr));
     res.end();
 });

 server.listen(port, hostname, () => {
     console.log(`server running at http://${hostname}:${port}`)
     });*/

     console.log(arr);

