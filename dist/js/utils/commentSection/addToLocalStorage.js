import { getLocalStorage } from "./localStorage.js";

function addToLocalStorage(
  id,
  name,
  message,
  password,
  commentYear,
  commentMonth,
  commentday
) {
  const comment = {
    id,
    name,
    message,
    password,
    commentYear,
    commentMonth,
    commentday,
  };
  let items = getLocalStorage();
  items.push(comment);
  localStorage.setItem("list", JSON.stringify(items));
}

export default addToLocalStorage;
