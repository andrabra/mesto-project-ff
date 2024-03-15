import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import {
  createCard,
  deleteCard,
  likeCard,
  openCard,
  handleProfileEditSubmit,
  handleNewCardSubmit,
} from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";

//todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content; //записываю содержимое блока template
//todo: Список со всеми карточками
export const cardContainer = document.querySelector(".places__list"); //записываю место куда буду вставлять карточки

//todo: кнопки открытия попапов
const editBtn = document.querySelector(".profile__edit-button");
const addBtn = document.querySelector(".profile__add-button");

//todo: попапы
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
export const popupTypeImage = document.querySelector(".popup_type_image");

//todo: форма редактирования профиля
const editProfileForm = document.forms["edit-profile"];

//todo: кнопки закрытия попапов
export const popups = document.querySelectorAll(".popup");
const popupCloseBtns = document.querySelectorAll(".popup__close");

//todo: Текстовые поля формы
const profileTitle = document.querySelector(".profile__title").textContent;
const profileDescription = document.querySelector(
  ".profile__description"
).textContent;

//todo: Находим поля формы в DOM
export const nameInput = editProfileForm.querySelector(
  ".popup__input_type_name"
);
export const jobInput = editProfileForm.querySelector(
  ".popup__input_type_description"
);

//todo: Находим форму добавления новой карточки в DOM
export const newPlaceForm = document.forms["new-place"];
// new-place
//todo: Находим поля формы в DOM
export const placeNameInput = newPlaceForm.querySelector(
  ".popup__input_type_card-name"
);
export const linkInput = newPlaceForm.querySelector(".popup__input_type_url");

//todo: Открытие попапов
editBtn.addEventListener("click", () => {
  onOpenProfileModal(editProfileForm);
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

//todo: Добавление обработчиков на формы
editProfileForm.addEventListener("submit", handleProfileEditSubmit);
newPlaceForm.addEventListener("submit", handleNewCardSubmit);

function onOpenProfileModal(form) {
  form.elements.name.value = profileTitle;
  form.elements.description.value = profileDescription;
}

//todo: Вывести карточки на страницу
function displayCards(arrCards) {
  arrCards.forEach(function (item) {
    cardContainer.append(
      createCard(item.link, item.name, deleteCard, likeCard, openCard)
    );
  });
}

displayCards(initialCards);
