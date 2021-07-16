var express = require('express');
var router  = express.Router();
var {getVideoGames}      = require('../controllers/videogames');            

router.get('/',getVideoGames);

module.exports = router;