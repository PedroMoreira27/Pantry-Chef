document.addEventListener("DOMContentLoaded", function () {
    const loadingHub = document.getElementById("container-home");
    const mainCarousel = document.getElementById("main-carousel");

    // Certifique-se de que os elementos existam antes de tentar alterar seus estilos
    if (loadingHub && mainCarousel) {
      loadingHub.style.display = "flex";
      mainCarousel.style.display = "none";

      function toggleElements() {
        loadingHub.style.display = "none";
        mainCarousel.style.display = "block";
      }

      setTimeout(toggleElements, 2500);
    }
  });