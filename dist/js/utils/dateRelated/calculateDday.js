const weddingDDay = document.querySelector(".d-day span");

function calculateDday(targetDate) {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time remaining in milliseconds
  const timeRemaining = targetDate.getTime() - currentDate.getTime();

  // Calculate the remaining days
  const remainingDays = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

  // Update the HTML or user interface element with the remaining days
  weddingDDay.innerHTML = `${remainingDays}`;
}

export default calculateDday;
