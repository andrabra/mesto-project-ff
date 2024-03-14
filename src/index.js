import "../pages/index.css";
import { initialCards } from "../src/cards.js";
import { createCard, deleteCard, likeCard, openCard } from "../src/components/card.js";
import {
  openModal,
  closeModal,
  onOpenProfileModal,
} from "../src/components/modal.js";

//todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content; //записываю содержимое блока template
//todo: DOM узлы
const cardContainer = document.querySelector(".places__list"); //записываю место куда буду вставлять карточки

//todo: кнопки открытия попапов
export const editBtn = document.querySelector(".profile__edit-button");
export const addBtn = document.querySelector(".profile__add-button");
export const imageBtns = document.querySelectorAll(".card__image");
//todo: попапы
export const popupTypeEdit = document.querySelector(".popup_type_edit");
export const popupTypeNewCard = document.querySelector(".popup_type_new-card");
export const popupTypeImage = document.querySelector(".popup_type_image");
//todo: форма редактирования профиля
export const profileForm = popupTypeEdit.querySelector(".popup__form");
//todo: кнопки закрытия попапов
export const popups = document.querySelectorAll(".popup");
export const popupCloseBtns = document.querySelectorAll(".popup__close");

//* Открытие попапов
editBtn.addEventListener("click", () => {
  onOpenProfileModal(profileForm);
  openModal(popupTypeEdit);
});

addBtn.addEventListener("click", () => {
  openModal(popupTypeNewCard);
});
//* Открытие попапов

//* Закрытие попапов
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal(popups);
  }
});

popupCloseBtns.forEach((popup) => {
  popup.addEventListener("mousedown", () => {
    closeModal(popups);
  });
});

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closeModal(popups);
    }
  });
});
//* Закрытие попапов

// Находим форму в DOM
const formElement = popupTypeEdit.querySelector(".popup__form");
// Находим поля формы в DOM
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  let profileTitle = document.querySelector(".profile__title");
  let profileDescription = document.querySelector(".profile__description");
  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  closeModal(popups);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);

//todo: Вывести карточки на страницу
function displayCard(arrCards) {
  arrCards.forEach(function (item) {
    cardContainer.append(
      createCard(item.link, item.name, deleteCard, likeCard, openCard)
    );
  });
}

displayCard(initialCards);
