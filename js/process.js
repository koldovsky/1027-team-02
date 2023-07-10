function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    let amPm = (hours < 12 ? "AM" : "PM");
    hours = (hours > 12 ? hours - 12 : hours);
    hours = (hours === 0 ? 12 : hours);

    let clockElement = document.getElementById("clock");
    clockElement.innerHTML = hours + ":" + minutes + ":" + seconds + " " + amPm;
  }

  setInterval(updateClock, 1000);