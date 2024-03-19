//todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content;

//todo: Функция создания карточки
export function createCard(
  { link, name },
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
    openCard(link, name);
  });

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  return cardTemplateClone;
}

//todo: Функция удаления карточки
export function deleteCard(card) {
  card.remove();
}
//todo: Функция лайка карточки
export function likeButton(button) {
  button.classList.toggle("card__like-button_is-active");
}
