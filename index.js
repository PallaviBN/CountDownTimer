(function () {
  const hour = document.querySelector(".hour");
  const minute = document.querySelector(".minute");
  const second = document.querySelector(".second");

  const start = document.querySelector(".start");
  const stop = document.querySelector(".stop");
  const reset = document.querySelector(".reset");

  let countDownTimer = null;

  const inputs = document.querySelectorAll(".container__inputs--time");

  inputs.forEach((inp) =>
    inp.addEventListener("change", function () {
      this.value = this.value <= 10 ? "0" + this.value : this.value;
    })
  );

  function stopTimer() {
    clearInterval(countDownTimer);
    stop.style.display = "none";
    start.style.display = "initial";
  }

  function resetTimer() {
    // clearInterval(countDownTimer);
    hour.value = "";
    minute.value = "";
    second.value = "";
    // stop.style.display = "none";
    // start.style.display = "initial";
    stopTimer();
  }

  function timer() {
    if (second.value > 59) {
      minute.value++;
      minute.value = minute.value <= 10 ? "0" + minute.value : minute.value;
      second.value = second.value - 59;
    }
    if (minute.value > 60) {
      hour.value++;
      hour.value = hour.value <= 10 ? "0" + hour.value : hour.value;
      minute.value = minute.value - 60;
    }
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
      hour.value = "";
      minute.value = "";
      second.value = "";
      stopTimer();
    } else if (second.value != 0) {
      second.value = `${
        second.value <= 10 ? "0" + (second.value - 1) : second.value - 1
      }`;
    } else if (minute.value != 0 && second.value == 0) {
      second.value = 59;
      minute.value = `${
        minute.value <= 10 ? "0" + (minute.value - 1) : minute.value - 1
      }`;
    } else if (hour.value != 0 && minute.value == 0) {
      minute.value = 59;
      hour.value = `${
        hour.value <= 10 ? "0" + (hour.value - 1) : hour.value - 1
      }`;
    }
  }

  start.addEventListener("click", function () {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) return;
    function startTimer() {
      start.style.display = "none";
      stop.style.display = "initial";

      countDownTimer = setInterval(() => {
        timer();
      }, 1000);
    }
    startTimer();
  });

  stop.addEventListener("click", function () {
    stopTimer();
  });

  reset.addEventListener("click", function () {
    resetTimer();
  });
})();
