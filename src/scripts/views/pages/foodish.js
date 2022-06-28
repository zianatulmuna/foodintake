import SpoonacularSource from '../../data/food-source';
import { createFoodItemTemplate, createSkeletonItemTemplate } from '../templates/template-creator';
import DrawerInitiator from '../../utils/drawer-initiator';
import '../../components/filter';
import '../../components/search';
import PageInitiator from '../../utils/pagination-initiator';

const Foodish = {
  async render() {
    return `
    <div class="foodish-continer">
      <search-bar></search-bar>
      <div class="show-filter">
        <button id="showFilterButton">Search by <span>Filter <i class="fa-solid fa-caret-down"></i></span></button>
      </div>
      <div id="message" class="food-result-message"></div>
      <filter-menu></filter-menu>
      <div class="food-content">      
        <div class="food-content-item">
          <div id="foods" class="foods">
            ${createSkeletonItemTemplate(20)}
          </div>
        </div>
        <div class="food-content-page">
          <div class="pagination">
            <button id="buttonPage1">1</button>
            <button id="buttonPage2">2</button>
            <button id="buttonPage3">3</button>
          </div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const searchElement = document.querySelector('search-bar');
    const filterElement = document.querySelector('filter-menu');
    const foodContainer = document.querySelector('#foods');
    const pageContainer = document.querySelector('.food-content-page');
    const resultHeading = document.querySelector('#message');

    const page1 = document.querySelector('#buttonPage1');
    const page2 = document.querySelector('#buttonPage2');
    const page3 = document.querySelector('#buttonPage3');

    const getPopularFoods = async (offset) => {
      try {
        const result = await await SpoonacularSource.popularFoods(offset);
        foodResultMessage('Most Popular Foods');
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };

    const getFilteredFoods = async (filterLine) => {
      try {
        const foods = await SpoonacularSource.searchFoodbyFilter(filterLine);
        if (foods.length) {
          renderResult(foods);
          foodResultMessage('Results for Food Filter');
          foodContainer.classList.remove('hide-style');
        } else {
          foodResultMessage();
          foodContainer.classList.add('hide-style');
        }
      } catch (error) {
        foodResultMessage(error);
      }
    };

    const renderResult = (results) => {
      foodContainer.innerHTML = '';
      results.forEach((food) => {
        foodContainer.innerHTML += createFoodItemTemplate(food);
      });
    };

    const foodResultMessage = (message = 'No Result, Please try another filter') => {
      resultHeading.innerHTML = `<h4>${message}</h4>`;
    };

    const onButtonSearchClicked = async () => {
      pageContainer.classList.add('hide-style');

      const result = await SpoonacularSource.searchFood(searchElement.value);
      const capitalizedText = searchElement.value.charAt(0).toUpperCase() + searchElement.value.slice(1);
      foodResultMessage(`Results for ${capitalizedText}`);
      renderResult(result);
    };

    const onButtonFilterSearchClicked = async () => {
      pageContainer.classList.add('hide-style');

      /* get diet list checkbox from user */
      const dietCheckbox = filterElement.value.dietCheck;
      let dietList = '';
      let dietCount = 0;
      for (let i = 0; i < dietCheckbox.length; i++) {
        if (dietCheckbox[i].checked) {
          dietList += `${dietCheckbox[i].value},`;
          dietCount++;
        }
      }

      /* get allergies list checkbox from user */
      const allergieCheckbox = filterElement.value.allergieCheck;
      let allergieList = '';
      let allergieCount = 0;
      for (let i = 0; i < allergieCheckbox.length; i++) {
        if (allergieCheckbox[i].checked) {
          allergieList += `${allergieCheckbox[i].value},`;
          allergieCount++;
        }
      }

      /* get all list filter from user */
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

        /* make a sentence of all filter list */
        for (let i = 0; i < filterArray.length; i++) {
          filterLine += `${filterArray[i]}&`;
        }

        /* get filter foods list */
        getFilteredFoods(filterLine);
      } else {
        foodResultMessage();
        foodContainer.classList.add('hide-style');
      }
    };

    const onFoodishPageRender = () => {
      pageContainer.classList.remove('hide-style');

      let offset = 0;
      getPopularFoods(offset);
      PageInitiator.activePage1(page1, page2, page3);

      page1.addEventListener('click', () => {
        PageInitiator.activePage1(page1, page2, page3);
        offset = 0;
        getPopularFoods(offset);
      });

      page2.addEventListener('click', () => {
        PageInitiator.activePage2(page1, page2, page3);
        offset = 12;
        getPopularFoods(offset);
      });

      page3.addEventListener('click', () => {
        PageInitiator.activePage3(page1, page2, page3);
        offset = 24;
        getPopularFoods(offset);
      });
    };

    onFoodishPageRender();
    searchElement.clickEvent = onButtonSearchClicked;
    filterElement.clickEvent = onButtonFilterSearchClicked;

    DrawerInitiator.init({
      button: document.querySelector('#showFilterButton'),
      content: filterElement.value.closeButton,
      drawer: filterElement,
    });
  },
};

export default Foodish;
