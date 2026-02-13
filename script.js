document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const progressFill = document.getElementById("progress-fill");

  let currentPage = 0;
  const totalPages = pages.length;

  // Safety check (intellectual honesty)
  if (totalPages === 0) {
    console.error("No pages found. Did you forget the .page class?");
    return;
  }

  // Flower logic
  const messages = [
    "I love you",
    "madameji how is the website as of now?",
    "malkinnnnnn",
    "you're like this flower",
    "you're a tulip in the ocean of grass"
  ];

  const flowers = ["🌸", "🌷", "🤍"];

  document.querySelectorAll("[data-flower]").forEach(flower => {
    flower.textContent =
      flowers[Math.floor(Math.random() * flowers.length)];

    flower.setAttribute(
      "data-message",
      messages[Math.floor(Math.random() * messages.length)]
    );
  });

  function updatePage() {
    pages.forEach((page, i) => {
      page.classList.toggle("active", i === currentPage);
    });

    progressFill.style.width =
      ((currentPage + 1) / totalPages) * 100 + "%";

    prevBtn.style.visibility =
      currentPage === 0 ? "hidden" : "visible";

    nextBtn.textContent =
      currentPage === totalPages - 1 ? "Finish" : "Next";
  }

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updatePage();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updatePage();
    }
  });

  updatePage();
});
