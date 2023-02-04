const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const Databasename = "student";
const collectionName = "person";

const getData = async()=>{
    await client.connect();                                          
    console.log("connected successfully to server");
    const db = client.db(Databasename);
    const collection = await db.collection(collectionName);
    
    collection.insertOne({name:"smpdr",class:"node",adress:"merta"})
};
getData();
