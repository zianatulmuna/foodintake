class SearchBar extends HTMLElement {
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
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
       <style>
    .search__item {
        margin: 0 auto;
        padding: 50px 10px;
        width: 90%;
        display: flex;
        align-items: center;
    }

    .search__item input {
        width: 100%;
        align-items: center;
        padding: 11px 15px;
        border: none;
        border-top-left-radius: 18px;
        border-bottom-left-radius: 18px;
        border: 2px solid #519259;
        max-height: 56px;
    }

    .search__item input::placeholder {
      font-family: 'Poppins', sans-serif;
      font-size: 9pt;
    }

    input[type=text]:focus {
      outline: 3px solid #f59670a7;
      outline-offset: 1px;
    }

    .search__item button {
        padding: 11.5px 20px;
        background-color: #519259;
        border: none;
        color: white;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        cursor: pointer;
        max-height: 60px;
        border-top-right-radius: 18px;
        border-bottom-right-radius: 18px;
    }

    .search__item button svg {
      height: 11pt;
    }

    .search__item button:hover {
        background-color: #519259;
    }

    @media screen and (min-width: 550px) {
      .search__item {
        margin: auto 0;
        padding: 50px 10px;
        min-width: 90%;
      }

      .search__item input {
        padding: 20px 30px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
      }

      .search__item button {
        padding: 21px 30px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
      }

      .search__item button svg {
        height: 14pt;
      }

      .search__item input::placeholder {
        font: 12pt;
      }
    }

   

    @media screen and (min-width: 650px) {
      .search__item {
        margin: 0 auto;
        padding: 50px;
        min-width: 80%;
      }
    }

    @media screen and (min-width: 850px) {
      .search__item {
        padding: 50px;
        width: 60%;
      }
    }

    @media screen and (min-width: 1200px) {
      .search__item {
        margin: 0 auto;
        padding: 50px;
      }

      .search__item button {
        padding: 20px 50px;
      }

    }
       </style>
        <div class="search__continer">
        <form class="search__item">
          <input id="searchElement" type="text" placeholder="Search food recipe and information, e.g Pasta">
          <button id="searchButtonElement" type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#fff" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51
          99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62
          56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128
          128S79.1 278.6 79.1 208z"/></svg>
          </button>
        </form>
      </div>
       `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
