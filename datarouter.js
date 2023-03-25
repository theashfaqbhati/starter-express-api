const express= require('express');
const app = express();
const {sarees } = require('./data');
//const router = express.Router();
//router.use(express.json())

app.get ('/',sarees)

app.listen(5000);


//module.exports = router