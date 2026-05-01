document.addEventListener("DOMContentLoaded", () => {
    const projectBoxes = document.querySelectorAll(".project-box");

    projectBoxes.forEach((box) => {
        const slides = box.querySelectorAll(".slide");
        const prevBtn = box.querySelector(".slider-button.prev");
        const nextBtn = box.querySelector(".slider-button.next");

        let currentIndex = 0;

        // safety check
        if (!slides.length || !prevBtn || !nextBtn) return;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);

        // initialize
        showSlide(currentIndex);
    });
});