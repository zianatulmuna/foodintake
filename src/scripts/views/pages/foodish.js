import SpoonacularSource from '../../data/food-source';
import { createFoodItemTemplate, createSkeletonItemTemplate } from '../templates/template-creator';
import '../../components/filter';
import '../../components/search';

const Foodish = {
  async render() {
    return `
    <div class="foodish-continer">
      <search-bar></search-bar>
      <div class="show-filter">
        <button id="showFilterButton">Search by Filter &#128899</button>
      </div>
      <div id="message" class="food-result-message"></div>
      <filter-menu></filter-menu>
      <div class="food-content">      
        <div class="food-content__item">
          <div id="foods" class="foods">
            ${createSkeletonItemTemplate(20)}
          </div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const foodContainer = document.querySelector('#foods');
    const searchElement = document.querySelector('search-bar');
    const filterElement = document.querySelector('filter-menu');
    const showFilterElement = document.querySelector('.show-filter');
    const resultHeading = document.querySelector('#message');  
    
    const popularFoods = async () => {
      try {
        const result = await await SpoonacularSource.popularFoods();
        foodResultMessage('Most Popular Foods');
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };

    const getFilteredFoods = async (filterLine) => {
      const foods = await SpoonacularSource.searchFoodbyFilter(filterLine);
      renderResult(foods);
    };

    const onButtonSearchClicked = async () => {
      try {
        const result = await SpoonacularSource.searchFood(searchElement.value);
        foodResultMessage(`Results for ${searchElement.value}`);
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };

    const onButtonFilterSearchClicked = async () => {      
      const dietCheckbox = filterElement.value.dietCheck;
      let dietList = '';
      let dietCount = 0;
      for (let i = 0; i < dietCheckbox.length; i++) {
        if (dietCheckbox[i].checked) {
          dietList += `${dietCheckbox[i].value},`;
          dietCount++;
        }
      }

      const allergieCheckbox = filterElement.value.allergieCheck;
      let allergieList = '';
      let allergieCount = 0;
      for (let i = 0; i < allergieCheckbox.length; i++) {
        if (allergieCheckbox[i].checked) {
          allergieList += `${allergieCheckbox[i].value},`;
          allergieCount++;
        }
      }

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
      if (dietCount > 0) filterArray.push(`diet=${dietList}`);
      if (allergieCount > 0) filterArray.push(`intolerances=${allergieList}`);

      if (filterArray.length > 0) {
        let filterLine = '&';

        for (let i = 0; i < filterArray.length; i++) {
          filterLine += `${filterArray[i]}&`;
        } 

        foodResultMessage('Results for Search by Filter');
        foodContainer.classList.remove('hide-style');
        getFilteredFoods(filterLine);
      } else {
        foodResultMessage('No Result, Please try another filter');
        foodContainer.classList.add('hide-style');
      }
    };

    const renderResult = (results) => {
      foodContainer.innerHTML = '';
      results.forEach((food) => {
        foodContainer.innerHTML += createFoodItemTemplate(food);
      });
    };

    const foodResultMessage = (message) => {
      resultHeading.innerHTML = `<h4>${message}</h4>`;
    };

    popularFoods();
    searchElement.clickEvent = onButtonSearchClicked;
    filterElement.clickEvent = onButtonFilterSearchClicked;
    filterElement.value.closeButton.onclick = () => {
      filterElement.style.display = "none";
    }
    showFilterElement.onclick = () => {
      filterElement.style.display = "block";
    }
  },
};

export default Foodish;
