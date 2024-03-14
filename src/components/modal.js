export function openModal(element) {
  element.classList.add("popup_is-opened");
}

export function closeModal(elements) {
  elements.forEach((element) => {
    element.classList.remove("popup_is-opened");
  });
}

export function onOpenProfileModal(form) {
  form.elements.name.value =
    document.querySelector(".profile__title").textContent;
  form.elements.description.value =
    document.querySelector(".profile__description").textContent;
}
