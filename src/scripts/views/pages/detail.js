import UrlParser from '../../routes/url-parser';
import SpoonacularSource from '../../data/food-source';
import { createFoodDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div class="content">
            <div class="content__item">
                <div id="food" class="food"></div>
            </div>
            <div id="likeButtonContainer"></div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const food = await SpoonacularSource.detailFood(url.id);
    const restaurantContainer = document.querySelector('#food');
    restaurantContainer.innerHTML = createFoodDetailTemplate(food);
  },
};

export default Detail;
