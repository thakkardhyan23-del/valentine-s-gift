document.addEventListener("DOMContentLoaded", () => {
  const startDate = new Date("2026-01-24T00:00:00");
  const timerEl = document.getElementById("timer");
  const editBtn = document.getElementById("edit-btn");

  if (!timerEl) return; // timer not on this page

  function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

    if (diff < 0) {
      timerEl.textContent = "about to begin 💙";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= 1000 * 60 * 60 * 24;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= 1000 * 60 * 60;

    const minutes = Math.floor(diff / (1000 * 60));
    diff %= 1000 * 60;

    const seconds = Math.floor(diff / 1000);

    timerEl.textContent =
      `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  updateTimer();
  setInterval(updateTimer, 1000);

  editBtn?.addEventListener("click", () => {
    alert("are you questioning my memory or loyalty");
  });
});
