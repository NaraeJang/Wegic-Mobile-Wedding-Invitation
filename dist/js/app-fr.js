// ****** SELECT ITEMS **********
const ourStoryPopup = document.querySelector(".our-story__popup");
const rsvpPopup = document.querySelector(".rsvp__popup");
const rsvpPopupLast = document.querySelector(".rsvp__popup--second");
const ourStoryBtn = document.getElementById("our-story-btn");
const closeBtns = document.querySelectorAll(".close-icon");
const weddingPartyContainer = document.querySelector(
  ".wedding-party__profiles"
);
const cpYear = document.querySelector(".cpYear");
// Get Date
const weddingYears = document.querySelectorAll(".wedding-year");
const weddingDays = document.querySelectorAll(".wedding-day");
// calendar
const daysTag = document.querySelector(".days");
const weddingDDay = document.querySelector(".d-day span");
// RSVP
const rsvpBtn = document.getElementById("rsvp-btn");
const attendanceBtn = document.getElementById("attendance-btn");
const rsvpThirdBtn = document.getElementById("rsvp--third-btn");
// RSVP-first popup values
const rsvpFullName = document.getElementById("rsvp--full-name");
const rsvpGuestNumber = document.getElementById("rsvp--guests--number");
const rsvpGuestName = document.getElementById("rsvp--guests--name");
const rsvpMeal = document.querySelectorAll(".rsvp-form__meal--group input");

// comment section
const commentAlert = document.querySelectorAll(".alert");
const commentForm = document.getElementById("comment-form");
const commentName = document.getElementById("name");
const commentMessage = document.getElementById("message");
const commentPassword = document.getElementById("password");
const commentSubmitBtn = document.getElementById("comment-submit-btn");
const commentList = document.querySelector(".comment__list");
const commentContainer = document.querySelector(".comment__container");
// const commentDeleteBtn = document.querySelector(".comment-delete-btn");
const commentPopup = document.querySelector(".comment-delete-popup");
const commentPopupDeleteBtn = document.getElementById(
  "comment-popup-delete-btn"
);
const commentConfirmPassword = document.getElementById("confirm-password");
// footer link
const linkElement = document.querySelector(".link");

// GET DATE
let date = new Date(),
  currentYear = date.getFullYear(),
  currentMonth = date.getMonth();

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

/*
// ===========
// GENERAL FUNCTIONS
// ===========
*/
ourStoryBtn.addEventListener("click", function () {
  ourStoryPopup.classList.add("show-popup");
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", function () {
    closeBtn.parentElement.parentElement.parentElement.classList.remove(
      "show-popup"
    );
  });
});

/*
// ===========
// Banner
// ===========
*/
function getWeddingDate() {
  const weddingNumDay = new Date(currentYear, 9, 14).getDay();
  const weddingDayNum = days[weddingNumDay];

  weddingYears.forEach((weddingYear) => {
    weddingYear.innerHTML = `${currentYear}`;
  });

  weddingDays.forEach((weddingDay) => {
    weddingDay.innerHTML = `${weddingDayNum}`;
  });
}

getWeddingDate();

/*
// ===========
// GALLERY
// ===========
*/
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

/*
// ===========
// CALENDAR
// ===========
*/
function getSundayDates(year, month) {
  const dates = [];

  // Loop through all the days of the month
  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, month, day);

    if (date.getMonth() === month && date.getDay() === 0) {
      // If the date is in the desired month and it's a Sunday (day 0), add it to the array
      dates.push(date.getDate());
    }
  }

  return dates;
}

const renderCalendar = () => {
  let firstDayeofMonth = new Date(currentYear, 9, 0).getDay(); //getting first day of month.
  let lastDateofThisMonth = new Date(currentYear, 10, 0).getDate(); //getting last date of october.
  let lastDateofLastMonth = new Date(currentYear, 9, 0).getDate(); //getting last date of previous month.
  let lastDayofThisMonth = new Date(
    currentYear,
    9,
    lastDateofThisMonth
  ).getDay(); //getting last day of october.
  let liTag = "";
  let sundays = "";

  //creating li of previous month last days
  for (let i = firstDayeofMonth; i >= 0; i--) {
    if (i === 6) {
      break; // Skip the remaining iterations of the loop if i is 6 (Saturday)
    }

    if (getSundayDates(currentYear, 8).includes(lastDateofLastMonth - i)) {
      sundays = "inactive sunday";
    } else {
      sundays = "inactive";
    }

    liTag += `<li class="${sundays}">${lastDateofLastMonth - i}</li>`;
  }

  //creating li of all days of current month
  for (let i = 1; i <= lastDateofThisMonth; i++) {
    // find sundays in October
    if (getSundayDates(currentYear, 9).includes(i)) {
      sundays = "sunday";
    } else {
      sundays = "";
    }

    let dDay = i === new Date(currentYear, 9, 14).getDate() ? "active" : "";

    liTag += `<li class=${dDay} ${sundays}>${i}</li>`;
  }

  //creating li of days of next month
  for (let i = lastDayofThisMonth; i < 6; i++) {
    if (i === 6) {
      break; // Skip the remaining iterations of the loop if i is 6 (Saturday)
    }
    liTag += `<li class="inactive">${i - lastDayofThisMonth + 1}</li>`;
  }

  daysTag.innerHTML = liTag;
};

function calculateDday(targetDate) {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time remaining in milliseconds
  const timeRemaining = targetDate.getTime() - currentDate.getTime();

  // Calculate the remaining days
  const remainingDays = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

  // Update the HTML or user interface element with the remaining days
  weddingDDay.innerHTML = `${remainingDays}`;
}

// Example usage
const targetDate = new Date(`${currentYear}-9-14`);

function updateDate() {
  calculateDday(targetDate);
  renderCalendar();
}

updateDate();

/*
// ===========
// WEEDING PARTY
// ===========
*/
const swiper3 = new Swiper(".mySwiper3", {
  pagination: {
    el: ".swiper-pagination",
  },
});

/*
// ===========
// RSVP SECTION
// ===========
*/

function resetRsvpValue() {
  rsvpFullName.value = "";
  rsvpGuestName.value = "";
  rsvpGuestNumber.value = "";
}

function toogleRsvpPopup() {
  rsvpPopup.classList.toggle("show-popup");
}

function toogleRsvpThirdPopup() {
  rsvpPopupLast.classList.toggle("show-popup");
}

rsvpBtn.addEventListener("click", function () {
  toogleRsvpPopup();
});

attendanceBtn.addEventListener("click", function () {
  const fullname = rsvpFullName.value,
    guestNumber = rsvpGuestNumber.value,
    guestName = rsvpGuestName.value;

  if (!fullname) {
    displayAlert(rsvpFullName, "Veuillez remplir ce champ.", "danger");
  }

  if (guestNumber) {
    if (guestNumber >= 0) {
      if (guestNumber > 0) {
        if (!guestName) {
          displayAlert(rsvpGuestName, "Veuillez remplir ce champ.", "danger");
        }
      }
    } else if (guestNumber < 0) {
      displayAlert(
        rsvpGuestNumber,
        "Veuillez saisir un nombre valide.",
        "danger"
      );
    }
  } else if (!guestNumber) {
    if (!guestNumber) {
      displayAlert(rsvpGuestNumber, "Veuillez remplir ce champ.", "danger");
    }
  }

  if (
    (fullname && guestNumber === "0") ||
    (fullname && guestNumber > 0 && guestName)
  ) {
    toogleRsvpThirdPopup();
    toogleRsvpPopup();
    resetRsvpValue();
  }
});

rsvpThirdBtn.addEventListener("click", function () {
  toogleRsvpThirdPopup();
});

/*
// ===========
// COOMENT SECTION
// ===========
*/
// ****** EVENT LISTENERS **********
commentForm.addEventListener("submit", addItem);

commentPopupDeleteBtn.addEventListener("click", deleteItem);
window.addEventListener("DOMContentLoaded", setupItems);

// ********** FUNTIONS **********
function displayAlert(location, text, action) {
  let currAlert = location.nextSibling.nextSibling;
  currAlert.textContent = text;
  currAlert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(function () {
    currAlert.textContent = "";
    currAlert.classList.remove(`alert-${action}`);
  }, 3000);
}

function addItem(e) {
  e.preventDefault();

  const name = commentName.value;
  const message = commentMessage.value;
  const password = commentPassword.value;

  const id = new Date().getTime().toString();
  const date = new Date();
  let commentYear = date.getFullYear(),
    commentMonth = months[date.getMonth()],
    commentday = date.getDate();

  if (name && message && password) {
    createListItem(
      id,
      name,
      message,
      password,
      commentYear,
      commentMonth,
      commentday
    );

    // display alert
    displayAlert(commentSubmitBtn, "Message posté.", "success");

    // add to local storage
    addToLocalStorage(
      id,
      name,
      message,
      password,
      commentYear,
      commentMonth,
      commentday
    );

    // set back to default
    setBackToDefault();
  }

  if (!name) {
    displayAlert(commentName, "Veuillez remplir ce champ.", "danger");
  }
  if (!message) {
    displayAlert(commentMessage, "Veuillez remplir ce champ.", "danger");
  }
  if (!password) {
    displayAlert(commentPassword, "Veuillez remplir ce champ.", "danger");
  }
}

function openDeletePopup(e) {
  commentPopup.classList.add("show-popup");
  const targetContainer = e.currentTarget.parentElement.parentElement;
  commentPopupDeleteBtn.setAttribute(
    "data-target",
    targetContainer.getAttribute("data-id")
  );
}

function deleteItem() {
  const password = commentConfirmPassword.value;
  const targetContainerId = commentPopupDeleteBtn.getAttribute("data-target");
  const targetContainer = document.querySelector(
    `[data-id="${targetContainerId}"]`
  );

  if (!password) {
    displayAlert("Veuillez remplir ce champ.", "danger", 0);
  } else if (password !== targetContainer.getAttribute("data-pass")) {
    displayAlert("Mot de passe incorrect.", "danger", 0);
    setTimeout(() => {
      setBackToDefault();
    }, 1400);
  } else {
    targetContainer.remove();
    commentPopup.classList.remove("show-popup");
    setBackToDefault();
    removeFromLocalStorage(targetContainerId);
  }
}

// create list item
function createListItem(
  id,
  name,
  message,
  password,
  commentYear,
  commentMonth,
  commentday
) {
  // Check if the item already exists
  const existingItem = document.querySelector(`[data-id="${id}"]`);

  if (existingItem) {
    return; // Skip creating a new item if it already exists
  }

  // Create a new item
  const element = document.createElement("article");
  // add class
  element.classList.add("comment__container");
  // add id
  const attr = document.createAttribute("data-id");
  attr.value = id;

  const pass = document.createAttribute("data-pass");
  pass.value = password;

  element.setAttributeNode(attr);
  element.setAttributeNode(pass);

  element.innerHTML = ` <div class="comment__header">
  <div class="comment__header__main text-align-left">
    <p class="comment__header__main--date">${commentday} ${commentMonth}, ${commentYear}</p>
    <h6 class="comment__header__main--name">${name}</h6>
  </div>
  <button type="button" class="delete-btn comment-delete-btn">
    <i class="fa-solid fa-x"></i>
  </button>
</div>
<div class="comment__body text-align-left">
  <p>${message}</p>
</div>
<div class="comment-divider"></div>`;

  const deleteBtn = element.querySelector(".comment-delete-btn");

  deleteBtn.addEventListener("click", openDeletePopup);

  // append child
  commentList.appendChild(element);
}

function setBackToDefault() {
  commentName.value = "";
  commentMessage.value = "";
  commentPassword.value = "";
  commentConfirmPassword.value = "";
}

// ****** LOCAL STORAGE **********
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(
        item.id,
        item.name,
        item.message,
        item.password,
        item.commentYear,
        item.commentMonth,
        item.commentday
      );
    });
  }
}

function addToLocalStorage(
  id,
  name,
  message,
  password,
  commentYear,
  commentMonth,
  commentday
) {
  const comment = {
    id,
    name,
    message,
    password,
    commentYear,
    commentMonth,
    commentday,
  };
  let items = getLocalStorage();
  items.push(comment);
  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
/*
// ===========
// FOOTER
// ===========
*/

// get the current year.
const currYear = new Date().getFullYear();

// create dynamic year for copyright.
function copyrightYear() {
  cpYear.innerHTML = `${currYear}`;
}

copyrightYear();

// create copy link function
linkElement.addEventListener("click", () => {
  const textToCopy = location.href; // Get the current URL

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Successfully copied the link.");
    })
    .catch((error) => {
      console.error("Failed to copy link: ", error);
    });
});
