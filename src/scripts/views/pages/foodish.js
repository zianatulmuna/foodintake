import SpoonacularSource from '../../data/food-source';
import { createFoodItemTemplate } from '../templates/template-creator';
import '../../components/filter';

const Foodish = {
  async render() {
    return `
    <div class="foodish-continer">
      <div class="search__continer">
        <form class="search__item">
          <input type="text" placeholder="Search Food" name="search">
          <button type="submit"><i class="fas fa-search"></i></button>
        </form>
      </div>
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
    const foods = await SpoonacularSource.popularFoods();

    foods.forEach((food) => {
      const foodContainer = document.querySelector('#foods');
      foodContainer.innerHTML += createFoodItemTemplate(food);
    });
  },
};

export default Foodish;
