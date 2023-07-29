import toogleRsvpThirdPopup from "./toogleRsvpThirdPopup.js";
import toogleRsvpPopup from "./toogleRsvpPopup.js";
import resetRsvpValue from "./resetValue.js";
import { rsvpFullName, rsvpGuestName, rsvpGuestNumber } from "./rsvpValues.js";
import displayAlert from "../displayAlert.js";

function attendanceForm() {
  const fullname = rsvpFullName.value,
    guestNumber = rsvpGuestNumber.value,
    guestName = rsvpGuestName.value;

  if (!fullname) {
    displayAlert(rsvpFullName, "Please fill out this field.", "danger");
  }

  if (guestNumber) {
    if (guestNumber >= 0) {
      if (guestNumber > 0) {
        if (!guestName) {
          displayAlert(rsvpGuestName, "Please fill out this field.", "danger");
        }
      }
    } else if (guestNumber < 0) {
      displayAlert(rsvpGuestNumber, "Please type a valid number.", "danger");
    }
  } else if (!guestNumber) {
    if (!guestNumber) {
      displayAlert(rsvpGuestNumber, "Please fill out this field.", "danger");
    }
  }

  if (
    (fullname && guestNumber === "0") ||
    (fullname && guestNumber > 0 && guestName)
  ) {
    toogleRsvpThirdPopup();
    toogleRsvpPopup();
    resetRsvpValue();
  }
}

export default attendanceForm;
