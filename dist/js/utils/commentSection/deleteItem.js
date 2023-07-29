import { removeFromLocalStorage } from "./localStorage.js";
import setBackToDefault from "./setBackToDefault.js";
import {
  commentConfirmPassword,
  commentPopupDeleteBtn,
  commentPopup,
} from "./commentValues.js";
// import displayAlert from "../displayAlert.js";

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

function deleteItem() {
  const password = commentConfirmPassword.value;
  const targetContainerId = commentPopupDeleteBtn.getAttribute("data-target");
  const targetContainer = document.querySelector(
    `[data-id="${targetContainerId}"]`
  );

  if (!password) {
    displayAlert(
      commentConfirmPassword,
      "Please fill out this field.",
      "danger"
    );
  } else if (password !== targetContainer.getAttribute("data-pass")) {
    displayAlert(commentConfirmPassword, "Incorrect password.", "danger");
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

export default deleteItem;
