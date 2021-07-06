var express = require('express');
var router = express.Router();
const axios = require('axios');
const {Gender} = require('../models/Gender');



router.get('/', async(req,res)=>{
    try{
        const genders = await axios.get(`https://api.rawg.io/api/genres?key=b449ee83903e4864a2eb0220c38149f5`);
        
        res.json(genders.data.results);

        
    }catch(err){
        return[];
    }
});

module.exports = router;