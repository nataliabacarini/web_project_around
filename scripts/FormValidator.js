export default class FormValidator {
  constructor(config) {
    this._formElement = config.formElement;
    this._inputElement = config.inputElement;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorMessage = config.errorMessage;
    this._errorElement = config.errorElement;
  }

  _creatConst() {
    this._formElement = document.querySelector(this._formElement);
    this._submitButtonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputElement)
    );
  }

  _showError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  }

  _allInputValid = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._allInputValid(this._inputList)) {
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
      this._submitButtonElement.disabled = true;
    } else {
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
      this._submitButtonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputElement)
    );
    this._submitButtonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._creatConst();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
    });

    this._toggleButtonState();
    this._setEventListeners();
  }
}
