// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content; //записываю содержимое блока template

// @todo: DOM узлы
const cardContainer = document.querySelector(".places__list"); //записываю место куда буду вставлять карточки

// @todo: Функция создания карточки
function createCard(imgSrc, title, deleteFnc) {
  const cardTemplateClone = cardTemplate.querySelector(".card").cloneNode(true); //выбираю карточку из template и клонирую её

  const deleteButton = cardTemplateClone.querySelector(".card__delete-button"); //выбираю кнопку из копии карточки
//   deleteButton.addEventListener("click", deleteFnc); //добавляю слушатель с функцией удаления на кнопку

  deleteButton.addEventListener("click", () =>  deleteFnc(cardTemplateClone));


  const cardImg = cardTemplateClone.querySelector(".card__image"); //выбираю из клона тег изображения
  const cardTitle = cardTemplateClone.querySelector(".card__title"); //выбираю из клона тег тайтла

  cardImg.src = imgSrc; //заполняю из аргумента
  cardImg.alt = title; //заполняю alt
  cardTitle.textContent = title; //заполняю из аргумента

  return cardTemplateClone; //возвращаю заполненную карточку
}

// @todo: Функция удаления карточки
function deleteCard(card) {
//   evt.target.closest(".places__item").remove(); //находим ближайшего родителя, в котором есть кнопка "удалить"
  card.remove();
}

// @todo: Вывести карточки на страницу
function displayCard(arrCards) {
  //// реализация через стрелочную функцию
  //   arrCards.forEach((item) => {
  //     cardContainer.append(createCard(item.link, item.name, deleteCard))
  //   });

  arrCards.forEach(function (item) {
    cardContainer.append(createCard(item.link, item.name, deleteCard));
  });
  ////реализация через for
  //   for (let i = 0; i <= arrCards.length - 1; i++) {
  //     cardContainer.append(
  //       createCard(arrCards[i].link, arrCards[i].name, deleteCard)
  //     );
  //   }
}

displayCard(initialCards);
