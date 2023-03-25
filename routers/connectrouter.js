const express = require('express');
const router = express.Router();

router.use(express.json())

const {getconect, addconect }=require('../controllers/connectcontroller')
router.get('/',getconect)
router.post('/',addconect)

module.exports = router;