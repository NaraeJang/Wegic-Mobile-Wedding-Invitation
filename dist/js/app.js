import ourStoryClassAdd from "./utils/ourStorySection.js";
//banner wedding date
import getWeddingDate from "./utils/dateRelated/getWeedingDate.js";
//date

import updateDate from "./utils/dateRelated/updateDate.js";
//rsvp
import toogleRsvpPopup from "./utils/rsvpSection/toogleRsvpPopup.js";
import toogleRsvpThirdPopup from "./utils/rsvpSection/toogleRsvpThirdPopup.js";
// comment
import { commentPopupDeleteBtn } from "./utils/commentSection/commentValues.js";
import addItem from "./utils/commentSection/addItem.js";
import deleteItem from "./utils/commentSection/deleteItem.js";
import setupItems from "./utils/commentSection/setupItems.js";

//footer
import copyrightYear from "./utils/footer/copyrightYear.js";
import linkCopy from "./utils/footer/linkCopy.js";
// general
import closeButtons from "./utils/closeBtns.js";
import attendanceForm from "./utils/rsvpSection/attendanceForm.js";

/*====================================
======================================
SELECTION
======================================
====================================*/
// Our Story
const ourStoryBtn = document.getElementById("our-story-btn");
// RSVP
const rsvpBtn = document.getElementById("rsvp-btn");
const attendanceBtn = document.getElementById("attendance-btn");
const rsvpThirdBtn = document.getElementById("rsvp--third-btn");
// comment section
const commentForm = document.getElementById("comment-form");

// footer link
const linkElement = document.querySelector(".link");

/*====================================
======================================
EVENT LISTENERS
======================================
====================================*/
// general
closeButtons();

window.addEventListener("DOMContentLoaded", () => {
  // banner wedding date
  getWeddingDate();
  // calendar section
  updateDate();
  // Footer
  copyrightYear();
});

// our story section
ourStoryBtn.addEventListener("click", function () {
  ourStoryClassAdd();
});

// gallery section
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// wedding party section
const swiper3 = new Swiper(".mySwiper3", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// RSVP SECTION
rsvpBtn.addEventListener("click", function () {
  toogleRsvpPopup();
});

attendanceBtn.addEventListener("click", function () {
  attendanceForm();
});

rsvpThirdBtn.addEventListener("click", function () {
  toogleRsvpThirdPopup();
});

// comment section
commentForm.addEventListener("submit", addItem);

commentPopupDeleteBtn.addEventListener("click", deleteItem);
window.addEventListener("DOMContentLoaded", setupItems);

// ****** LOCAL STORAGE **********

linkElement.addEventListener("click", () => {
  linkCopy();
});
