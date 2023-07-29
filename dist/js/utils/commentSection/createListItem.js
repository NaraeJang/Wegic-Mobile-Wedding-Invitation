import openDeletePopup from "./openDeletePopup.js";

const commentList = document.querySelector(".comment__list");

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

export default createListItem;
