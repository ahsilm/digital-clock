clock = document.querySelector(".display-time");
dateTime = document.querySelector(".display-date");

function currentTime() {
  let date = new Date();
  hour = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();

  let midday = hour < 12 ? "AM" : "PM";

  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;

  hour = updateTime(hour);
  min = updateTime(min);

  sec = updateTime(sec);
  clock.innerHTML = hour + " : " + min + " : " + sec + " " + midday;
  dateTime.innerHTML = date.toDateString();

  setTimeout(() => {
    currentTime();
  }, 1000);
}

function updateTime(x) {
  if (x < 10) {
    return "0" + x;
  }
  return x;
}

currentTime();
