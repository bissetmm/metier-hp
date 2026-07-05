(() => {
  "use strict";

  if (typeof LABS_DATA === "undefined") return;

  const listEl = document.getElementById("labsList");
  if (!listEl) return;

  const LINK_LABELS = {
    demo: "Live Demo",
    github: "GitHub",
    note: "制作記事 (note)",
    hatena: "制作記事 (Hatena)",
  };

  const renderLinks = (links) => {
    const items = Object.entries(LINK_LABELS)
      .filter(([key]) => links?.[key])
      .map(
        ([key, label]) =>
          `<a href="${links[key]}" target="_blank" rel="noopener noreferrer" class="link-arrow lab-card__link lab-card__link--${key}">${label}</a>`
      );

    if (items.length === 0) {
      return `<p class="lab-card__soon">デモ・リポジトリ公開準備中</p>`;
    }

    return `<div class="lab-card__links">${items.join("")}</div>`;
  };

  const renderTech = (tech) =>
    tech.map((t) => `<span>${t}</span>`).join("");

  listEl.innerHTML = LABS_DATA.map(
    (lab) => `
    <article class="lab-card js-fadein" data-lab-id="${lab.id}">
      <div class="lab-card__meta">
        <span class="lab-card__tag">${lab.tag}</span>
        ${lab.year ? `<span class="lab-card__year">${lab.year}</span>` : ""}
      </div>
      <h3 class="lab-card__title">${lab.title}</h3>
      <p class="lab-card__desc">${lab.desc}</p>
      ${
        lab.highlights
          ? `<p class="lab-card__highlights">${lab.highlights}</p>`
          : ""
      }
      <div class="lab-card__tech">${renderTech(lab.tech)}</div>
      ${renderLinks(lab.links)}
    </article>`
  ).join("");

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
    listEl.querySelectorAll(".js-fadein").forEach((el) => io.observe(el));
  } else {
    listEl.querySelectorAll(".js-fadein").forEach((el) =>
      el.classList.add("is-show")
    );
  }
})();
