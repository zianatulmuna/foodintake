/* eslint-disable indent */
/* eslint-disable radix */

const createFoodItemTemplate = (food) => `
<div class="col">
    <div class="card h-100 w-300">
      <img src="${food.image}" class="card-img-top food-item-image" alt="${food.title}">
      <div class="card-body">      
      <div class="list-group-heading">
        <ul class="list-group list-group-horizontal list-group-icon">
          <li class="list-group-item list-group-score line"><i class="fas fa-star-half-alt"></i></li>
          <li class="list-group-item line"><i class="fab fa-nutritionix"></i></li>
          <li class="list-group-item"><i class="fas fa-utensils"></i></li>
        </ul>
        <ul class="list-group list-group-horizontal list-group-title">
          <li class="list-group-item list-group-score line">Score</li>
          <li class="list-group-item line">Calories</li>
          <li class="list-group-item">Serving</li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item line">${food.healthScore}</li>
          <li class="list-group-item line">${food.nutrition.nutrients
            .filter((nutrient) => nutrient.name === 'Calories')
            .map((nutrient) => `
                <p>${parseInt(nutrient.amount)}</p>
            `).join('')}
          </li>
          <li class="list-group-item">${food.servings}</li>
        </ul>
        </div>
        <h5 class="card-title"><a href="${`/#/detail/${food.id}`}">${food.title}</a></h5>
        <p class="card-text food-summary">${food.summary}</p>
      </div>   
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
    <div class="food-action">
      <button class="food-button-like"><i class="far fa-bookmark"></i> Save Recipe</button>
    </div>
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
  
`;

export {
  createFoodItemTemplate,
  createFoodDetailTemplate,
};
