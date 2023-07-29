const closeBtns = document.querySelectorAll(".close-icon");
function closeButtons() {
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      closeBtn.parentElement.parentElement.parentElement.classList.remove(
        "show-popup"
      );
    });
  });
}

export default closeButtons;
