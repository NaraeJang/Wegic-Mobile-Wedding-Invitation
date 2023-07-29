function getSundayDates(year, month) {
  const dates = [];

  // Loop through all the days of the month
  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, month, day);

    if (date.getMonth() === month && date.getDay() === 0) {
      // If the date is in the desired month and it's a Sunday (day 0), add it to the array
      dates.push(date.getDate());
    }
  }

  return dates;
}

export default getSundayDates;
