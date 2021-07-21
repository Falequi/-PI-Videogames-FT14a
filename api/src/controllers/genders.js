const  axios            = require('axios');
const {Gender}          = require('../db');
const {baseUrl, key}    = require('../../constants'); 


var updateGenderApi = async() =>{

    const cantGenders = await Gender.findAll();
        
    if(cantGenders.length === 0){    
    const genders = await axios.get(`${baseUrl}genres?${key}`);

    const genres = genders.data.results;

    genres.map(async genders =>
            await Gender.findOrCreate({
                    where:   {name: genders.name},
                    default: {name: genders.name}
            })
    );
        }
};

var getGender = async(req,res)=>{

        const genderUpdate = await Gender.findAll();
        
        res.status(200).json(genderUpdate);
         
};

module.exports = {
        updateGenderApi,
        getGender
}