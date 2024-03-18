//todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content;

//todo: Список со всеми карточками
export const cardContainer = document.querySelector(".places__list");

//todo: Функция создания карточки
export function createCard(imgSrc, title, deleteFnc, likeCard, openCard) {
  const cardTemplateClone = cardTemplate.querySelector(".card").cloneNode(true); //выбираю карточку из template и клонирую её

  const deleteButton = cardTemplateClone.querySelector(".card__delete-button"); //выбираю кнопку из копии карточки
  const cardLike = cardTemplateClone.querySelector(".card__like-button"); //выбираю кнопку из копии карточки
  const cardImage = cardTemplateClone.querySelector(".card__image"); //выбираю из клона тег изображения
  const cardTitle = cardTemplateClone.querySelector(".card__title"); //выбираю из клона тег тайтла

  deleteButton.addEventListener("click", () => deleteFnc(cardTemplateClone));
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
export function deleteCard(card) {
  card.remove();
}
//todo: Функция лайка карточки
export function likeButton(button) {
  button.classList.toggle("card__like-button_is-active");
}
