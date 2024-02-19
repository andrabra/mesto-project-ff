// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content; //находим шаблон карточки

// @todo: DOM узлы
const placesList = document.querySelector(".places__list"); //находим узел куда добавлять карточки

// @todo: Функция создания карточки
function addCard(link, name) {
  const cardItemTemplate = cardTemplate.querySelector(".card").cloneNode(true); //клонируем шаблон карточки
  const deleteButton = cardItemTemplate.querySelector(".card__delete-button"); //находим кнопку удаления карточки

  cardItemTemplate.querySelector(".card__image").src = link; //заполняем атрибут
  cardItemTemplate.querySelector(".card__title").textContent = name; //заполняем атрибут

  placesList.append(cardItemTemplate); //добавляем заполненный шаблон к списку

  deleteButton.addEventListener("click", deleteCard); //добавляем слушатель клика на кнопку удаления
}
// @todo: Функция удаления карточки
function deleteCard(evt) {
  const trash = evt.target.closest(".places__item"); //находим ближайшего родителя, в котором есть кнопка "удалить"
  trash.remove();
}

// @todo: Вывести карточки на страницу
function addContent() {
  initialCards.forEach(function (item) {
    addCard(item.link, item.name);
  });
}

addContent();
