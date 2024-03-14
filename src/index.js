import "../pages/index.css";
import { initialCards } from "../src/cards.js";
import { createCard, deleteCard } from "../src/components/card.js";
import { openModal, closeModal } from "../src/components/modal.js";

// @todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content; //записываю содержимое блока template
// @todo: DOM узлы
const cardContainer = document.querySelector(".places__list"); //записываю место куда буду вставлять карточки

export const editBtn = document.querySelector(".profile__edit-button");
export const popupTypeEdit = document.querySelector(".popup_type_edit");
export const popup = document.querySelector(".popup");
export const popupClose = document.querySelector(".popup__close");

editBtn.addEventListener("click", () => {
  openModal(popupTypeEdit);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal(popup);
  }
});

popupClose.addEventListener("mousedown", () => {
  closeModal(popupTypeEdit);
});

popup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closeModal(popup);
  }
})

// @todo: Вывести карточки на страницу
function displayCard(arrCards) {
  arrCards.forEach(function (item) {
    cardContainer.append(createCard(item.link, item.name, deleteCard));
  });
}

displayCard(initialCards);
