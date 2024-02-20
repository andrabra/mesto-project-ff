// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(imgSrc, title, deleteFnc) {
  const cardTemplateClone = cardTemplate.querySelector(".card").cloneNode(true);

  const deleteButton = cardTemplateClone.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteFnc);

  ////Заполнение карточек
  const cardImg = cardTemplateClone.querySelector(".card__image");
  const cardTitle = cardTemplateClone.querySelector(".card__title");

  cardImg.src = imgSrc;
  cardTitle.textContent = title;
  ////
  return cardTemplateClone;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
  console.log(evt.currentTarget);
  evt.target.closest(".places__item").remove(); //находим ближайшего родителя, в котором есть кнопка "удалить"
}
// @todo: Вывести карточки на страницу
function displayCard(arrCards) {
  // @todo переделать реализацию через foreach

  //реализация через for
  for (let i = 0; i <= arrCards.length - 1; i++) {
    cardContainer.append(
      createCard(arrCards[i].link, arrCards[i].name, deleteCard)
    );
  }
}

displayCard(initialCards);
