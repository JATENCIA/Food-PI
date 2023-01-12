const { getKey } = require("./keys.js");
const KEY = getKey();

const API_FOOD = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&addRecipeInformation=true&number=100`;
const API_FOOD_MOCKY =
  "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5/&addRecipeInformation=true&number=100";

module.exports = {
  API_FOOD,
  API_FOOD_MOCKY,
};
