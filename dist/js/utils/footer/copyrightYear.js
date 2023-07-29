const cpYear = document.querySelector(".cpYear");

// get the current year.
const currYear = new Date().getFullYear();

// create dynamic year for copyright.
function copyrightYear() {
  cpYear.innerHTML = `${currYear}`;
}

export default copyrightYear;
