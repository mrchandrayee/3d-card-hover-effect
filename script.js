const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const resetTilt = () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  card.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 18;
    const rotateX = (0.5 - y) * 18;
    card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
  });

  card.addEventListener("pointerleave", resetTilt);
  card.addEventListener("blur", resetTilt);
});

const toast = document.querySelector("#toast");
let toastTimer;
function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelector("#likeBtn").addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("is-on");
  notify(event.currentTarget.classList.contains("is-on") ? "You liked this effect" : "Like removed");
});
document.querySelector("#saveBtn").addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("is-on");
  notify(event.currentTarget.classList.contains("is-on") ? "Demo saved locally" : "Removed from saved");
});
document.querySelector("#shareBtn").addEventListener("click", async () => {
  if (navigator.share) {
    try { await navigator.share({ title: document.title, text: "Check out this 3D card hover effect!" }); }
    catch { /* Share dialog was dismissed. */ }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href);
      notify("Page link copied");
    } catch {
      notify("Share is not available in this browser");
    }
  }
});
