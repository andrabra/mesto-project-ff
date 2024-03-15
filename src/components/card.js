import {
  cardTemplate,
  nameInput,
  jobInput,
  popups,
  placeNameInput,
  linkInput,
  cardContainer,
  newPlaceForm,
  popupTypeImage,
} from "../index.js";
import { openModal, closeModal } from "../components/modal.js";

//todo: Функция создания карточки
export function createCard(imgSrc, title, deleteFnc, likeCard, openCard) {
  const cardTemplateClone = cardTemplate.querySelector(".card").cloneNode(true); //выбираю карточку из template и клонирую её

  const deleteButton = cardTemplateClone.querySelector(".card__delete-button"); //выбираю кнопку из копии карточки
  const cardLike = cardTemplateClone.querySelector(".card__like-button"); //выбираю кнопку из копии карточки
  const cardImage = cardTemplateClone.querySelector(".card__image");

  deleteButton.addEventListener("click", () => deleteFnc(cardTemplateClone));
  cardLike.addEventListener("click", () => likeCard(cardTemplateClone));

  cardImage.addEventListener("click", () => {
    openCard(cardTemplateClone);
  });
  const cardImg = cardTemplateClone.querySelector(".card__image"); //выбираю из клона тег изображения
  const cardTitle = cardTemplateClone.querySelector(".card__title"); //выбираю из клона тег тайтла

  cardImg.src = imgSrc; //заполняю из аргумента
  cardImg.alt = title; //заполняю alt
  cardTitle.textContent = title; //заполняю из аргумента

  return cardTemplateClone; //возвращаю заполненную карточку
}

//todo: Функция удаления карточки
export function deleteCard(card) {
  card.remove();
}
//todo: Функция лайка карточки
export function likeCard(card) {
  card
    .querySelector(".card__like-button")
    .classList.toggle("card__like-button_is-active");
}

//todo: Функция открытия попапа с карточкой
export function openCard(card) {
  const popupImage = popupTypeImage.querySelector(".popup__image");
  const popupCaption = popupTypeImage.querySelector(".popup__caption");
  popupImage.src = card.querySelector(".card__image").src;
  popupCaption.textContent = card.querySelector(".card__title").textContent;
  openModal(popupTypeImage);
}

//todo: Функция отправки новых данных профиля
export function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  closeModal(popups);
}
//todo: Функция создания новой карточки
export function handleNewCardSubmit(evt) {
  evt.preventDefault();

  let name = placeNameInput.value;
  let link = linkInput.value;

  cardContainer.prepend(createCard(link, name, deleteCard, likeCard, openCard));
  newPlaceForm.reset();
  closeModal(popups);
}
