var express = require('express');
var router = express.Router();
const axios = require('axios');
const {Videogame} = require('../models/Videogame');

router.get('/',async (req,res)=>{
   
    const {name} = req.query; 
    var result = '', 
        searchVideoGames = [], 
        videoGames=[],
        {page} = req.query,
        pages = 0;

    try{
        if(!name){
            for (let page = 1; page <=5 ; page++) {
                videoGames = await axios.get(`https://api.rawg.io/api/games?key=b449ee83903e4864a2eb0220c38149f5&page=${page}`);
                result = videoGames.data.results;
                result.map(result => 
                {
                        searchVideoGames.push({
                            idApi:      result.id,
                            name:       result.name,
                            image:      result.background_image,
                            releaseDate:result.released,
                            rating:     result.rating,
                            platforms:  result.platforms, 
                            genres:     result.genres
                        });   
                });
            }
            // res.json(searchVideoGames);
            }else
            {
                for (let page = 1; page <=5 ; page++) {
                    videoGames = await axios.get(`https://api.rawg.io/api/games?key=b449ee83903e4864a2eb0220c38149f5&search=${name}&page=${page}`);
                    result = videoGames.data.results;
                    result.map(result => 
                    {
                            searchVideoGames.push({
                                idApi:      result.id,
                                name:       result.name,
                                image:      result.background_image,
                                description:result.slug,
                                releaseDate:result.released,
                                rating:     result.rating,
                                platforms:  result.platforms, 
                                genres:     result.genres
                            });
                    });
                }
                // res.json(searchVideoGames);
            }   
    }catch(err){
        return[];
    }
    // pages = Math.ceil (searchVideoGames.length/15);
    // console.log(pages);

    // if(!page && page <7 && page > 0 ){
    //     page = (page * 15)+1;
    // }
        res.json(searchVideoGames);
    
});

module.exports = router;