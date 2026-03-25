import { getLevelForDate } from "./levels.js";
import { Game, renderRulesContent, renderStatsContent } from "./game.js";

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------

function init(): void {
  const today = new Date();
  const level = getLevelForDate(today);
  const container = document.getElementById("game-container")!;

  new Game(container, level);

  setupModals();
}

// ---------------------------------------------------------------------------
// Modal wiring
// ---------------------------------------------------------------------------

function setupModals(): void {
  const backdrop = document.getElementById("modal-backdrop")!;

  function openModal(id: string): void {
    const modal = document.getElementById(id)!;
    modal.classList.remove("hidden");
    backdrop.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }

  function closeModal(id: string): void {
    const modal = document.getElementById(id)!;
    modal.classList.add("hidden");
    backdrop.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }

  // Rules
  document.getElementById("rules-btn")!.addEventListener("click", () => {
    renderRulesContent(document.getElementById("rules-body")!);
    openModal("rules-modal");
  });

  // Stats
  document.getElementById("stats-btn")!.addEventListener("click", () => {
    renderStatsContent(document.getElementById("stats-body")!);
    openModal("stats-modal");
  });

  // Close buttons
  document.querySelectorAll<HTMLButtonElement>(".modal-close").forEach((btn) => {
    const target = btn.dataset.close!;
    btn.addEventListener("click", () => closeModal(target));
  });

  // Backdrop click closes any open modal
  backdrop.addEventListener("click", () => {
    document.querySelectorAll<HTMLElement>(".modal:not(.hidden)").forEach((m) => {
      closeModal(m.id);
    });
  });

  // Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll<HTMLElement>(".modal:not(.hidden)").forEach((m) => {
        closeModal(m.id);
      });
    }
  });
}

init();
