document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("gameSearch");
  const cards = document.querySelectorAll(".game-card");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();

      if (title.includes(query)) {
        card.style.display = "";      // 🔥 CSS default use
      } else {
        card.style.display = "none";
      }
    });
  });
});
