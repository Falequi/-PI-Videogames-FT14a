const axios = require("axios");
const { baseUrl, key } = require("../../constants");
const { Videogame,  Gender, Platform } = require("../db");
const { Op } = require("sequelize");

var getVideoGames = async(req, res) => {
    
    const { name } = req.query;
    
    var result = "",
        searchVideoGames = [],
        videoGames = [];

    if (!name) {
        for (let page = 1; page <= 5; page++) {
            videoGames = await axios.get(`${baseUrl}games?${key}&page=${page}`);

            result = videoGames.data.results;

            result.map((result) => {
                searchVideoGames.push({
                    id: result.id,
                    name: result.name,
                    releaseDate: result.released,
                    rating: result.rating,
                    platforms: result.platforms,
                    genres: result.genres,
                    image: result.background_image,
                });
            });
        }
        const videoGameData = await Videogame.findAll({
           include: [Gender, Platform]
        });

        Promise.all([videoGames, videoGameData]);

        videoGameData.map((data) => searchVideoGames.push(data));
    } else {
        for (let page = 1; page <= 5; page++) {
            videoGames = await axios.get(
                `${baseUrl}games?${key}&search=${name}&page=${page}`
            );

            result = videoGames.data.results;

            result.map((result) => {
                searchVideoGames.push({
                    id: result.id,
                    name: result.name,
                    description: result.slug,
                    releaseDate: result.released,
                    rating: result.rating,
                    platforms: result.platforms,
                    genres: result.genres,
                    image: result.background_image,
                });
            });
        }
        const videoGameData = await Videogame.findAll({
            where: {
                  name: {  [Op.iLike]: `%${name}%` }
            }
        });

        Promise.all([videoGames, videoGameData]);

        videoGameData.map((data) => searchVideoGames.push(data));
    }

    res.json(searchVideoGames);
};

module.exports = {
    getVideoGames,
};