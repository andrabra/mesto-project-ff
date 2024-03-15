import "../pages/index.css";
import { initialCards } from "../src/cards.js";
import {
  createCard,
  deleteCard,
  likeCard,
  openCard,
  handleProfileEditSubmit,
  handleNewCardSubmit
} from "../src/components/card.js";
import {
  openModal,
  closeModal,
  onOpenProfileModal,
} from "../src/components/modal.js";

//todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content; //записываю содержимое блока template
//todo: DOM узлы
export const cardContainer = document.querySelector(".places__list"); //записываю место куда буду вставлять карточки

//todo: кнопки открытия попапов
const editBtn = document.querySelector(".profile__edit-button");
const addBtn = document.querySelector(".profile__add-button");
//todo: попапы
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
export const popupTypeImage = document.querySelector(".popup_type_image");
//todo: форма редактирования профиля
const profileForm = popupTypeEdit.querySelector(".popup__form");
//todo: кнопки закрытия попапов
export const popups = document.querySelectorAll(".popup");
const popupCloseBtns = document.querySelectorAll(".popup__close");

//todo: Открытие попапов
editBtn.addEventListener("click", () => {
  onOpenProfileModal(profileForm);
  openModal(popupTypeEdit);
});

addBtn.addEventListener("click", () => {
  openModal(popupTypeNewCard);
});

//todo: Закрытие попапов
document.addEventListener("keydown", (event) => {
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
  popup.addEventListener("mousedown", (evt) => {
    if (evt.currentTarget === evt.target) {
      closeModal(popups);
    }
  });
});

//todo: Находим форму в DOM
const formElement = popupTypeEdit.querySelector(".popup__form");
//todo: Находим поля формы в DOM
export const nameInput = formElement.querySelector(".popup__input_type_name");
export const jobInput = formElement.querySelector(
  ".popup__input_type_description"
);
//todo:
formElement.addEventListener("submit", handleProfileEditSubmit);

//todo: Находим форму в DOM
export const newPlaceForm = popupTypeNewCard.querySelector(".popup__form");
//todo: Находим поля формы в DOM
export const placeNameInput = newPlaceForm.querySelector(
  ".popup__input_type_card-name"
);
export const linkInput = newPlaceForm.querySelector(".popup__input_type_url");



popupTypeNewCard
  .querySelector(".popup__form")
  .addEventListener("submit", handleNewCardSubmit);

//todo: Вывести карточки на страницу
function displayCard(arrCards) {
  arrCards.forEach(function (item) {
    cardContainer.append(
      createCard(item.link, item.name, deleteCard, likeCard, openCard)
    );
  });
}

displayCard(initialCards);
