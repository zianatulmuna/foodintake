/* eslint-disable indent */
/* eslint-disable radix */

const createFoodItemTemplate = (food) => `
  <div class="food-item">
    <img class="lazyload" data-src="${food.image}" class="food-item-image" alt="${food.title}">   
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


    <p class="food-type">Food Type : ${food.dishTypes
      .map((name) => `<p class="food-type">${name} </p>`).join('')
      }
    </p>
    <div id="saveButtonContainer" class="food-action"></div>
  </div>

  <div class="food-fact">
    <h4>Food Facts</h4>
    <table>
      <tr>
        <td class="food-fact-value">${food.healthScore}</td>
        <td class="food-fact-value">${food.weightWatcherSmartPoints}</td>
        <td class="food-fact-value">${food.readyInMinutes}</td>
        <td class="food-fact-value">${food.servings}</td>
      </tr>
      <tr>
        <td class="food-fact-title"><i class="fas fa-star-half-alt icon"></i> Health Score</td>
        <td class="food-fact-title"><i class="fas fa-weight icon"></i> Weight Watcher Points</td>
        <td class="food-fact-title"><i class="fas fa-stopwatch icon"></i> Ready In Minutes</td>
        <td class="food-fact-title"><i class="fas fa-utensils icon"></i> Servings</td>
      </tr>
    </table>
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

  <div class="food-ingredient">
    <h4>Ingredients</h4>
    <p>${food.extendedIngredients
      .map(
        (ingredient) => `
          <p>${ingredient.original}</p>
        `,
      ).join('')}
    </p>
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
    <p>${food.summary.split('.')[0]}. ${food.summary.split('.')[1]}. ${food.summary.split('.')[2]}. ${food.summary.split('.')[3]}. ${food.summary.split('.')[5]}.</p>
  </div>
  
`;

const createBookmarkItemTemplate = (food) => `
<div class="food-item">
    <img class="lazyload" data-src="${food.image}" class="food-item-image" alt="${food.title}">   
    <div class="bookmark-item-info">
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
  createBookmarkItemTemplate,
  createSaveButtonTemplate,
  createSavedButtonTemplate,
};
