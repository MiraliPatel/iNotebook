const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://userdb:7WJpu1bljd3lT341@clustertest.twxq8.mongodb.net/"


// async function connectToMongo () {
//     await mongoose.connect(mongoURI).then(()=>{
//         console.log("Connected to Mongo Successfully").catch(err =>console.log(err));
//     })
// }
const  connectToMongo = async ()=> {
    try{

        await mongoose.connect(mongoURI),{
    }
        console.log("Connected to Mongo Successfully")
    }catch(err){
        console.log("Error connecting to mongoDB:",err);
    }
}

module.exports = connectToMongo;