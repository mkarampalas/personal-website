const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const yearEl = document.getElementById("year");
const bookingForm = document.querySelector(".booking-form");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("scrolled", window.scrollY > 24);
  },
  { passive: true }
);

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  mobileNav.hidden = isOpen;
  document.body.style.overflow = isOpen ? "" : "hidden";
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
    mobileNav.hidden = true;
    document.body.style.overflow = "";
  });
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.toggle("is-active", b === btn);
    });

    document.querySelectorAll(".gallery-item").forEach((item) => {
      const category = item.dataset.category;
      const show = filter === "all" || category === filter;
      item.classList.toggle("is-hidden", !show);
    });
  });
});

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert(
    "Thanks! This is a demo booking form. In production, this would connect to Vagaro, Square, or GlossGenius."
  );
});
