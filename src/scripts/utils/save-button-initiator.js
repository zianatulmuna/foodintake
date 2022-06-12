import FavoriteFoodIdb from '../data/bookmark-food-idb';
import { createSaveButtonTemplate, createSavedButtonTemplate } from '../views/templates/template-creator';

const SaveButtonInitiator = {
  async init({ saveButtonContainer, food }) {
    this._saveButtonContainer = saveButtonContainer;
    this._food = food;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._food;

    if (await this._isFoodExist(id)) {
      this._renderSaved();
    } else {
      this._renderSave();
    }
  },

  async _isFoodExist(id) {
    const food = await FavoriteFoodIdb.getFood(id);
    return !!food;
  },

  _renderSave() {
    this._saveButtonContainer.innerHTML = createSaveButtonTemplate();

    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await FavoriteFoodIdb.putFood(this._food);
      this._renderButton();
    });
  },

  _renderSaved() {
    this._saveButtonContainer.innerHTML = createSavedButtonTemplate();

    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await FavoriteFoodIdb.deleteFood(this._food.id);
      this._renderButton();
    });
  },
};

export default SaveButtonInitiator;
