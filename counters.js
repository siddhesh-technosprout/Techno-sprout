document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".animate-counter");

    const startCounter = (counter) => {
        let start = +counter.getAttribute("data-start");
        let target = +counter.getAttribute("data-target");
        let symbol = counter.getAttribute("data-symbol");

        let count = start;
        let duration = 1500;

        let increment = Math.ceil(target / (duration / 16));

        function updateCount() {
            if (count < target) {
                count += increment;

                if (count > target) count = target;

                counter.innerHTML = count + `<span class="symbol">${symbol}</span>`;
                requestAnimationFrame(updateCount);
            } else {
                counter.innerHTML = target + `<span class="symbol">${symbol}</span>`;
            }
        }

        updateCount();
    };

    // Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });

});