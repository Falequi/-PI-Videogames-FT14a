
const   axios           = require('axios');

const { baseUrl, key }  = require('../../constants');
const { Videogame, 
        Gender, 
        Platform }      = require('../db');

const getVideoGame =  async(req,res)=>{

    const {idVideogame} = req.params;

    const objGame = {
        id:      "",
        name:       "",
        description:"",
        image:      "",
        releaseDate:"",
        rating:     "",
        platforms:  "", 
        genres:     ""
    };
   
    try{
        if(idVideogame !== undefined){

        const videogame = await axios.get(`${baseUrl}games/${idVideogame}?${key}`);

        const {
            id,
            name,
            description,
            background_image,
            released,
            rating,
            platforms,
            genres 
        } = videogame.data;

        objGame.id          = id;
        objGame.name        = name;
        objGame.description = description;
        objGame.image       = background_image;
        objGame.releaseDate = released;
        objGame.rating      = rating;
        objGame.platforms   = platforms; 
        objGame.genres      = genres;

        res.status(200).json(objGame);

    }else{
        res.status(400).send("Debe ingresar un id");
    } 
    }catch(err){
                
        const videoGame = await Videogame.findOne({ 
            where: {id: idVideogame},
            include: [Gender, Platform]
        });

        const {id,name,description,releaseDate,rating,platforms,genders} = videoGame.dataValues;
       
        objGame.id          = id;
        objGame.name        = name;
        objGame.description = description;
        objGame.releaseDate = releaseDate;
        objGame.rating      = rating;
        objGame.platforms   = platforms;
        objGame.genres      = genders;

        res.status(200).json(objGame);
    }
};

const postVideoGame = async(req,res)=>{
    const {
        name,
        description,
        releaseDate,
        rating,
        platforms,
        genres
    } = req.body;

    const [videogame, gender,platform ] = 
    await Promise.all([ 
        Videogame.findOrCreate({
            where:{name: name},
            defaults: {
                name,
                description,
                releaseDate,
                rating,
            }
        }),
        Gender.findAll({ 
            where: {name: genres}
        }),
        Platform.findAll({
            where: {name: platforms}
        })
    ]); 

    await videogame[0].setGenders(gender);
    await videogame[0].setPlatforms(platform);
    res.json("gameCreate");
};

module.exports = {
    getVideoGame,
    postVideoGame
}