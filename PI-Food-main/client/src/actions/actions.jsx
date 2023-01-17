import axios from "axios";
import {
  GET_RECIPES,
  GET_RECIPE_BY_NAME,
  GET_RECIPE_DETAIL,
  GET_DIETS_TYPES,
  FILTER_DIET_TYPE,
  ORDER_ALPHABETICAL,
  ORDER_BY_HEALTHSCORE,
  CLEAR_DETAIL,
  LOADING,
  UPDATE_RECIPE,
  SET_PAGE,
  CLEAN_RECIPES,
  CREATE_RECIPE,
} from "./constActios.jsx";

// const urlInfoBack = "http://localhost:3001";

export function loading() {
  return {
    type: LOADING,
  };
}

export function getRecipes() {
  return async (dispatch) => {
    try {
      const allRecipes = await axios.get("/recipes");
      return dispatch({
        type: GET_RECIPES,
        payload: allRecipes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//DB RECIPE

export function updateRecipe(id, payload) {
  return async (dispatch) => {
    try {
      const recipeId = await axios.put(`/recipes/${id}`, payload);
      return dispatch({
        type: UPDATE_RECIPE,
        payload: recipeId.data.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//SEARCH BAR
export function getRecipeByName(name) {
  return async (dispatch) => {
    try {
      const recipeName = await axios.get(`/recipes?name=${name}`);

      return dispatch({
        type: GET_RECIPE_BY_NAME,
        payload: recipeName.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_RECIPE_BY_NAME,
        payload: [],
      });
    }
  };
}

export function getRecipeDetail(id) {
  return async function (dispatch) {
    try {
      const recipeDetail = await axios.get(`/recipes/${id}`);
      return dispatch({
        type: GET_RECIPE_DETAIL,
        payload: recipeDetail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//FORM

export function getDietsTypes() {
  return async function (dispatch) {
    try {
      const dietsTypes = await axios.get("/diets");
      return dispatch({
        type: GET_DIETS_TYPES,
        payload: dietsTypes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postRecipe(payload) {
  return async function () {
    try {
      const newRecipe = await axios.post("/recipes", payload);
      return newRecipe;
    } catch (error) {
      console.log(error);
    }
  };
}

//FILTER

export function filterDietType(payload) {
  return {
    type: FILTER_DIET_TYPE,
    payload,
  };
}

//ORDERING

export function orderAlphabetical(payload) {
  return {
    type: ORDER_ALPHABETICAL,
    payload,
  };
}

export function orderByHealthScore(payload) {
  return {
    type: ORDER_BY_HEALTHSCORE,
    payload,
  };
}

export function cleanDetail() {
  return {
    type: CLEAR_DETAIL,
    payload: [],
  };
}
export function cleanRecipes() {
  return {
    type: CLEAN_RECIPES,
    payload: [],
  };
}

export function setPage(payload) {
  return {
    type: SET_PAGE,
    payload,
  };
}
