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
      <div id="message" class="food-result-message"></div>
            <div class="food-content__item">
                <div id="foods" class="row row-cols-1 row-cols-md-3 g-4 food-list">
      </div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const searchElement = document.querySelector('search-bar');
    const filterElement = document.querySelector('filter-menu');
    const resultHeading = document.querySelector('#message');
    const foodResultMessage = (message) => {
      resultHeading.innerHTML = `<h4>${message}</h4>`;
    };

    const popularfoods = await SpoonacularSource.popularFoods();

    popularfoods.forEach((food) => {
      foodResultMessage('Most Popular Foods');

      const foodContainer = document.querySelector('#foods');
      foodContainer.innerHTML += createFoodItemTemplate(food);
    });

    const onButtonSearchClicked = async () => {
      try {
        const result = await SpoonacularSource.searchFood(searchElement.value);
        foodResultMessage(`Results for ${searchElement.value}`);
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };

    const renderResult = (results) => {
      const foodContainer = document.querySelector('#foods');
      foodContainer.innerHTML = '';
      results.forEach((food) => {
        foodContainer.innerHTML += createFoodItemTemplate(food);
      });
    };

    const onButtonFilterSearchClicked = async () => {
      const filterArray = [];

      if (searchElement.value.length > 0) filterArray.push(`query=${searchElement.value}`);
      if (filterElement.value.minCal.length > 0) filterArray.push(`minCalories=${filterElement.value.minCal}`);
      if (filterElement.value.maxCal.length > 0) filterArray.push(`maxCalories=${filterElement.value.maxCal}`);
      if (filterElement.value.minCarbs.length > 0) filterArray.push(`minCarbs=${filterElement.value.minCarbs}`);
      if (filterElement.value.maxCarbs.length > 0) filterArray.push(`maxCarbs=${filterElement.value.maxCarbs}`);
      if (filterElement.value.minProtein.length > 0) filterArray.push(`minProtein=${filterElement.value.minProtein}`);
      if (filterElement.value.maxProtein.length > 0) filterArray.push(`maxProtein=${filterElement.value.maxProtein}`);
      if (filterElement.value.minFat.length > 0) filterArray.push(`minFat=${filterElement.value.minFat}`);
      if (filterElement.value.maxFat.length > 0) filterArray.push(`maxFat=${filterElement.value.maxFat}`);

      let filterLine = '&';

      for (let i = 0; i < filterArray.length; i++) {
        filterLine += `${filterArray[i]}&`;
      }

      const foods = await SpoonacularSource.searchFoodbyFilter(filterLine);

      const foodContainer = document.querySelector('#foods');
      foodContainer.innerHTML = '';
      foods.forEach((food) => {
        foodContainer.innerHTML += createFoodItemTemplate(food);
      });

      if (filterArray.length > 0) {
        foodResultMessage('Results for Search by Filter');
      } else {
        foodResultMessage('No Result, Please try another filter');
      }
    };

    searchElement.clickEvent = onButtonSearchClicked;
    filterElement.clickEvent = onButtonFilterSearchClicked;
  },
};

export default Foodish;
