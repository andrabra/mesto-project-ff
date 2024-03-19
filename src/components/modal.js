export const popups = document.querySelectorAll(".popup");

export function openModal(element) {
  element.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscape);
}

export function closeModal(element) {
  element.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
}

export function handleEscape(evt) {
  if (evt.key === "Escape") {
    closeAllModals();
  }
}

export function closeAllModals() {
  popups.forEach(closeModal);
}
