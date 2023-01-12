const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require("../routes/recipesRouter");
const diets = require("./dietsRouter");

const router = Router();

// Configurar los routers
router.use("/recipes", recipes);
router.use("/diets", diets);
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
