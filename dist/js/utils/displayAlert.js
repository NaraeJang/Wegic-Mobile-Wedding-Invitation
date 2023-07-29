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

export default displayAlert;
