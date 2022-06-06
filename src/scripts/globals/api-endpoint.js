import CONFIG from './config';

const API_ENDPOINT = {
  FOOD_POPULARITY: `${CONFIG.BASE_URL}recipes/complexSearch?sort=popularity&addRecipeNutrition=true&addRecipeInformation=true&${CONFIG.API_KEY}`,
  FOOD_DETAIL: (id) => `${CONFIG.BASE_URL}recipes/${id}/information?includeNutrition=true&${CONFIG.API_KEY}`,
};

export default API_ENDPOINT;
