import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, cardCallbacks } from "./components/card.js";
import {
  openModal,
  closeModal,
  popups,
  closeAllModals,
} from "./components/modal.js";

//todo: Список со всеми карточками
const cardContainer = document.querySelector(".places__list");

//todo: кнопки открытия попапов
const editBtn = document.querySelector(".profile__edit-button");
const addBtn = document.querySelector(".profile__add-button");

//todo: попапы
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");

//todo: форма редактирования профиля
const editProfileForm = document.forms["edit-profile"];

//todo: Данные из профиля
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//todo: Находим поля формы в DOM
const nameInput = editProfileForm.querySelector(".popup__input_type_name");
const jobInput = editProfileForm.querySelector(
  ".popup__input_type_description"
);

//todo: Находим форму добавления новой карточки в DOM
const newPlaceForm = document.forms["new-place"];

//todo: Находим поля формы в DOM
const placeNameInput = newPlaceForm.querySelector(
  ".popup__input_type_card-name"
);
const linkInput = newPlaceForm.querySelector(".popup__input_type_url");

//todo: Открытие попапов
editBtn.addEventListener("click", () => {
  onOpenProfileModal(editProfileForm);
  openModal(popupTypeEdit);
});

addBtn.addEventListener("click", () => {
  openModal(popupTypeNewCard);
});

//todo: Закрытие попапов

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
      closeModal(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closeModal(popup);
    }
  });
});

//todo: Функция отправки новых данных профиля
function handleProfileEditSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  closeAllModals();
}

//todo: Функция создания новой карточки
function handleNewCardSubmit(evt) {
  evt.preventDefault();

  const newCard = {
    link: linkInput.value,
    name: placeNameInput.value,
  };
  cardContainer.prepend(createCard(newCard, cardCallbacks));
  newPlaceForm.reset();

  closeAllModals();
}

//todo: Добавление обработчиков на формы
editProfileForm.addEventListener("submit", handleProfileEditSubmit);
newPlaceForm.addEventListener("submit", handleNewCardSubmit);

function onOpenProfileModal(form) {
  form.elements.name.value = profileTitle.textContent;
  form.elements.description.value = profileDescription.textContent;
}

//todo: Вывести карточки на страницу
function displayCards(arrCards) {
  arrCards.forEach(function (item) {
    cardContainer.append(createCard(item, cardCallbacks));
  });
}

displayCards(initialCards);
