import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, deleteCard, likeButton, cardContainer } from "./components/card.js";
import { openModal, closeModal, handleEscape, popups } from "./components/modal.js";



//todo: кнопки открытия попапов
const editBtn = document.querySelector(".profile__edit-button");
const addBtn = document.querySelector(".profile__add-button");

//todo: попапы
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");

//todo: форма редактирования профиля
const editProfileForm = document.forms["edit-profile"];

//todo: кнопки закрытия попапов
// const popups = document.querySelectorAll(".popup");

//todo: Данные из профиля
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//todo: Находим поля формы в DOM
const nameInput = editProfileForm.querySelector(
  ".popup__input_type_name"
);
const jobInput = editProfileForm.querySelector(
  ".popup__input_type_description"
);

//todo: Находим форму добавления новой карточки в DOM
const newPlaceForm = document.forms["new-place"];

//todo: Находим поля формы в DOM
const placeNameInput = newPlaceForm.querySelector(
  ".popup__input_type_card-name"
);
const linkInput = newPlaceForm.querySelector(".popup__input_type_url");

//todo: Открытие попапов
editBtn.addEventListener("click", () => {
  onOpenProfileModal(editProfileForm);
  openModal(popupTypeEdit);
});

addBtn.addEventListener("click", () => {
  openModal(popupTypeNewCard);
});

function openCard(card) {
  popupImage.src = card.querySelector(".card__image").src;
  popupImage.alt = card.querySelector(".card__image").alt;
  popupCaption.textContent = card.querySelector(".card__title").textContent;
  openModal(popupTypeImage);
}

//todo: Закрытие попапов

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
      closeModal(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closeModal(popup);
    }
  });
});

//todo: Функция отправки новых данных профиля
function handleProfileEditSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  popups.forEach((popup) => {
    closeModal(popup);
  });
}

//todo: Функция создания новой карточки
function handleNewCardSubmit(evt) {
  evt.preventDefault();

  const name = placeNameInput.value;
  const link = linkInput.value;

  cardContainer.prepend(createCard(link, name, deleteCard, likeButton, openCard));
  newPlaceForm.reset();
  popups.forEach((popup) => {
    closeModal(popup);
  });
}

//todo: Добавление обработчиков на формы
editProfileForm.addEventListener("submit", handleProfileEditSubmit);
newPlaceForm.addEventListener("submit", handleNewCardSubmit);

function onOpenProfileModal(form) {
  form.elements.name.value = profileTitle.textContent;
  form.elements.description.value = profileDescription.textContent;
}

//todo: Вывести карточки на страницу
function displayCards(arrCards) {
  arrCards.forEach(function (item) {
    cardContainer.append(
      createCard(item.link, item.name, deleteCard, likeButton, openCard)
      //!!! Подскажите, пожалуйста, подробнее как можно было бы упаковать в объект данные и колбеки, в контексте моей реализации
    );
  });
}

displayCards(initialCards);
