const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
var router = Router();


const videogames = require('./videogames');
const videogame = require('./videogame');
const genres = require('./genres');

router.use('/videogames',videogames);
router.use('/videogame',videogame);
router.use('/genres',genres);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
