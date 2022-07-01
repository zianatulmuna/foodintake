import API_ENDPOINT from '../globals/api-endpoint';

class SpoonacularSource {
  static async popularFoods(offset) {
    const response = await fetch(API_ENDPOINT.FOOD_POPULARITY(offset));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async getTotalFood(filterkey) {
    const response = await fetch(API_ENDPOINT.FOOD_TOTAL(filterkey));
    const responseJson = await response.json();
    return responseJson.totalResults;
  }

  static async getAllFood(filterkey) {
    const response = await fetch(API_ENDPOINT.FOOD_FILTER(filterkey));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailFood(id) {
    const response = await fetch(API_ENDPOINT.FOOD_DETAIL(id));
    return response.json();
  }

  static async foodTrivia() {
    const response = await fetch(API_ENDPOINT.FOOD_TRIVIA);
    return response.json();
  }

  static async similarFood(id) {
    const response = await fetch(API_ENDPOINT.FOOD_SIMILAR(id));
    return response.json();
  }

  static async foodVideos(keyword) {
    const response = await fetch(API_ENDPOINT.FOOD_VIDEOS(keyword));
    const responseJson = await response.json();
    return responseJson.videos;
  }
}

export default SpoonacularSource;
