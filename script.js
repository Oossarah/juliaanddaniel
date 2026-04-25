const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
const form = document.querySelector(".rsvp-form");
const formNote = document.querySelector("[data-form-note]");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  de: {
    title: "Julia & Daniel | Hochzeitswochenende",
    description: "Eine mehrsprachige Hochzeitswebsite fuer Julia und Daniel.",
    "nav.weekend": "Wochenende",
    "nav.story": "Geschichte",
    "nav.travel": "Anreise",
    "nav.calendar": "Kalender",
    "nav.hotels": "Hotels",
    "hero.status": "<span>Wir</span><span>heiraten</span>",
    "hero.dateLocation": '7. August 2027<br><a href="https://maps.app.goo.gl/RWy8xYNb6xHkX5Hu6">Strobl, AT</a>',
    "hero.rsvp": "RSVP bis 1. Juli 2027",
    "weekend.title": "Das<br>Wochenende",
    "events.friday": "Freitag, 6. August",
    "events.welcome": "<strong>Willkommensparty</strong> | 18:00 - 20:00",
    "events.locationTba": "Location folgt",
    "events.map": '<a href="https://maps.app.goo.gl/RWy8xYNb6xHkX5Hu6">Karte zur Hochzeitslocation oeffnen</a>',
    "events.saturday": "Samstag, 7. August",
    "events.ceremony": "<strong>Trauung</strong> | 17:30",
    "events.venue": '<a href="https://maps.app.goo.gl/RWy8xYNb6xHkX5Hu6">Hochzeitslocation</a>',
    "events.exactMap": "Die genaue Adresse findet ihr in der Karte",
    "events.reception": "<strong>Feier</strong> | 18:15",
    "events.dinner": "Abendessen, Reden und Tanzen bis spaet",
    "events.sunday": "Sonntag, 8. August",
    "events.brunch": "<strong>Brunch</strong> | 11:30",
    "events.coffee": "Ein letzter Kaffee, bevor alle nach Hause fahren",
    "story.label": "Unsere Geschichte",
    "story.title": "Ein paar Worte vor dem grossen Tag.",
    "story.body": "Hier kann spaeter Julias und Daniels Geschichte stehen: wie sie sich kennengelernt haben, was dieses Wochenende bedeutet und warum sie es mit euch feiern moechten.",
    "travel.label": "Anreise",
    "travel.title": "Kommt entspannt an und bleibt in der Naehe.",
    "travel.stayTitle": "Uebernachten",
    "travel.stayBody": "Hotelvorschlaege und Zimmerinfos fuer Julias und Daniels Gaeste werden hier ergaenzt.",
    "travel.moveTitle": "Hinkommen",
    "travel.moveBody": "Details zur Anreise und zu moeglichen Shuttles werden hier hinzugefuegt.",
    "travel.wearTitle": "Dresscode",
    "travel.wearBody": "Festlich. Farbe, Freude und bequeme Tanzschuhe sind sehr willkommen.",
    "calendar.label": "Save the dates",
    "calendar.title": "August<br>2027",
    "calendar.month": "August 2027",
    "calendar.mon": "Mo",
    "calendar.tue": "Di",
    "calendar.wed": "Mi",
    "calendar.thu": "Do",
    "calendar.fri": "Fr",
    "calendar.sat": "Sa",
    "calendar.sun": "So",
    "calendar.welcome": "Willkommen",
    "calendar.wedding": "Hochzeit",
    "calendar.brunch": "Brunch",
    "calendar.note": "Julia und Daniel sind vom 1. bis 8. August vor Ort. Die Hochzeit findet am Samstag, 7. August 2027 statt.",
    "hotels.label": "Hotel Liste",
    "hotels.title": "Hotels",
    "hotels.subtitle": "Empfehlungen fuer euren Aufenthalt",
    "hotels.hotel": "Hotel",
    "hotels.area": "Ort",
    "hotels.distance": "Distanz",
    "hotels.note": "Info",
    "hotels.areaOne": "Nahe der Location",
    "hotels.noteOne": "Zimmerblock angefragt",
    "hotels.areaTwo": "Innenstadt",
    "hotels.noteTwo": "Sehr schoen fuer Paare",
    "hotels.areaThree": "Ruhige Lage",
    "hotels.noteThree": "Familienfreundlich",
    "hotels.areaFour": "Zentrum",
    "hotels.noteFour": "Gut fuer Gruppen",
    "hotels.small": "Bitte bucht fruehzeitig. Genauere Links und Preise koennen hier spaeter ergaenzt werden.",
    "rsvp.title": "Seid ihr dabei?",
    "rsvp.name": "Name",
    "rsvp.namePlaceholder": "Euer Name",
    "rsvp.email": "E-Mail",
    "rsvp.emailPlaceholder": "ihr@example.com",
    "rsvp.response": "Antwort",
    "rsvp.accept": "Wir sind gerne dabei",
    "rsvp.decline": "Leider koennen wir nicht kommen",
    "rsvp.button": "RSVP senden",
    "rsvp.thanks": "Danke. Diese Demo-Nachricht kann spaeter mit einem echten RSVP verbunden werden.",
    "footer.top": "Nach oben"
  },
  en: {
    title: "Julia & Daniel | Wedding Weekend",
    description: "A multilingual wedding website for Julia and Daniel.",
    "nav.weekend": "Weekend",
    "nav.story": "Story",
    "nav.travel": "Travel",
    "nav.calendar": "Calendar",
    "nav.hotels": "Hotels",
    "hero.status": "<span>We're getting</span><span>married</span>",
    "hero.dateLocation": '7 August 2027<br><a href="https://maps.app.goo.gl/RWy8xYNb6xHkX5Hu6">Strobl, AT</a>',
    "hero.rsvp": "RSVP by 1 July 2027",
    "weekend.title": "The<br>weekend",
    "events.friday": "Friday, August 6",
    "events.welcome": "<strong>Welcome Party</strong> | 6 - 8 PM",
    "events.locationTba": "Location to be announced",
    "events.map": '<a href="https://maps.app.goo.gl/RWy8xYNb6xHkX5Hu6">View wedding venue map</a>',
    "events.saturday": "Saturday, August 7",
    "events.ceremony": "<strong>Ceremony</strong> | 5:30 PM",
    "events.venue": '<a href="https://maps.app.goo.gl/RWy8xYNb6xHkX5Hu6">Wedding Venue</a>',
    "events.exactMap": "Open the map for the exact location",
    "events.reception": "<strong>Reception</strong> | 6:15 PM",
    "events.dinner": "Dinner, speeches, and dancing late into the night",
    "events.sunday": "Sunday, August 8",
    "events.brunch": "<strong>Brunch</strong> | 11:30 AM",
    "events.coffee": "One last coffee before everyone heads home",
    "story.label": "Our Story",
    "story.title": "A small note before the big day.",
    "story.body": "This is where Julia and Daniel's story can go later: how they met, what this weekend means, and why they want to celebrate it with you.",
    "travel.label": "Travel",
    "travel.title": "Arrive relaxed and stay close.",
    "travel.stayTitle": "Stay",
    "travel.stayBody": "Hotel recommendations and room details for Julia and Daniel's guests will be added here.",
    "travel.moveTitle": "Getting there",
    "travel.moveBody": "Travel details and possible shuttle information will be added here.",
    "travel.wearTitle": "Dress code",
    "travel.wearBody": "Festive. Color, joy, and comfortable dancing shoes are very welcome.",
    "calendar.label": "Save the dates",
    "calendar.title": "August<br>2027",
    "calendar.month": "August 2027",
    "calendar.mon": "Mon",
    "calendar.tue": "Tue",
    "calendar.wed": "Wed",
    "calendar.thu": "Thu",
    "calendar.fri": "Fri",
    "calendar.sat": "Sat",
    "calendar.sun": "Sun",
    "calendar.welcome": "Welcome",
    "calendar.wedding": "Wedding",
    "calendar.brunch": "Brunch",
    "calendar.note": "Julia and Daniel will be on site from August 1 to 8. The wedding takes place on Saturday, August 7, 2027.",
    "hotels.label": "Hotel List",
    "hotels.title": "Hotels",
    "hotels.subtitle": "Recommendations for your stay",
    "hotels.hotel": "Hotel",
    "hotels.area": "Area",
    "hotels.distance": "Distance",
    "hotels.note": "Info",
    "hotels.areaOne": "Near the venue",
    "hotels.noteOne": "Room block requested",
    "hotels.areaTwo": "City center",
    "hotels.noteTwo": "Lovely for couples",
    "hotels.areaThree": "Quiet area",
    "hotels.noteThree": "Family friendly",
    "hotels.areaFour": "Center",
    "hotels.noteFour": "Good for groups",
    "hotels.small": "Please book early. More exact links and prices can be added here later.",
    "rsvp.title": "Can you make it?",
    "rsvp.name": "Name",
    "rsvp.namePlaceholder": "Your name",
    "rsvp.email": "Email",
    "rsvp.emailPlaceholder": "you@example.com",
    "rsvp.response": "Response",
    "rsvp.accept": "Joyfully accepts",
    "rsvp.decline": "Regretfully declines",
    "rsvp.button": "Send RSVP",
    "rsvp.thanks": "Thank you. This demo message can later be connected to a real RSVP.",
    "footer.top": "Back to top"
  },
  es: {
    title: "Julia & Daniel | Fin de Semana de Boda",
    description: "Una web de boda multilingue para Julia y Daniel.",
    "nav.weekend": "Fin de semana",
    "nav.story": "Historia",
    "nav.travel": "Viaje",
    "nav.calendar": "Calendario",
    "nav.hotels": "Hoteles",
    "hero.status": "<span>Nos</span><span>casamos</span>",
    "hero.dateLocation": '7 de agosto de 2027<br><a href="https://maps.app.goo.gl/RWy8xYNb6xHkX5Hu6">Strobl, AT</a>',
    "hero.rsvp": "RSVP antes del 1 de julio de 2027",
    "weekend.title": "El<br>fin de semana",
    "events.friday": "Viernes, 6 de agosto",
    "events.welcome": "<strong>Fiesta de bienvenida</strong> | 18:00 - 20:00",
    "events.locationTba": "Lugar por confirmar",
    "events.map": '<a href="https://maps.app.goo.gl/RWy8xYNb6xHkX5Hu6">Abrir mapa del lugar de la boda</a>',
    "events.saturday": "Sabado, 7 de agosto",
    "events.ceremony": "<strong>Ceremonia</strong> | 17:30",
    "events.venue": '<a href="https://maps.app.goo.gl/RWy8xYNb6xHkX5Hu6">Lugar de la boda</a>',
    "events.exactMap": "Abrid el mapa para ver la direccion exacta",
    "events.reception": "<strong>Recepcion</strong> | 18:15",
    "events.dinner": "Cena, discursos y baile hasta tarde",
    "events.sunday": "Domingo, 8 de agosto",
    "events.brunch": "<strong>Brunch</strong> | 11:30",
    "events.coffee": "Un ultimo cafe antes de volver a casa",
    "story.label": "Nuestra historia",
    "story.title": "Unas palabras antes del gran dia.",
    "story.body": "Aqui podra ir mas adelante la historia de Julia y Daniel: como se conocieron, que significa este fin de semana y por que quieren celebrarlo con vosotros.",
    "travel.label": "Viaje",
    "travel.title": "Llegad con calma y quedaos cerca.",
    "travel.stayTitle": "Alojamiento",
    "travel.stayBody": "Aqui se anadiran recomendaciones de hoteles e informacion de habitaciones para los invitados de Julia y Daniel.",
    "travel.moveTitle": "Como llegar",
    "travel.moveBody": "Aqui se anadiran detalles de viaje y posible informacion sobre traslados.",
    "travel.wearTitle": "Codigo de vestimenta",
    "travel.wearBody": "Festivo. Color, alegria y zapatos comodos para bailar son muy bienvenidos.",
    "calendar.label": "Reservad las fechas",
    "calendar.title": "Agosto<br>2027",
    "calendar.month": "Agosto 2027",
    "calendar.mon": "Lun",
    "calendar.tue": "Mar",
    "calendar.wed": "Mie",
    "calendar.thu": "Jue",
    "calendar.fri": "Vie",
    "calendar.sat": "Sab",
    "calendar.sun": "Dom",
    "calendar.welcome": "Bienvenida",
    "calendar.wedding": "Boda",
    "calendar.brunch": "Brunch",
    "calendar.note": "Julia y Daniel estaran alli del 1 al 8 de agosto. La boda sera el sabado, 7 de agosto de 2027.",
    "hotels.label": "Lista de hoteles",
    "hotels.title": "Hoteles",
    "hotels.subtitle": "Recomendaciones para vuestra estancia",
    "hotels.hotel": "Hotel",
    "hotels.area": "Zona",
    "hotels.distance": "Distancia",
    "hotels.note": "Info",
    "hotels.areaOne": "Cerca del lugar",
    "hotels.noteOne": "Bloque de habitaciones solicitado",
    "hotels.areaTwo": "Centro",
    "hotels.noteTwo": "Muy bonito para parejas",
    "hotels.areaThree": "Zona tranquila",
    "hotels.noteThree": "Ideal para familias",
    "hotels.areaFour": "Centro",
    "hotels.noteFour": "Bueno para grupos",
    "hotels.small": "Reservad con antelacion. Mas enlaces y precios exactos se podran anadir aqui mas adelante.",
    "rsvp.title": "Podeis venir?",
    "rsvp.name": "Nombre",
    "rsvp.namePlaceholder": "Vuestro nombre",
    "rsvp.email": "Email",
    "rsvp.emailPlaceholder": "vosotros@example.com",
    "rsvp.response": "Respuesta",
    "rsvp.accept": "Aceptamos con alegria",
    "rsvp.decline": "Lamentablemente no podemos asistir",
    "rsvp.button": "Enviar RSVP",
    "rsvp.thanks": "Gracias. Este mensaje de demo se podra conectar mas adelante a un RSVP real.",
    "footer.top": "Volver arriba"
  }
};

let activeLanguage = localStorage.getItem("wedding-language") || "de";

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.de;
  activeLanguage = language;
  document.documentElement.lang = language;
  document.title = dictionary.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (key && dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });

  localStorage.setItem("wedding-language", language);
};

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang || "de");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = translations[activeLanguage]["rsvp.thanks"];
});

window.addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;
    header?.classList.toggle("is-scrolled", currentScrollY > 12);
  },
  { passive: true }
);

setLanguage(activeLanguage);
