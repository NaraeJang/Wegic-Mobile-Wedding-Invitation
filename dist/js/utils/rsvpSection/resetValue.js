import { rsvpFullName, rsvpGuestName, rsvpGuestNumber } from "./rsvpValues.js";
function resetRsvpValue() {
  rsvpFullName.value = "";
  rsvpGuestName.value = "";
  rsvpGuestNumber.value = "";
}

export default resetRsvpValue;
