import FavoriteFoodIdb from '../../data/bookmark-food-idb';
import { createBookmarkItemTemplate, createSkeletonBookmarkTemplate } from '../templates/template-creator';

const Bookmark = {
  async render() {
    return `
    <div class="bookmark-continer">
      <h1>Bookmarked Food</h1>
      <div class="food-content">
      <div id="message" class="food-result-message"></div>
            <div class="food-content__item">
            <div id="foods" class="foods">${createSkeletonBookmarkTemplate(8)}</div>
      </div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    const foods = await FavoriteFoodIdb.getAllFoods();
    const foodsContainer = document.querySelector('#foods');
    foods.forEach((food) => {
      foodsContainer.innerHTML += createBookmarkItemTemplate(food);
    });
  },
};

export default Bookmark;
