import CONFIG from '../../globals/config';

const createFoodItemTemplate = (food) => `
  <div class="food-item">
    <img src="${food.image}" class="food-item-image" alt="${food.title}">   
    <div class="food-item-main">
      <div class="food-item-info">
        <ul>
            <li><i class="fa-solid fa-star icon"></i>${food.healthScore}%</li>
            <li class="food-item-info-text">Healthy</li>
        </ul>
        <ul class="food-item-info-mid">
          <li><i class="fa-brands fa-nutritionix icon"></i> 
              ${food.nutrition.nutrients
    .filter((nutrient) => nutrient.name === 'Calories')
    .map((nutrient) => `
                        ${parseInt(nutrient.amount)}
                    `).join('')}</li>
          <li class="food-item-info-text">Calories</li> 
        </ul>
        <ul>
          <li><i class="fas fa-utensils icon"></i> ${food.servings}</li>
          <li class="food-item-info-text">Servings</li>
        </ul>
      </div> 
      <h5 class="food-item-title"><a href="${`/#/detail/${food.id}`}">${food.title}</a></h5>
      <p class="food-item-summary">${food.summary}</p>
    </div>
  </div>
`;

const createFoodDetailTemplate = (food) => `
  <h2 class="food-title">${food.title}</h2>
  <img class="food-image" src="${food.image}" alt="${food.title}">

  <div calss="food-information">    
    <div id="foodSource" class="food-source-name"></div>
    <p class="food-source">From <a href="${food.sourceUrl}">${food.sourceUrl.split('/')[2]}</a></p>

    <div class="food-type">
      ${food.dishTypes.map((name) => `<li class="food-type-list">#${name}</li>`).join('')}
    </div>
    <div id="saveButtonContainer" class="food-action"></div>
  </div>

  <div class="food-fact">
    <h4>Food Facts</h4>
    <div class="food-fact-item">
    <div>
      <li class="food-fact-value">${food.healthScore}%</li>
      <li class="food-fact-title"><i class="fa-solid fa-star icon"></i> Health Score</li>
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
      <img class="lazyload" data-src="${CONFIG.BASE_URL}recipes/${food.id}/nutritionLabel.png?${CONFIG.API_KEY}" alt="Nutrition Label">
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
    <img class="food-ingredient-image lazyload" data-src="${CONFIG.BASE_URL}recipes/${food.id}/ingredientWidget.png?${CONFIG.API_KEY}" alt="Ingredients">
     
    <h4>Equipments</h4>
    <img class="food-equipments lazyload" data-src="${CONFIG.BASE_URL}recipes/${food.id}/equipmentWidget.png?${CONFIG.API_KEY}" alt="Equipments">

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
  <div class="aside-food-item video-aside">
    <a class="video-food-item" href="https://www.youtube.com/watch?v=${video.youTubeId}" terget="_blank">
    <img class="video-food-item-thumbnail lazyload" data-src="${video.thumbnail}" alt="${food.shortTitle}">
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
    <div class="food-item-main">
    <div class="food-item-info">
      <ul class="food-item-info-first">
          <li><i class="fa-solid fa-star icon"></i> ${food.healthScore}%</li>
          <li class="food-item-info-text">Health</li>
      </ul>
      <ul>
        <li><i class="fas fa-utensils icon"></i> ${food.servings}</li>
        <li class="food-item-info-text">Servings</li>
      </ul>
    </div> 
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

const createSkeletonItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
    <div class="food-item">
    <img class="food-item-image skeleton lazyload" data-src="./etc/placeholder.png" alt="skeleton">  
      <div class="food-item-info">
        <ul class="skeleton">
          <li>80%</li>
          <li class="food-item-info-text">Health</li>
        </ul>
        <ul class="food-item-info-mid skeleton">
          <li>
            <i>80</i> 
          </li>
          <li class="food-item-info-text">Calories</li> 
        </ul>
        <ul class="skeleton">
          <li><i></i>80</li>
          <li class="food-item-info-text">Servings</li>
        </ul>
      </div>
        <h5 class="skeleton">Lorem ipsum dolor sit.</h5>
        <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur.</p>
    </div>
    `;
  }

  return template;
};

const createSkeletonDetailTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
    <h2 class="food-title skeleton">How to make a healthy food</h2>
    <img class="food-image lazyload" data-src="./etc/placeholder.png" alt="skeleton">
  
    <div class="food-information skeleton">    
      <p class="food-source skeleton">from www.pinkwhen.com</p>
      <p class="food-type skeleton">Food Type : lunch main course main dish dinner</p>
      <div id="saveButtonContainer" class="food-action skeleton"></div>
    </div>
  
    <div class="food-fact skeleton">
      <h4 class="skeleton"></h4>
      <table>
        <tr>
          <td class="food-fact-value skeleton">10</td>
          <td class="food-fact-value skeleton">10</td>
          <td class="food-fact-value skeleton">10</td>
          <td class="food-fact-value skeleton">10</td>
        </tr>
        <tr>
          <td class="food-fact-title"><i class="skeleton></i> Health Score</td>
          <td class="food-fact-title"><i class="skeleton"></i> Weight Watcher Points</td>
          <td class="food-fact-title"><i class="skeleton"></i> Ready In Minutes</td>
          <td class="food-fact-title"><i class="skeleton"></i> Servings</td>
        </tr>
      </table>
    </div>
    `;
  }
  return template;
};

const createSkeletonBookmarkTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
    <div class="food-item">
      <img class="food-item-image lazyload" data-src="./etc/placeholder.png" alt="skeleton">   
    <div class="bookmark-item-info">
      <ul class="bookmark-item-info-icon">
          <li class="skeleton">Logo</li>
          <li class="skeleton">Score</li>
          <li class="skeleton">24</li>           
      </ul>
      <ul>
        <li class="skeleton">Logo</li>
        <li class="skeleton">Serving</li>
        <li class="skeleton">24</li>
      </ul>
    </div>
    <div class="food-item-content">
    <h5 class="skeleton">Lorem ipsum dolor sit.</h5>
    <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur.</p>
    </div>
  </div>
    `;
  }

  return template;
};

export {
  createFoodItemTemplate,
  createFoodDetailTemplate,
  createSimilarFoodItemTemplate,
  createVideoFoodItemTemplate,
  createBookmarkItemTemplate,
  createSaveButtonTemplate,
  createSavedButtonTemplate,
  createSkeletonItemTemplate,
  createSkeletonBookmarkTemplate,
  createSkeletonDetailTemplate,
};
