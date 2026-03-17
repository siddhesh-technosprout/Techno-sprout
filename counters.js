document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        let start = parseFloat(counter.getAttribute("data-start")) || 0;
        let target = parseFloat(counter.getAttribute("data-target"));
        let symbol = counter.getAttribute("data-symbol") || "";

        let current = start;

        let duration = 1500;
        let steps = 60;
        let increment = (target - start) / steps;
        let stepTime = duration / steps;

        function updateCounter() {

            current += increment;

            if (current >= target) current = target;

            let value;

            // integers for + and %
            if (symbol === "+" || symbol === "%") {
                value = Math.floor(current);
            } 
            // decimals for others
            else {
                value = current.toFixed(1);
                if (value.endsWith(".0")) value = parseInt(value);
            }

            counter.innerHTML = value + '<span class="symbol">' + symbol + '</span>';

            if (current < target) {
                setTimeout(updateCounter, stepTime);
            }
        }

        updateCounter();

    });

});