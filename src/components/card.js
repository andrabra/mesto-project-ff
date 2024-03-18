import { openModal } from "./modal";
//todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content;

//todo: Функция создания карточки
export function createCard(
  imgSrc,
  title,
  { deleteCard, likeButton, openCard }
) {
  const cardTemplateClone = cardTemplate.querySelector(".card").cloneNode(true); //выбираю карточку из template и клонирую её

  const deleteButton = cardTemplateClone.querySelector(".card__delete-button"); //выбираю кнопку из копии карточки
  const cardLike = cardTemplateClone.querySelector(".card__like-button"); //выбираю кнопку из копии карточки
  const cardImage = cardTemplateClone.querySelector(".card__image"); //выбираю из клона тег изображения
  const cardTitle = cardTemplateClone.querySelector(".card__title"); //выбираю из клона тег тайтла

  deleteButton.addEventListener("click", () => deleteCard(cardTemplateClone));
  cardLike.addEventListener("click", () => likeButton(cardLike));

  cardImage.addEventListener("click", () => {
    openCard(cardTemplateClone);
  });

  cardImage.src = imgSrc; //заполняю из аргумента
  cardImage.alt = title; //заполняю alt
  cardTitle.textContent = title; //заполняю из аргумента

  return cardTemplateClone; //возвращаю заполненную карточку
}

//todo: Функция удаления карточки
function deleteCard(card) {
  card.remove();
}
//todo: Функция лайка карточки
function likeButton(button) {
  button.classList.toggle("card__like-button_is-active");
}

function openCard(card) {
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const popupTypeImage = document.querySelector(".popup_type_image");
  const popupImage = popupTypeImage.querySelector(".popup__image");
  const popupCaption = popupTypeImage.querySelector(".popup__caption");

  popupImage.src = cardImage.src;
  popupImage.alt = cardImage.alt;
  popupCaption.textContent = cardTitle.textContent;
  openModal(popupTypeImage);
}

export const cardCallbacks = { deleteCard, likeButton, openCard };
