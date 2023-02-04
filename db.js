const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const getData = async(Databasename,collectionName)=>{
    await client.connect();                                          
    console.log("connected successfully to server");
    const db = client.db(Databasename);
    const collection = await db.collection(collectionName);
    return collection;
};
module.exports=getData;