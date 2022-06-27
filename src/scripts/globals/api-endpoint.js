import CONFIG from './config';

const API_ENDPOINT = {
  FOOD_POPULARITY: (offset) => `${CONFIG.BASE_URL}recipes/complexSearch?sort=popularity&addRecipeNutrition=true&addRecipeInformation=true&number=12&offset=${offset}&${CONFIG.API_KEY}`,
  FOOD_DETAIL: (id) => `${CONFIG.BASE_URL}recipes/${id}/information?includeNutrition=true&${CONFIG.NUMBER_PAGE}&${CONFIG.API_KEY}`,
  FOOD_TRIVIA: `https://api.spoonacular.com/food/trivia/random?${CONFIG.API_KEY}`,
  FOOD_SIMILAR: (id) => `${CONFIG.BASE_URL}recipes/${id}/similar?number=10&${CONFIG.API_KEY}`,
  FOOD_VIDEOS: (keyword) => `${CONFIG.BASE_URL}food/videos/search?query=${keyword}&number=10&${CONFIG.API_KEY}`,
  FOOD_SEARCH: (keyword) => `${CONFIG.BASE_URL}recipes/complexSearch?query=${keyword}&addRecipeNutrition=true&addRecipeInformation=true&number=20&${CONFIG.API_KEY}`,
  FOOD_FILTER: (filterkey) => `${CONFIG.BASE_URL}recipes/complexSearch?&addRecipeNutrition=true&addRecipeInformation=true${filterkey}${CONFIG.NUMBER_PAGE}&${CONFIG.API_KEY}`,
};

export default API_ENDPOINT;
