import { months } from "../dateEN.js";
import {
  commentName,
  commentMessage,
  commentPassword,
} from "./commentValues.js";
import displayAlert from "../displayAlert.js";
import createListItem from "./createListItem.js";
import addToLocalStorage from "./addToLocalStorage.js";
import setBackToDefault from "./setBackToDefault.js";

const commentSubmitBtn = document.getElementById("comment-submit-btn");

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
    displayAlert(commentSubmitBtn, "Message added to the list", "success");

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
    displayAlert(commentName, "Please fill out this field.", "danger");
  }
  if (!message) {
    displayAlert(commentMessage, "Please fill out this field.", "danger");
  }
  if (!password) {
    displayAlert(commentPassword, "Please fill out this field.", "danger");
  }
}

export default addItem;
