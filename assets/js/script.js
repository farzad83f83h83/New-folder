const nav = document.querySelector(".mobile-nav"),
navMenuBtn = document.querySelector(".nav-menu-btn"),
navCloseBtn = document.querySelector(".nav-close-btn");


const navtogglefunc = () => nav.classList.toggle("active");
navMenuBtn.addEventListener("click", navtogglefunc);
navCloseBtn.addEventListener("click", navtogglefunc);


function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;
    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();
    if (isNaN(dateEnd)) {
      return;
    }
    timer = setInterval(calculate, 1000);
    function calculate() {
      var dateStart = new Date();
      dateStart = new Date(
        dateStart.getUTCFullYear(),
        dateStart.getUTCMonth(),
        dateStart.getUTCDate(),
        dateStart.getUTCHours(),
        dateStart.getUTCMinutes(),
        dateStart.getUTCSeconds()
      );
      var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);
      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = timeRemaining % 3600;
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = timeRemaining % 60;
        seconds = parseInt(timeRemaining);
        document.querySelector("#days > span").innerHTML = parseInt(days, 10);
        document.querySelector("#hours > span").innerHTML = ("0" + hours).slice(-2);
        document.querySelector("#minutes > span").innerHTML = ("0" + minutes).slice(-2);
        document.querySelector("#seconds > span").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }
  }
  countdown('march 1, 2024 10:49:22');