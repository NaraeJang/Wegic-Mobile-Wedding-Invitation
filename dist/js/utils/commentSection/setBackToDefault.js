import {
  commentName,
  commentMessage,
  commentPassword,
  commentConfirmPassword,
} from "./commentValues.js";
function setBackToDefault() {
  commentName.value = "";
  commentMessage.value = "";
  commentPassword.value = "";
  commentConfirmPassword.value = "";
}

export default setBackToDefault;
