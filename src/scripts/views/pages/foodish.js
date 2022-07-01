/* eslint-disable no-loop-func */
import SpoonacularSource from '../../data/food-source';
import { createFoodItemTemplate, createSkeletonItemTemplate } from '../templates/template-creator';
import DrawerInitiator from '../../utils/drawer-initiator';
import '../../components/filter';
import '../../components/search';

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
          <div class="pagination"></div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const searchElement = document.querySelector('search-bar');
    const filterElement = document.querySelector('filter-menu');
    const foodContainer = document.querySelector('#foods');
    const resultHeading = document.querySelector('#message');
    const paginationContainer = document.querySelector('.pagination');

    const getPopularFoods = async (offset) => {
      try {
        const result = await SpoonacularSource.popularFoods(offset);
        foodResultMessage('Most Popular Foods');
        renderFoodResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };

    const getFilteredFoods = async (filterLine) => {
      try {
        const foods = await SpoonacularSource.getAllFood(filterLine);
        if (foods.length) {
          renderFoodResult(foods);
          foodContainer.classList.remove('hide-style');
        } else {
          foodContainer.classList.add('hide-style');
        }
      } catch (error) {
        foodResultMessage(error);
      }
    };

    const setFilteredFoods = async (filterLine, message) => {
      let offset = 0;
      const offsetArray = [];
      const cekResults = await SpoonacularSource.getTotalFood(filterLine);

      getFilteredFoods(filterLine);

      if (cekResults) {
        foodResultMessage(`${cekResults} ${message}`);
        const pages = setPagination(cekResults);

        for (let i = 0; i < pages.length; i++) {
          offsetArray.push(offset);
          offset += 24;
        }

        for (let i = 0; i < pages.length; i++) {
          pages[i].addEventListener('click', () => {
            offset += 30;
            getFilteredFoods(`${filterLine}offset=${offsetArray[i]}&`);
          });
        }
      } else {
        foodResultMessage();
        clearPaginationBefore();
      }
    };

    const setFilterSearchList = () => {
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
      if (filterElement.value.typeSelect.length > 0) filterArray.push(`type=${filterElement.value.typeSelect}`);
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

      let filterLine = '';

      if (filterArray.length > 0) {
        /* make a sentence of all filter list */
        for (let i = 0; i < filterArray.length; i++) {
          filterLine += `${filterArray[i]}&`;
        }
      }

      return filterLine;
    };

    const setPagination = (cekResults) => {
      clearPaginationBefore();
      let totalPage = Math.ceil(cekResults / 24);

      if (totalPage > 7) totalPage = 7;

      for (let i = 1; i <= totalPage; i++) {
        paginationContainer.innerHTML += `<button id="buttonPage${i}" class="pagination-button">${i}</button>`;
      }

      const pages = paginationContainer.getElementsByClassName('pagination-button');
      pages[0].classList.add('active');

      return pages;
    };

    const clearPaginationBefore = () => {
      while (paginationContainer.hasChildNodes()) {
        paginationContainer.removeChild(paginationContainer.firstChild);
      }
    };

    const renderFoodResult = (results) => {
      const pages = paginationContainer.querySelectorAll('.pagination-button');
      foodContainer.innerHTML = createSkeletonItemTemplate(30);

      for (let i = 0; i < pages.length; i++) {
        pages[i].addEventListener('click', () => {
          const current = document.getElementsByClassName('active');
          current[0].className = current[0].className.replace(' active', '');
          pages[i].className += ' active';
        });
      }

      foodContainer.innerHTML = '';
      results.forEach((food) => {
        foodContainer.innerHTML += createFoodItemTemplate(food);
      });
    };

    const foodResultMessage = (message = 'No Result, Please try another filter') => {
      resultHeading.innerHTML = `<h4>${message}</h4>`;
    };

    const onButtonSearchClicked = async () => {
      const filterLine = `query=${searchElement.value}&`;
      const message = `Results for ${searchElement.value.charAt(0).toUpperCase()}${searchElement.value.slice(1)}`;
      setFilteredFoods(filterLine, message);
    };

    const onButtonFilterSearchClicked = async () => {
      const emptyMessage = filterElement.value.messageCon;
      const filterLine = setFilterSearchList();

      if (filterLine) {
        /* get filter foods list */
        const message = 'Results for Filtered Food';
        setFilteredFoods(filterLine, message);

        emptyMessage.classList.remove('show-style');
      } else {
        emptyMessage.classList.add('show-style');
      }
    };

    const onFoodishPageRender = async () => {
      let offset = 0;
      const offsetArray = [];
      const cekResults = await SpoonacularSource.getTotalFood('offset=0&');
      getPopularFoods(offset);

      const pages = setPagination(cekResults);

      for (let i = 0; i < pages.length; i++) {
        offsetArray.push(offset);
        offset += 24;
      }

      for (let i = 0; i < pages.length; i++) {
        pages[i].addEventListener('click', () => {
          getPopularFoods(offsetArray[i]);
        });
      }
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
