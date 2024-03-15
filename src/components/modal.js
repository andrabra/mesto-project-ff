export function openModal(element) {
  element.classList.add("popup_is-opened");
}

export function closeModal(elements) {
  elements.forEach((element) => {
    element.classList.remove("popup_is-opened");
  });
}


