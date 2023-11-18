document.addEventListener("DOMContentLoaded", function () {
    const loadingHub = document.getElementById("container-home");
    const skipBtn = document.getElementById("skip-btn");
    const mainCarousel = document.getElementById("main-carrousel");

    if (loadingHub && mainCarousel && skipBtn) {
        loadingHub.style.display = "flex";
        skipBtn.style.display = "none";
        mainCarousel.style.display = "none";

        function toggleElements() {
            loadingHub.style.display = "none";
            skipBtn.style.display = "block";
            mainCarousel.style.display = "block";
        }

        setTimeout(toggleElements, 2500);
    }
});