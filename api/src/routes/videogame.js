var     express = require('express');
var     router  = express.Router();

const { getVideoGame, 
        postVideoGame }     = require('../controllers/videogame');

router.get(`/:idVideogame`,getVideoGame);

router.post('/',postVideoGame);

module.exports = router;