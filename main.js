(()=>{"use strict";var e=document.querySelector("#card-template").content,t=document.querySelectorAll(".popup");function n(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",r)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r)}function r(e){"Escape"===e.key&&c()}function c(){t.forEach(o)}var p=document.querySelector(".places__list"),u=document.querySelector(".profile__edit-button"),d=document.querySelector(".profile__add-button"),a=document.querySelector(".popup_type_edit"),i=document.querySelector(".popup_type_new-card"),s=document.forms["edit-profile"],l=document.querySelector(".profile__title"),_=document.querySelector(".profile__description"),m=s.querySelector(".popup__input_type_name"),y=s.querySelector(".popup__input_type_description"),v=document.forms["new-place"],f=v.querySelector(".popup__input_type_card-name"),k=v.querySelector(".popup__input_type_url"),q=document.querySelector(".popup_type_image"),S=q.querySelector(".popup__image"),g=q.querySelector(".popup__caption");function L(t){var n,o,r,c,u,d,a,i,s,l,_,m,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"prepend",v=(o=h,r=(n=t).link,c=n.name,u=o.deleteCard,d=o.likeButton,a=o.openCard,i=e.querySelector(".card").cloneNode(!0),s=i.querySelector(".card__delete-button"),l=i.querySelector(".card__like-button"),_=i.querySelector(".card__image"),m=i.querySelector(".card__title"),s.addEventListener("click",(function(){return u(i)})),l.addEventListener("click",(function(){return d(l)})),_.addEventListener("click",(function(){a(r,c)})),_.src=r,_.alt=c,m.textContent=c,i);p[y](v)}u.addEventListener("click",(function(){var e;(e=s).elements.name.value=l.textContent,e.elements.description.value=_.textContent,n(a)})),d.addEventListener("click",(function(){n(i)})),t.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&o(e),t.target.classList.contains("popup__close")&&o(e)}))})),s.addEventListener("submit",(function(e){e.preventDefault();var t=m.value,n=y.value;l.textContent=t,_.textContent=n,c()})),v.addEventListener("submit",(function(e){e.preventDefault(),L({link:k.value,name:f.value}),v.reset(),c()}));var h={deleteCard:function(e){e.remove()},likeButton:function(e){e.classList.toggle("card__like-button_is-active")},openCard:function(e,t){S.src=e,S.alt=t,g.textContent=t,n(q)}};[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){L(e,"append")}))})();