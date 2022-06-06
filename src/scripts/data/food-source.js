import API_ENDPOINT from '../globals/api-endpoint';

class SpoonacularSource {
  static async popularFoods() {
    const response = await fetch(API_ENDPOINT.FOOD_POPULARITY);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailFood(id) {
    const response = await fetch(API_ENDPOINT.FOOD_DETAIL(id));
    return response.json();
  }
}

export default SpoonacularSource;
