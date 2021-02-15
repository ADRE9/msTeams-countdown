const prettify = (number) => {
  if (number < 10) {
    return "0"+number
  }
  return number;
}

export const countdown = (eventTime) => {
  var timeEnd = eventTime;
  var timeNow = new Date().getTime();

  if (timeEnd < timeNow) {
    return "The Event has already Ended";
  }

  var timeLeft = timeEnd - timeNow;
  var daysLeft = Math.floor(timeLeft / (1000 * 3600 * 24));
  var hoursLeft = Math.floor((timeLeft % (1000 * 3600 * 24)) / (1000 * 3600));
  var minLeft = Math.floor((timeLeft % (1000 * 3600)) / (1000 * 60));
  var secLeft = Math.floor((timeLeft % (1000 * 60)) / (1000));

  var timeObject = {
    days: prettify(daysLeft),
    hours: prettify(hoursLeft),
    mins: prettify(minLeft),
    secs:prettify(secLeft)
  }

  return timeObject;
};