const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progressFill = document.getElementById("progress-fill");

let currentPage = 0;
const totalPages = pages.length;

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
  flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
  flower.dataset.message =
    messages[Math.floor(Math.random() * messages.length)];
});

// Page update
function updatePage() {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === currentPage);
  });

  progressFill.style.width =
    ((currentPage + 1) / totalPages) * 100 + "%";

  prevBtn.style.visibility = currentPage === 0 ? "hidden" : "visible";
  nextBtn.textContent =
    currentPage === totalPages - 1 ? "Finish" : "Next";
}

nextBtn.onclick = () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updatePage();
  }
};

prevBtn.onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
};

updatePage();
