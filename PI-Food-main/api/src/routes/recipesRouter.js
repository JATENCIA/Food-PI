const { Router } = require("express");
const { getAllRecipes } = require("../controllers/controllerDB.js");
const { postNewRecipe } = require("../controllers/controllerRecipe.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    let info = await getAllRecipes();

    if (name) {
      let recipeName = info.filter((r) =>
        r.name.toLowerCase().includes(name.toLowerCase())
      );
      recipeName.length
        ? res.status(200).send(recipeName)
        : res.status(201).send(`NOT FOUND`);
    } else {
      res.status(200).send(info);
    }
  } catch (error) {
    console.log("Error in route getQueryname", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const infoApi = await getAllRecipes();
    if (id) {
      const recipeById = infoApi.find((recipe) => recipe.id == id);
      recipeById
        ? res.status(200).json(recipeById)
        : res.status(404).json("Not found recipe detail");
    }
  } catch (error) {
    res.status(404).send(`Error: ${error}`);
  }
});

router.post("/", async (req, res) => {
  const objRecipe = req.body;
  try {
    const postRecipe = await postNewRecipe(objRecipe);
    res.status(201).json(postRecipe);
  } catch (error) {
    res.status(404).json(`Error in route post Recipe ${error}`);
  }
});

module.exports = router;
