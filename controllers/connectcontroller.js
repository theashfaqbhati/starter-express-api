const conect = require('../Model/connectModel');


const getconect = async (req, res) => {
    let data = await conect.findOne({});
    console.log("======>", data);
    res.status(200).json(data)
}



const addconect = async (req, res) => {

    const {name,email,phone,address  } = req.body
    if ( !name && !email && !phone && !address ) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await conect.create({ 
        name,
        email,
        phone,
        address
    
    });
    console.log("====>", data);
    res.status(200).json(data)
}

module.exports = {
    getconect,
    addconect
}