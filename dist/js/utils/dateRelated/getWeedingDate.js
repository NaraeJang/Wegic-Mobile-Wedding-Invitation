import { currentYear } from "../getDate.js";
import { days } from "../dateEN.js";

const weddingYears = document.querySelectorAll(".wedding-year");
const weddingDays = document.querySelectorAll(".wedding-day");
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

export default getWeddingDate;
