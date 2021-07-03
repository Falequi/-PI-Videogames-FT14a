const {Videogame} = require('../models/Videogame')
const { Router } = require('express');
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get('/videogames',async (_req,res)=>{
    try{
    const videogamnes = await axios.get('https://api.rawg.io/api/games?key=b449ee83903e4864a2eb0220c38149f5');
    
    const result = videogamnes.data.results;
    const videoGames = [];
    
    result.map(result => 
        {
            if(videoGames.length < 15){
                videoGames.push({
                    idApi:      result.id,
                    name:       result.name,
                    image:      result.background_image,
                    description:result.slug,
                    releaseDate:result.released,
                    rating:     result.rating,
                    platforms:  result.platforms, 
                    genres:     result.genres
                })
            }   
        }
    );
    res.json(videoGames);

    }catch(err){
        return[];
    }
    
});

router.get('/videogames',(req,res)=>{
    const {name} = req.query;
    res.send('videogames?name');
});

router.get(`/videogame/{idVideogame}`,(req,res)=>{
    res.send('/videogame/{idVideogame}');
});

router.get('/genres',(req,res)=>{
    res.send('videogames');
});

router.post('/videogame',(req,res)=>{
    const {
        name,
        description,
        releaseDate,
        rating,
        platform
    } = req.body;

    res.send('POST /videogame');
});


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
