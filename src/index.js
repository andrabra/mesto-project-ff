import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, deleteCard, likeCard } from "./components/card.js";
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
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");

//todo: форма редактирования профиля
const editProfileForm = document.forms["edit-profile"];

//todo: кнопки закрытия попапов
export const popups = document.querySelectorAll(".popup");

//todo: Данные из профиля
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//todo: Находим поля формы в DOM
export const nameInput = editProfileForm.querySelector(
  ".popup__input_type_name"
);
export const jobInput = editProfileForm.querySelector(
  ".popup__input_type_description"
);

//todo: Находим форму добавления новой карточки в DOM
export const newPlaceForm = document.forms["new-place"];

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

function openCard(card) {
  popupImage.src = card.querySelector(".card__image").src;
  popupImage.alt = card.querySelector(".card__image").alt;
  popupCaption.textContent = card.querySelector(".card__title").textContent;
  openModal(popupTypeImage);
}

//todo: Закрытие попапов
export function handleEscape(evt) {
  if (evt.key === "Escape") {
    popups.forEach((popup) => {
      closeModal(popup);
    });
  }
}
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
export function handleProfileEditSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  closeModal(popups);
}

//todo: Функция создания новой карточки
export function handleNewCardSubmit(evt) {
  evt.preventDefault();

  const name = placeNameInput.value;
  const link = linkInput.value;

  cardContainer.prepend(createCard(link, name, deleteCard, likeCard, openCard));
  newPlaceForm.reset();
  closeModal(popups);
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
    cardContainer.append(
      createCard(item.link, item.name, deleteCard, likeCard, openCard)
    );
  });
}

displayCards(initialCards);
