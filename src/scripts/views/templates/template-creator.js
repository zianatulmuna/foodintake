import CONFIG from '../../globals/config';

const createFoodItemTemplate = (food) => `
  <div class="food-item">
    <img src="${food.image}" class="food-item-image" alt="${food.title}">   
    <div class="food-item-info">
      <ul class="food-item-info-icon">
          <li><i class="fas fa-star-half-alt icon"></i></li>
          <li>Score</li>
          <li>${food.healthScore}</li>           
      </ul>
      <ul class="food-item-info-mid">
        <li><i class="fa-brands fa-nutritionix icon"></i></li>
        <li>Calories</li>
        <li>${food.nutrition.nutrients
            .filter((nutrient) => nutrient.name === 'Calories')
            .map((nutrient) => `
                <p>${parseInt(nutrient.amount)}</p>
            `).join('')}
        </li>   
      </ul>
      <ul>
        <li><i class="fas fa-utensils icon"></i></li>
        <li>Serving</li>
        <li>${food.servings}</li>
      </ul>
    </div>
    <div class="food-item-content">
      <h5 class="food-item-title"><a href="${`/#/detail/${food.id}`}">${food.title}</a></h5>
      <p class="food-item-summary">${food.summary}</p>
    </div>
  </div>
`;

const createFoodDetailTemplate = (food) => `
  <h2 class="food-title">${food.title}</h2>
  <img class="food-image" src="${food.image}" alt="${food.title}">

  <div calss="food-information">    
    <p class="food-source">from <a href="${food.sourceUrl}">${food.sourceUrl.split('/')[2]}</a></p>
    <div class="food-type">
      ${food.dishTypes.map((name) => `<li class="food-type-list">#${name}</li>`).join('')}
    </div>
    <div id="saveButtonContainer" class="food-action"></div>
  </div>

  <div class="food-fact">
    <h4>Food Facts</h4>
    <div class="food-fact-item">
    <div>
      <li class="food-fact-value">${food.healthScore}</li>
      <li class="food-fact-title"><i class="fas fa-star-half-alt icon"></i> Health Score</li>
    </div>
    <div>
      <li class="food-fact-value">${food.weightWatcherSmartPoints}</li>
      <li class="food-fact-title"><i class="fas fa-weight icon"></i> Weight Points</li>
    </div>
    <div>
      <li class="food-fact-value">${food.readyInMinutes}</li>
      <li class="food-fact-title"><i class="fas fa-stopwatch icon"></i> Ready In Minutes</li>
    </div>
    <div>
      <li class="food-fact-value">${food.servings}</li>
      <li class="food-fact-title"><i class="fas fa-utensils icon"></i> Servings</li>
    </div>
    </div>
  </div>
 
  <div class="food-nutrition">
    <h4>Nutrients</h4>
    <div class="food-brackdown-title">
      <li><i class="fas fa-circle icon-protein"></i> Protein</li>
      <li><i class="fas fa-circle icon-fat"></i> Fat</li>
      <li><i class="fas fa-circle icon-carbs"></i> Carbohydrats</li>
    </div>
    <div class="food-brackdown">
      <li class="percentProtein" style="width: ${parseInt(food.nutrition.caloricBreakdown.percentProtein)}%;">${parseInt(food.nutrition.caloricBreakdown.percentProtein)}%</li>
      <li class="percentFat" style="width: ${parseInt(food.nutrition.caloricBreakdown.percentFat)}%;">${parseInt(food.nutrition.caloricBreakdown.percentFat)}%</li>
      <li class="percentCarbs" style="width: ${parseInt(food.nutrition.caloricBreakdown.percentCarbs)}%;">${parseInt(food.nutrition.caloricBreakdown.percentCarbs)}%</li>            
    </div>
    <div class="food-nutrition-list">
    <table>${food.nutrition.nutrients
      .map(
        (nutrient) => `
          <tr>
            <td>${nutrient.name}</td>
            <td>${parseInt(nutrient.amount)} ${nutrient.unit}</td>
            <td>${parseInt(nutrient.percentOfDailyNeeds)}%</td>
          </tr>
        `,
      ).join('')}
    </table>
    </div>
    <div class="food-nutrition-label">
      <img src="${CONFIG.BASE_URL}recipes/${food.id}/nutritionLabel.png?${CONFIG.API_KEY}" alt="Nutrition Label">
    </div>
    
  </div>

  <div class="food-recipe">
    <h4>Ingredients</h4>
    <p>${food.extendedIngredients
      .map(
        (ingredient) => `
          <p>${ingredient.original}</p>
        `,
      ).join('')}
    </p>
    <img class="food-ingredient-image" src="${CONFIG.BASE_URL}recipes/${food.id}/ingredientWidget.png?${CONFIG.API_KEY}" alt="Ingredients">
   

    <h4>Equipments</h4>
    <img class="food-equipments" src="${CONFIG.BASE_URL}recipes/${food.id}/equipmentWidget.png?${CONFIG.API_KEY}" alt="Equipments">


    <h4>Instructions</h4>
    <p>${food.analyzedInstructions
      .map(
        (instruction) => `
          <ol>${instruction.steps
        .map(
          (step) => `
            <li>${step.step}</li>`,
          ).join('')}</ol>
        `,
      ).join('')}
    </p>
  </div>  

  <div class="food-summary">
    <h4>Summary</h4>
    <p>${food.summary}</p>
  </div>
`;

const createSimilarFoodItemTemplate = (food) => `
  <div class="aside-food-item">
  <a href="${`/#/detail/${food.id}`}">
    <h5 class="similar-food-item-title">${food.title}</h5>
    <div class="similar-food-item-info">
      <ul class="similar-food-item-info-icon">
          <li class="line"><i class="fas fa-stopwatch icon"></i> ${food.readyInMinutes} minutes</li>
          <li><i class="fas fa-utensils icon"></i> ${food.servings} servings</li>
      </ul>
    </div>
  </a>
  </div>
`;

const createVideoFoodItemTemplate = (video) => `
  <div class="aside-food-item">
    <a class="video-food-item" href="https://www.youtube.com/watch?v=${video.youTubeId}" terget="_blank">
      <img class="video-food-item-thumbnail" src="${video.thumbnail}" alt="${food.shortTitle}">
      <div class="video-food-item-content">
        <h5 class="video-food-item-title">${video.shortTitle}</h5>
        <div class="video-food-item-info">
          <ul class="video-food-item-info-icon">
              <li class="line"><i class="fa-solid fa-star icon"></i> ${video.rating}</li>
              <li><i class="fa-solid fa-eye icon"></i> ${video.views}</li>
          </ul>
        </div>
      </div>    
    </a>
  </div>
`;


const createBookmarkItemTemplate = (food) => `
<div class="food-item">
    <img src="${food.image}" class="food-item-image" alt="${food.title}">   
    <div class="food-item-info">
      <ul class="food-item-info-icon">
          <li><i class="fas fa-star-half-alt icon"></i></li>
          <li>Score</li>
          <li>${food.healthScore}</li>           
      </ul>
      <ul>
        <li><i class="fas fa-utensils icon"></i></li>
        <li>Serving</li>
        <li>${food.servings}</li>
      </ul>
    </div>
    <div class="food-item-content">
      <h5 class="food-item-title"><a href="${`/#/detail/${food.id}`}">${food.title}</a></h5>
      <p class="food-item-summary">${food.summary}</p>
    </div>
  </div>
`;

const createSaveButtonTemplate = () => `
  <button class="food-button-like" id="saveButton">
    <i class="far fa-bookmark icon"></i> Save Recipe
  </button>
`;

const createSavedButtonTemplate = () => `
  <button class="food-button-like" id="saveButton">
    <i class="fa-solid fa-bookmark icon"></i> Unsave Recipe
  </button>
`;

export {
  createFoodItemTemplate,
  createFoodDetailTemplate,
  createSimilarFoodItemTemplate,
  createVideoFoodItemTemplate,
  createBookmarkItemTemplate,
  createSaveButtonTemplate,
  createSavedButtonTemplate,
};
