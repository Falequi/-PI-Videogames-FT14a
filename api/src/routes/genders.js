
var    express          = require('express');
var    router           = express.Router();
const {getGender}       = require('../controllers/genders');  


router.get('/', getGender);

module.exports = router;