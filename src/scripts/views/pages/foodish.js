/* eslint-disable no-use-before-define */
import SpoonacularSource from '../../data/food-source';
import { createFoodItemTemplate } from '../templates/template-creator';
import '../../components/filter';
import '../../components/search';

const Foodish = {
  async render() {
    return `
    <div class="foodish-continer">
    <search-bar></search-bar>
      <filter-menu></filter-menu>
      <div class="food-content">
            <div class="food-content__item">
                <div id="foods" class="row row-cols-1 row-cols-md-3 g-4 food-list">
      </div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const searchElement = document.querySelector('search-bar');
    // const result = await SpoonacularSource.searchFood(searchElement.value);
    // const foods = await SpoonacularSource.popularFoods();

    const onButtonSearchClicked = async () => {
      try {
        const result = await SpoonacularSource.searchFood(searchElement.value);
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };

    const renderResult = (results) => {
      results.forEach((food) => {
        const foodContainer = document.querySelector('#foods');
        foodContainer.innerHTML += createFoodItemTemplate(food);
      });
    };

    searchElement.clickEvent = onButtonSearchClicked;
  },
};

export default Foodish;
