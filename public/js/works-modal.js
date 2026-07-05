(() => {
  "use strict";

  if (typeof WORKS_DATA === "undefined") return;

  const modal = document.getElementById("workModal");
  if (!modal) return;

  const overlay = modal.querySelector(".work-modal__overlay");
  const closeBtn = modal.querySelector(".work-modal__close");
  const titleEl = modal.querySelector(".work-modal__title");
  const detailEl = modal.querySelector("[data-field='detail']");
  const toolsEl = modal.querySelector("[data-field='tools']");
  const teamEl = modal.querySelector("[data-field='team']");
  let lastFocus = null;

  const openModal = (id) => {
    const data = WORKS_DATA[id];
    if (!data) return;

    titleEl.textContent = data.title;
    detailEl.textContent = data.detail || "—";
    toolsEl.textContent = data.tools || "—";
    teamEl.textContent = data.team || "—";

    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("is-modal-open");
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("is-modal-open");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  };

  document.querySelectorAll("[data-work-id]").forEach((card) => {
    const id = card.dataset.workId;
    if (!WORKS_DATA[id]) return;

    const footer = document.createElement("div");
    footer.className = "work-card__footer";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "work-card__detail-btn";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.innerHTML = '<span>詳細を見る</span><span class="work-card__detail-icon" aria-hidden="true">+</span>';

    btn.addEventListener("click", () => openModal(id));
    footer.appendChild(btn);

    const links = card.querySelector(".work-card__links");
    if (links) {
      card.insertBefore(footer, links);
    } else {
      card.appendChild(footer);
    }
  });

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (!modal.hidden && e.key === "Escape") closeModal();
  });
})();
