import UrlParser from '../../routes/url-parser';
import SpoonacularSource from '../../data/food-source';
import SaveButtonInitiator from '../../utils/save-button-initiator';
import {
  createFoodDetailTemplate,
  createSimilarFoodItemTemplate,
  createVideoFoodItemTemplate,
  createSkeletonDetailTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div class="content detail-page">
          <div class="content-main">
            <div id="food" class="food">${createSkeletonDetailTemplate(1)}</div>
            <div id="foodNutrition"></div>
          </div>
          <div class="content-aside">
              <div class="food-trivia">
                <h4><i class="fas fa-lightbulb icon-header"></i> Food Trivia</h4>
                <div id="foodTrivia" class="aside-food-item"></div>
              </div>
              <div class="similar-food">
                <h4><i class="fa-solid fa-kitchen-set icon-header"></i> Similar Foods</h4>
                <div id="similarFood"></div>
              </div>
              <div class="video-similar-food">
                <h4><i class="fa-brands fa-youtube icon-header"></i> Similar Food Videos</h4>
                <div id="videoFood" class="video-similar-food"></div>
              </div>
            </div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const food = await SpoonacularSource.detailFood(url.id);
    const foodContainer = document.querySelector('#food');
    foodContainer.innerHTML = createFoodDetailTemplate(food);

    const foodTrivia = await SpoonacularSource.foodTrivia();
    const triviaContainer = document.querySelector('#foodTrivia');
    triviaContainer.innerHTML = `<p>${foodTrivia.text}</p>`;

    const similarFoods = await SpoonacularSource.similarFood(url.id);
    const similarFoodContainer = document.querySelector('#similarFood');
    similarFoods.forEach((similarFood) => {
      similarFoodContainer.innerHTML += createSimilarFoodItemTemplate(similarFood);

      if (food.sourceName) {
        document.querySelector('#foodSource').innerHTML = `<p><i class="fa-solid fa-user icon"></i> By ${food.sourceName}</p>`;
      }
    });

    const videoFoods = await SpoonacularSource.foodVideos(food.title.substring(0, 20));
    const videoFoodContainer = document.querySelector('#videoFood');
    const videoCard = document.querySelector('.video-similar-food');
    videoCard.classList.add('hide-style');

    if (videoFoods.length > 0) {
      videoCard.classList.remove('hide-style');
      videoFoods.forEach((videoFood) => {
        videoFoodContainer.innerHTML += createVideoFoodItemTemplate(videoFood);
      });
    }

    SaveButtonInitiator.init({
      saveButtonContainer: document.querySelector('#saveButtonContainer'),
      food: {
        id: food.id,
        title: food.title,
        image: food.image,
        healthScore: food.healthScore,
        nutrients: food.nutrition.nutrients,
        servings: food.servings,
        summary: food.summary,
      },
    });
  },
};

export default Detail;
