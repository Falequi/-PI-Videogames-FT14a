
var    express          = require('express');
var    router           = express.Router();
const { getPlatform }       = require('../controllers/platforms');  


router.get('/', getPlatform );

module.exports = router;