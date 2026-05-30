document.documentElement.classList.add("js");

const languageButton = document.querySelector(".language-toggle");
const menuButton = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelectorAll(".nav-links a");
const translatable = document.querySelectorAll("[data-de][data-en]");
const form = document.querySelector("#rsvpForm");
const statusMessage = document.querySelector("#formStatus");
const infoSection = document.querySelector("#infos");
const darkSections = document.querySelectorAll(".dark");
const navShell = document.querySelector(".nav-shell");

let language = "de";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  translatable.forEach((node) => {
    node.innerHTML = node.dataset[language];
  });
  languageButton.textContent = language === "de" ? "EN" : "DE";
}

languageButton.addEventListener("click", () => {
  setLanguage(language === "de" ? "en" : "de");
});

menuButton?.addEventListener("click", () => {
  const menuOpen = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(menuOpen));
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

if (infoSection && "IntersectionObserver" in window) {
  const infoObserver = new IntersectionObserver(
    ([entry]) => {
      infoSection.classList.toggle("is-visible", entry.isIntersecting);
    },
    { rootMargin: "-20% 0px -30%", threshold: 0.15 }
  );

  infoObserver.observe(infoSection);
} else {
  infoSection?.classList.add("is-visible");
}

function updateNavigationTheme() {
  if (!navShell || !darkSections.length) return;

  const navRect = navShell.getBoundingClientRect();
  const navMiddle = navRect.top + navRect.height / 2;
  const navOnDark = [...darkSections].some((section) => {
    const sectionRect = section.getBoundingClientRect();
    return sectionRect.top <= navMiddle && sectionRect.bottom >= navMiddle;
  });

  document.body.classList.toggle("nav-on-dark", navOnDark);
}

if (darkSections.length) {
  updateNavigationTheme();
  window.addEventListener("scroll", updateNavigationTheme, { passive: true });
  window.addEventListener("resize", updateNavigationTheme);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent("RSVP Julia & Daniel");
  const body = encodeURIComponent(
    [
      `Name: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Antwort: ${data.get("answer")}`,
      `Kinder: ${data.get("children") || "-"}`,
      `Zeitraum: ${data.get("stay") || "-"}`,
    ].join("\n")
  );

  window.location.href = `mailto:julia.daniel@email.at?subject=${subject}&body=${body}`;
  statusMessage.textContent =
    language === "de"
      ? "Danke! Dein E-Mail-Programm wird geöffnet."
      : "Thank you! Your email app is opening.";
});
