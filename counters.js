document.addEventListener("DOMContentLoaded", function () {

  const counters = document.querySelectorAll(".counter");

  const startCounter = (counter) => {

    const start = parseInt(counter.getAttribute("data-start")) || 0;
    const target = parseInt(counter.getAttribute("data-target"));
    const symbol = counter.getAttribute("data-symbol") || "";
    const speed = parseInt(counter.getAttribute("data-speed")) || 80;

    let count = start;

    const update = () => {

      if (count < target) {

        count++;

        counter.innerText = count + symbol;

        setTimeout(update, speed);

      } else {

        counter.innerText = target + symbol;

      }

    };

    update();
  };

  counters.forEach(counter => {
    startCounter(counter);
  });

});