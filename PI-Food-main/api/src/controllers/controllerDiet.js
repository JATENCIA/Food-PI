const axios = require("axios");
const { Diet } = require("../db");
const { API_FOOD, API_FOOD_MOCKY } = require("../utils/utils.js");

const getAllDiets = async () => {
  try {
    const allRecipes = await axios.get(
      // API_FOOD
      API_FOOD_MOCKY
    );
    const dietsArrays = allRecipes.data.results?.map((recipe) => recipe.diets);
    const dietsEach = dietsArrays.flat();
    const diets = [...new Set(dietsEach)];

    diets.forEach((diet) => {
      Diet.findOrCreate({
        where: {
          name: diet,
        },
      });
    });
    return diets;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { getAllDiets };
