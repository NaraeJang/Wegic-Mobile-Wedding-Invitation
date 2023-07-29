import { removeFromLocalStorage } from "./localStorage.js";
import setBackToDefault from "./setBackToDefault.js";
import {
  commentConfirmPassword,
  commentPopupDeleteBtn,
  commentPopup,
} from "./commentValues.js";
import displayAlert from "../displayAlert.js";

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
