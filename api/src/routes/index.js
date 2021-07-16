// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require('express');
var   router     = Router();

const videogames = require('./videogames');
const videogame  = require('./videogame');
const genders    = require('./genders');
const platforms    = require('./platform');

router.use('/videogames',videogames);
router.use('/videogame',videogame);
router.use('/genres',genders);
router.use('/platforms',platforms);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
