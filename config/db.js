const mongoose = require('mongoose');
const ConnectDB= async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL)
       // console.log(connect);

    }
    catch(error){
 console.log("======>",error);
        process.exit(1)
    }
}
module.exports = ConnectDB;