document.documentElement.classList.add("js");

const languageButton = document.querySelector(".language-toggle");
const menuButton = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelectorAll(".nav-links a");
const translatable = document.querySelectorAll("[data-de][data-en]");
const placeholderNodes = document.querySelectorAll(
  "[data-placeholder-de][data-placeholder-en]"
);
const form = document.querySelector("#rsvpForm");
const statusMessage = document.querySelector("#formStatus");
const plusOneSelect = document.querySelector("#plusOneSelect");
const childrenSelect = document.querySelector("#childrenSelect");
const stayInput = document.querySelector("#stayInput");
const legacyPlusOneField = document.querySelector("#legacyPlusOneField");
const legacyChildrenField = document.querySelector("#legacyChildrenField");
const legacyStayField = document.querySelector("#legacyStayField");
const infoSection = document.querySelector("#infos");
const darkSections = document.querySelectorAll(".dark");
const navShell = document.querySelector(".nav-shell");
const passwordOverlay = document.querySelector("#passwordOverlay");
const passwordForm = document.querySelector("#passwordForm");
const passwordInput = document.querySelector("#sitePassword");
const passwordError = document.querySelector("#passwordError");
const sitePassword = "07082027";
const passwordStorageKey = "julia-daniel-password-ok";
const browserLanguages = navigator.languages?.length
  ? navigator.languages
  : [navigator.language || ""];
const prefersGerman = browserLanguages.some((browserLanguage) =>
  browserLanguage.toLowerCase().startsWith("de")
);

let language = prefersGerman ? "de" : "en";

function unlockSite() {
  sessionStorage.setItem(passwordStorageKey, "true");
  passwordInput?.blur();
  passwordOverlay?.classList.remove("is-visible");
  document.body.classList.remove("password-locked");

  const resetScroll = () => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.documentElement.scrollLeft = 0;
    document.body.scrollTop = 0;
    document.body.scrollLeft = 0;
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  };

  resetScroll();
  window.requestAnimationFrame(resetScroll);
  window.setTimeout(resetScroll, 250);
}

if (passwordOverlay && sessionStorage.getItem(passwordStorageKey) !== "true") {
  passwordOverlay.classList.add("is-visible");
  document.body.classList.add("password-locked");
  window.setTimeout(() => passwordInput?.focus(), 250);
}

passwordForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const typedPassword = passwordInput.value.trim().toLowerCase();

  if (typedPassword === sitePassword) {
    unlockSite();
    return;
  }

  passwordError.textContent =
    language === "de" ? "Bitte versucht es nochmal." : "Please try again.";
  passwordInput.select();
});

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  translatable.forEach((node) => {
    node.innerHTML = node.dataset[language];
  });
  placeholderNodes.forEach((node) => {
    node.placeholder =
      language === "de" ? node.dataset.placeholderDe : node.dataset.placeholderEn;
  });
  languageButton.textContent = language === "de" ? "EN" : "DE";
}

languageButton.addEventListener("click", () => {
  setLanguage(language === "de" ? "en" : "de");
});

setLanguage(language);

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

function syncRsvpFields() {
  if (legacyPlusOneField && plusOneSelect) {
    legacyPlusOneField.value = plusOneSelect.value;
  }

  if (legacyChildrenField && childrenSelect) {
    legacyChildrenField.value = childrenSelect.value;
  }

  if (legacyStayField && stayInput) {
    legacyStayField.value = stayInput.value;
  }
}

plusOneSelect?.addEventListener("change", syncRsvpFields);
childrenSelect?.addEventListener("change", syncRsvpFields);
stayInput?.addEventListener("input", syncRsvpFields);
syncRsvpFields();

form.addEventListener("submit", () => {
  syncRsvpFields();
  statusMessage.textContent =
    language === "de"
      ? "Danke, deine Zusage wurde gesendet."
      : "Thank you, your RSVP has been sent.";

  window.setTimeout(() => {
    form.reset();
  }, 600);
});
