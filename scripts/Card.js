export default class Card {
  constructor(cardData, templateSelector) {}

  _getTemplate() {}

  _setEventListeners() {}

  _remove() {}

  _like() {}

  _hadleImageClick() {}

  generate() {
    const template = this._getTemplate();
  }
}

const card = new Card();
const carElement = card.generate();
