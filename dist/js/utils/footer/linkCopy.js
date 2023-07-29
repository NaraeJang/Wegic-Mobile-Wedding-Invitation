function linkCopy() {
  const textToCopy = location.href; // Get the current URL

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Successfully copied the link.");
    })
    .catch((error) => {
      console.error("Failed to copy link: ", error);
    });
}

export default linkCopy;
