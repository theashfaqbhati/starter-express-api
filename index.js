// const express = require('express');
// const app = express();
// const { route } = require('./Routers/connectrouters');

// // const ConnectDB = require('./Config/db');
// // ConnectDB()

// app.use(express.urlencoded({ extended: false }));

// // const errorHandler = require('./Middelware/errormiddelware')


// app.use('/api/conect', require('./Routers/connectrouters'));
// app.use


// app.listen(8000);


const express = require('express');
const app = express();
const { route } = require('./routers/wishlishrouter');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require("cors")
const ConnectDB = require('./config/db');
ConnectDB()

app.use(express.urlencoded({ extended: false }));
app.use(cors())
 const errorHandler = require('./middelware/errormiddelware')

app.get("/",(req,res)=>{
    res.send("Hellooo ........")
})
 app.use('/api/addtocard', require('./routers/addtocartrouters'));
app.use('/api/wishlish',require('./routers/wishlishrouter'));
 app.use('/api/signup', require('./routers/signuprouters'));
//  app.use('/api/address', require('./routers/'));


app.listen(port, () => {
    console.log(`port is colled ${port}`);
});













