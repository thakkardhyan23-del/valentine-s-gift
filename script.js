const pages = document.querySelectorAll(".page");
const progressFill = document.getElementById("progress-fill");

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
  flower.setAttribute(
    "data-message",
    messages[Math.floor(Math.random() * messages.length)]
  );
});

document.getElementById("container").addEventListener("scroll", () => {
  const scrollTop = container.scrollTop;
  const maxScroll = container.scrollHeight - container.clientHeight;
  const percent = Math.min((scrollTop / maxScroll) * 100, 100);
  progressFill.style.width = percent + "%";
});
