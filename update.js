const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const Databasename = "admin";
const collectionName = "smpdr";

const getData = async()=>{
    await client.connect();                                          
    console.log("connected successfully to server");
    const db = client.db(Databasename);
    const collection = await db.collection(collectionName);
    
    collection.updateOne({name:"smpdr"},{$set:{name:"sarvesh"}})
};
getData();