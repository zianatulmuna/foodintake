class FilterMenu extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    const filterValue = {
      minCal: this.shadowDOM.querySelector('#min-Nutrient').value,
      maxCal: this.shadowDOM.querySelector('#max-Nutrient').value,
      minCarbs: this.shadowDOM.querySelector('#min-Carbs').value,
      maxCarbs: this.shadowDOM.querySelector('#max-Carbs').value,
      minProtein: this.shadowDOM.querySelector('#min-Protein').value,
      maxProtein: this.shadowDOM.querySelector('#max-Protein').value,
      minFat: this.shadowDOM.querySelector('#min-Fat').value,
      maxFat: this.shadowDOM.querySelector('#max-Fat').value,
      dietCheck: this.shadowDOM.querySelectorAll('[name~=diet]'),
      allergieCheck: this.shadowDOM.querySelectorAll('[name~=allergie]'),
      closeButton: this.shadowDOM.querySelector('.close'),
    };
    return filterValue;
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
            .filter-box {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                position: sticky; 
                z-index: 1; 
                top: 0; 
                left: 30;
                overflow-x: hidden; 
                width: 240px;
                padding: 30px;
                overflow: hidden; 
                background-color: #EFEAD8;
                border: 1px solid #d3d3d3;
                margin: auto auto 30px 30px;
                border-radius: 20px;
            }
            
            .filter-box h1 {
                font-size: 18px;
                line-height: 0;
            }
            
            .filter-list {
                padding: 10px 24px;
                border-radius: 16px;
                overflow: auto;
                width: 100%;           
            }
            
            .filter-list h2 {
                font-size: 18px;
            }
            
            .filter-list h3 {
                font-size: 16px;
                line-height: 0;
            }
            
            .filter-list .nutrient-filter div {
                padding-bottom: 18px;
                margin-bottom: 26px;
                border-bottom: #d5d5d5 solid;
            }
            
            .filter-list .nutrient-filter div input {
                padding: 6px 10px;
                border-radius: 5px;
                width: 50%;
                display: inline;
                max-width: 78px;
                margin-top: 5px;
                margin-right: 8px;
                border: none;
            }
            
            .checkbox {
                display: inline-flex;
                align-items: center;
                cursor: pointer;
            }
            
            .diet-filter {
                border-bottom: #d5d5d5 solid;
                padding-bottom: 16px;
            }
            
            .diet-filter div {
                display: flex;
                align-items: center;
            }
            
            .allergies-filter div {
                display: flex;
                align-items: center;
            }
            
            div input[type="checkbox"] {
                appearance: none;
                -webkit-appearance: none;
                min-width: 18px;
                min-height: 18px;
                background-color: #9FC088;
                border-radius: 4px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                outline: none;
                margin-right: 16px;
            }
            
            div label {
                color: #4c4c4c;
                font-size: 16px;
                font-weight: 400;
                cursor: pointer;
            }
            
            div input[type="checkbox"]:after {
                content: "\\2714";
                color: white;
                font-weight: 800;
                font-size: 12px;
                display: none;
            }
            
            div input[type="checkbox"]:hover {
                background-color: #a5a5a5;
            }
            
            div input[type="checkbox"]:checked {
                background-color: #5bcd3e;
            }
            
            div input[type="checkbox"]:checked:after {
                display: block;
            }

            .button-filter {
                border: none;
                margin-top: 20px;
                padding: 10px 30px;
                background-color: #519259;
                cursor: pointer;
                color: white;
                border-radius: 20px;
                align-items: left;
            }

            .button-filter:hover {
                opacity: 80%;
            }

            .close {
                color: #aaaaaa;
                text-align: right;
                font-size: 28px;
                font-weight: bold;
                width: 100%;
                line-height: 0;
                display: none;
            }

            .close:hover, .close:focus {
                color: #000;
                text-decoration: none;
                cursor: pointer;
              }

            @media screen and (max-width: 550px) {
                .filter-box {
                    background-color: #fff;
                }

                .filter-list .nutrient-filter div input {
                    border: 1px solid #d3d3d3;
                }
            }

            @media screen and (max-width: 650px) {
                .filter-box {
                    margin: 0 auto;
                }
                .close {
                    display: block;
                }
            }

            @media only screen and (min-width: 650px) and (max-width: 1200px) {
                .filter-box {
                    margin: 0 auto;
                    width: 80%;
                    top: 0;
                }

                .filter-list {
                    display: flex;
                    justify-content: center;
                }
                
                .nutrient-filter, .diet-filter, .allergies-filter {
                    width: 100%;
                    margin: 10px;
                }

                .filter-list .nutrient-filter div input {
                    max-width: 70px;
                    margin-bottom: 0;
                }

                .diet-filter {
                    border: none;
                }

                .button-filter {
                    margin-top: 0;
                }

                .filter-list .nutrient-filter div {
                    padding-bottom: 10px;
                    margin-bottom: 0;
                }

                .close {
                    display: block;
                }               
            }
            </style>

            <div class="filter-box">
                <span id="closeButton" class="close">&times;</span>
                <h1>Filter Search</h1>
                <div class="filter-list">
                    <div class="nutrient-filter">
                        <h2>Nutrients</h2>
                        
                        <div>
                            <h3>Calories</h3>
                            <input type="text" id="min-Nutrient" placeholder="Min">
                            <input type="text" id="max-Nutrient" placeholder="Max">
                        </div>
                        <div>
                            <h3>Carbs (grams)</h3>
                            <input type="text" id="min-Carbs" placeholder="Min">
                            <input type="text" id="max-Carbs" placeholder="Max">
                        </div>
                        <div>
                            <h3>Protein (grams)</h3>
                            <input type="text" id="min-Protein" placeholder="Min">
                            <input type="text" id="max-Protein" placeholder="Max">
                        </div>
                        <div>
                            <h3>Fat (grams)</h3>
                            <input type="text" id="min-Fat" placeholder="Min">
                            <input type="text" id="max-Fat" placeholder="Max">
                        </div>
                        <div>
                            <h3>Cholesterol (grams)</h3>
                            <input type="text" id="min-cholesterol" placeholder="Min">
                            <input type="text" id="max-cholesterol" placeholder="Max">
                        </div>
                    </div>
                    <div class="diet-filter">
                        <h2>Diet</h2>
                        <div class="vegetarian-filter">
                            <input type="checkbox" name="diet" value="vegetarian" id="chk-vegetarian">
                            <label for="chk-vegetarian">Vegetarian</label>
                        </div>
                        <div class="vegan-filter">
                            <input type="checkbox" name="diet" value="vegan" id="chk-vegan">
                            <label for="chk-vegan">Vegan</label>
                        </div>
                        <div class="pascetarian-filter">
                            <input type="checkbox" name="diet" value="pascetarian" id="chk-pascetarian">
                            <label for="chk-pascetarian">Pascetarian</label>
                        </div>
                        <div class="gluten-filter">
                            <input type="checkbox" name="diet" value="gluten" id="chk-gluten">
                            <label for="chk-gluten">Gluten Free</label>
                        </div>
                        <div class="ketogenic-filter">
                            <input type="checkbox" name="diet" value="ketogenic" id="chk-ketogenic">
                            <label for="chk-ketogenic">Gluten Free</label>
                        </div>
                        <div class="paleo-filter">
                            <input type="checkbox" name="diet" value="paleo" id="chk-paleo">
                            <label for="chk-paleo">Paleo</label>
                        </div>
                        <div class="primal-filter">
                            <input type="checkbox" name="diet" value="primal" id="chk-primal">
                            <label for="chk-primal">Primal</label>
                        </div>
                        <div class="low-fodmap-filter">
                            <input type="checkbox" name="diet" value="low-fodmap" id="chk-low-fodmap">
                            <label for="chk-low-fodmap">Low Fodmap</label>
                        </div>
                        <div class="whole-filter">
                            <input type="checkbox" name="diet" value="whole" id="chk-whole">
                            <label for="chk-whole">Whole 30</label>
                        </div>
                    </div>
                    <div class="allergies-filter">
                        <h2>Allergies</h2>
                        <div class="peanut-filter">
                            <input type="checkbox" name="allergie" value="peanut" id="chk-peanut">
                            <label for="chk-peanut">Peanut</label>
                        </div>
                        <div class="seafood-filter">
                            <input type="checkbox" name="allergie" value="seafood" id="chk-peanut">
                            <label for="chk-seafood">Seafood</label>
                        </div>
                        <div class="dairy-filter">
                            <input type="checkbox" name="allergie" value="dairy" id="chk-dairy">
                            <label for="chk-dairy">Dairy</label>
                        </div>
                        <div class="egg-filter">
                            <input type="checkbox" name="allergie" value="egg" id="chk-egg">
                            <label for="chk-egg">Egg</label>
                        </div>
                        <div class="gluten-filter">
                            <input type="checkbox" name="allergie" value="gluten" id="chk-gluten">
                            <label for="chk-gluten">Gluten</label>
                        </div>
                        <div class="grain-filter">
                            <input type="checkbox" name="allergie" value="grain" id="chk-grain">
                            <label for="chk-grain">Grain</label>
                        </div>
                        <div class="sesame-filter">
                            <input type="checkbox" name="allergie" value="sesame" id="chk-sesame">
                            <label for="chk-sesame">Sesame</label>
                        </div>
                        <div class="shellfish-filter">
                            <input type="checkbox" name="allergie" value="shellfish" id="chk-shellfish">
                            <label for="chk-shellfish">Shellfish</label>
                        </div>
                        <div class="soy-filter">
                            <input type="checkbox" name="allergie" value="soy" id="chk-soy">
                            <label for="chk-soy">Soy</label>
                        </div>
                        <div class="sulfite-filter">
                            <input type="checkbox" name="allergie" value="sulfite" id="chk-sulfite">
                            <label for="chk-sulfite">Sulfite</label>
                        </div>
                        <div class="tree-nut-filter">
                            <input type="checkbox" name="allergie" value="tree-nut" id="chk-tree-nut">
                            <label for="chk-tree-nut">Tree Nut</label>
                        </div>
                        <div class="wheat-filter">
                            <input type="checkbox" name="allergie" value="wheat-nut" id="chk-wheat">
                            <label for="chk-wheat">Wheat</label>
                        </div>
                    </div>
                </div>
                <button id="filterButton" class="button-filter" type="submit">Search by Filter</button>
            </div>
            `;
    this.shadowDOM.querySelector('#filterButton').addEventListener('click', this._clickEvent);
  }
}

customElements.define('filter-menu', FilterMenu);
