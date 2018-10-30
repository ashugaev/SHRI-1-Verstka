import { disableScrolling, enableScrolling } from "./ScrollDisable";

export function initPopup() {
  addCloseEvent();
  addOpenEvent();
}

// Переменные, которые будут нужны для закрытия Popup
let targetPageTop: number;
let targetPageLeft: number;
let targetHeight: number;
let targetWidth: number;

const popupClassName = ".one-more-video-box";
const popUpOpenClass = "absolute-positioned-video";
const bgSelector: any = document.querySelector(".dark-bg");

let camerasVideoEl;
let bodyEl;
let eventTarget: any;
function addCloseEvent() {

  bodyEl = document.querySelector("body") as HTMLBodyElement;

  bodyEl.addEventListener("mouseup", (event): void => {
    eventTarget = event.target as EventTarget;
    if (eventTarget.classList.contains("videoControllers__closeBtn")) {  newFunction(); }
  });

  function newFunction() {
    closePopup(eventTarget.closest(popupClassName));
  }
}

function addOpenEvent() {
  document.querySelectorAll(popupClassName).forEach((el): void => {
    camerasVideoEl = el.querySelector(".camerasVideo") as HTMLVideoElement;
    camerasVideoEl.addEventListener("click", (event): void => {
      if (event.button === 0) {
        openPopup(el);
      }
    });
  });
}

function openPopup(elem: any) {
  disableScrolling();
  // Текущая позиция и размеры элемента
  targetPageTop = elem.getBoundingClientRect().top + window.pageYOffset;
  targetPageLeft = elem.getBoundingClientRect().left + window.pageXOffset;
  targetWidth = elem.clientWidth;
  targetHeight = elem.clientHeight;

  // Оставляя элемент на той же позиции сделаем его фиксированным
  elem.style.top = targetPageTop + "px";
  elem.style.left = targetPageLeft + "px";
  elem.style.position = "fixed";
  elem.style.width = targetWidth + "px";
  elem.style.height = targetHeight + "px";
  elem.parentNode.style.height = targetHeight + "px";

  elem.querySelector(".camerasVideo").muted = false;

  bgSelector.style.display = "block";
  // Задержка, что бы не было скачка, перехода на абсолют
  setTimeout(() => {
    elem.classList.add(popUpOpenClass);
    bgSelector.style.opacity = 1;
  }, 50);
}

function closePopup(popup: any) {
  bgSelector.style.opacity = 0;
  popup.classList.remove("absolute-positioned-video");

  popup.querySelector(".camerasVideo").muted = true;

  setTimeout(() => {
    bgSelector.style.display = "none";
    popup.style.position = "unset";
  }, 1000);

  enableScrolling();
}
