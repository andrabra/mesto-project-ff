import { cardTemplate } from "../index.js";

// @todo: Функция создания карточки
export function createCard(imgSrc, title, deleteFnc) {
  const cardTemplateClone = cardTemplate.querySelector(".card").cloneNode(true); //выбираю карточку из template и клонирую её

  const deleteButton = cardTemplateClone.querySelector(".card__delete-button"); //выбираю кнопку из копии карточки

  deleteButton.addEventListener("click", () => deleteFnc(cardTemplateClone));

  const cardImg = cardTemplateClone.querySelector(".card__image"); //выбираю из клона тег изображения
  const cardTitle = cardTemplateClone.querySelector(".card__title"); //выбираю из клона тег тайтла

  cardImg.src = imgSrc; //заполняю из аргумента
  cardImg.alt = title; //заполняю alt
  cardTitle.textContent = title; //заполняю из аргумента

  return cardTemplateClone; //возвращаю заполненную карточку
}

// @todo: Функция удаления карточки
export function deleteCard(card) {
  card.remove();
}
