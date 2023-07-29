import { getLocalStorage } from "./localStorage.js";
import createListItem from "./createListItem.js";

function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(
        item.id,
        item.name,
        item.message,
        item.password,
        item.commentYear,
        item.commentMonth,
        item.commentday
      );
    });
  }
}

export default setupItems;
