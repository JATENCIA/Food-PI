const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { API_FOOD, API_FOOD_MOCKY } = require("../utils/utils.js");

const getInfoRecipe = async () => {
  try {
    infoApi = await axios.get(
      // API_FOOD
      API_FOOD_MOCKY
    );
    const data = infoApi.data.results;
    const infoRecipe = data?.map((recipe) => {
      return {
        id: recipe.id,
        name: recipe.title,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        diets: recipe.diets,
        image: recipe.image,
        steps: recipe.analyzedInstructions[0]?.steps.map((ele) => {
          return {
            number: ele.number,
            step: ele.step,
          };
        }),
      };
    });
    return infoRecipe;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getInfoRecipeDB = async () => {
  try {
    const dbInfo = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    let dato = JSON.parse(JSON.stringify(dbInfo, null, 2));
    dato.forEach((el) => (el.diets = el.diets.map((elem) => elem.name)));
    return dato;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAllRecipes = async () => {
  try {
    const infoApi = await getInfoRecipe();
    const dataDB = await getInfoRecipeDB();
    const allRecipes = infoApi.concat(dataDB);
    return allRecipes;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = {
  getInfoRecipe,
  getAllRecipes,
};
