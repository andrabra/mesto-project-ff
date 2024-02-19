// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content; //находим шаблон карточки

// @todo: DOM узлы
const placesList = document.querySelector(".places__list"); //находим узел куда добавлять карточки

// @todo: Функция создания карточки
function addCard(link, name) {
  const cardItemTemplate = cardTemplate.querySelector(".card").cloneNode(true); //клонируем шаблон карточки
  const deleteButton = cardItemTemplate.querySelector(".card__delete-button"); //находим кнопку удаления карточки
  const cardLink = cardItemTemplate.querySelector(".card__image");//записываем узел изображения в переменную
  const cardImg = cardItemTemplate.querySelector(".card__title");//записываем узел подписи в переменную

  cardLink.src = link; //заполняем атрибут изображения
  cardImg.textContent = name; //заполняем текстовое содержимое 

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
    addCard(item.link, item.name);//обходим весь массив объектов в cards.js, каждый объект передаем в функцию добавления карточек на страницу
  });
}

addContent();//вызываем эту функцию для инициализации карточек на странице
