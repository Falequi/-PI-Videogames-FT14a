const  axios            = require('axios');
const {Platform}        = require('../db');
const {baseUrl, key}    = require('../../constants'); 


var updatePlatformApi = async() =>{
        
        const cantPlatforms = await Platform.findAll();
        
        if(cantPlatforms.length === 0){
        const platforms = await axios.get(`${baseUrl}platforms?${key}`);
        
        const platfors = platforms.data.results;
        
        platfors.map(async genders =>
                await Platform.findOrCreate({
                        where:   {name: genders.name},
                        default: {name: genders.name}
                })
                );
        }
};

var getPlatform = async(req,res)=>{

        const platformUpdate = await Platform.findAll();
        
        res.status(200).json(platformUpdate);
         
};

module.exports = {
    updatePlatformApi,
    getPlatform
}