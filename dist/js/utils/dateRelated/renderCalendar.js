import { currentYear } from "../getDate.js";
import getSundayDates from "./getSundayDates.js";

const daysTag = document.querySelector(".days");
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

export default renderCalendar;
