import calculateDday from "./calculateDday.js";
import renderCalendar from "./renderCalendar.js";
import { currentYear } from "../getDate.js";

const targetDate = new Date(`${currentYear}-9-14`);

function updateDate() {
  calculateDday(targetDate);
  renderCalendar();
}

export default updateDate;
