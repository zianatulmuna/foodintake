import CONFIG from './config';

const API_ENDPOINT = {
  FOOD_POPULARITY: `${CONFIG.BASE_URL}recipes/complexSearch?sort=popularity&addRecipeNutrition=true&addRecipeInformation=true&number=20&${CONFIG.API_KEY}`,
  FOOD_DETAIL: (id) => `${CONFIG.BASE_URL}recipes/${id}/information?includeNutrition=true&number=20&${CONFIG.API_KEY}`,
  FOOD_SEARCH: (keyword) => `${CONFIG.BASE_URL}recipes/complexSearch?query=${keyword}&addRecipeNutrition=true&addRecipeInformation=true&number=20&${CONFIG.API_KEY}`,
  FOOD_FILTER: (filterkey) => `${CONFIG.BASE_URL}recipes/complexSearch?&addRecipeNutrition=true&addRecipeInformation=true&number=20${filterkey}${CONFIG.API_KEY}`,
};

export default API_ENDPOINT;
