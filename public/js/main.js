(() => {
  "use strict";

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Hero animation
  const hero = document.querySelector(".hero");
  const heroTitle = document.getElementById("heroTitle");
  requestAnimationFrame(() => {
    heroTitle?.classList.add("is-show");
    hero?.classList.add("is-ready");
  });

  // Mobile menu
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menuBtn");
  const gnav = document.getElementById("gnav");

  const closeMenu = () => {
    header?.classList.remove("is-open");
    menuBtn?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  menuBtn?.addEventListener("click", () => {
    const open = header?.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  });

  gnav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Fade-in on scroll
  const fadeEls = document.querySelectorAll(".js-fadein");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-show");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    fadeEls.forEach((el) => io.observe(el));
  } else {
    fadeEls.forEach((el) => el.classList.add("is-show"));
  }

  // History tabs
  const tabs = document.querySelectorAll(".history__tab");
  const panels = document.querySelectorAll(".history__panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.tab;
      tabs.forEach((t) => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", t === tab ? "true" : "false");
      });
      panels.forEach((panel) => {
        const match = panel.id === `panel-${id}`;
        panel.classList.toggle("is-active", match);
        panel.hidden = !match;
      });
    });
  });

  // Smooth scroll offset for fixed header (native smooth + focus)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", id);
    });
  });
})();
