var express = require('express');
var router = express.Router();
const axios = require('axios');
const {Videogame} = require('../models/Videogame');


router.get(`/`,async(req,res)=>{
    const {idVideogame} = req.query;
    try{
        if(idVideogame !== undefined){
        const videogame = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=b449ee83903e4864a2eb0220c38149f5`);
        const game = videogame.data;
        const objGame = {
            idApi:      game.id,
            name:       game.name,
            description:game.description,
            image:      game.background_image,
            releaseDate:game.released,
            rating:     game.rating,
            platforms:  game.platforms, 
            genres:     game.genres
        }
        res.json(objGame);
    }else{
        res.send("Debe ingresar un id");
    } 
    }catch(err){
        return res.status(err.response.status).send("No encontrado");
    }
});

router.post('/',(req,res)=>{
    const {
        name,
        description,
        releaseDate,
        rating,
        platform
    } = req.body;
    
    console.log(
        name,
        description,
        releaseDate,
        rating,
        platform);
    res.send('POST /videogame');
});

module.exports = router;