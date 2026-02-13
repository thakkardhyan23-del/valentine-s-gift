document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const fill = document.querySelector(".fill");

  let index = 0;
  const total = pages.length;

  const messages = [
    "I love you",
    "madameji how is the website as of now?",
    "malkinnnnnn",
    "you're like this flower",
    "you're a tulip in the ocean of grass"
  ];

  const flowers = ["🌸", "🌷", "🤍"];

  pages.forEach(page => {
    const flower = page.querySelector(".flower");
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.dataset.msg =
      messages[Math.floor(Math.random() * messages.length)];
  });

  function render() {
    pages.forEach((p, i) =>
      p.classList.toggle("active", i === index)
    );

    fill.style.width = ((index + 1) / total) * 100 + "%";

    prev.style.visibility = index === 0 ? "hidden" : "visible";
    next.textContent = index === total - 1 ? "Finish" : "Next";
  }

  next.onclick = () => {
    if (index < total - 1) {
      index++;
      render();
    }
  };

  prev.onclick = () => {
    if (index > 0) {
      index--;
      render();
    }
  };

  render();
});
