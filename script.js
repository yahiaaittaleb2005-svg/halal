document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    const response = await fetch("/create-checkout-session", { method: "POST" });
    const session = await response.json();
    window.location.href = session.url;
  });
});
