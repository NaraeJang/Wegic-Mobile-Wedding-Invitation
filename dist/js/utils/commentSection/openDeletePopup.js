import { commentPopup, commentPopupDeleteBtn } from "./commentValues.js";

function openDeletePopup(e) {
  commentPopup.classList.add("show-popup");
  const targetContainer = e.currentTarget.parentElement.parentElement;
  commentPopupDeleteBtn.setAttribute(
    "data-target",
    targetContainer.getAttribute("data-id")
  );
}

export default openDeletePopup;
