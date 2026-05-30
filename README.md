# Julia & Daniel Wedding Website

Statische Hochzeitswebsite fuer Julia und Daniel.

## Dateien

- `index.html` - Seitenstruktur und Inhalte
- `styles.css` - Layout, Farben, Typografie und Animationen
- `script.js` - Sprachwechsel, RSVP-Mailto und Scroll-Effekte
- `assets/` - Bilder fuer den Story-Bereich

## Lokal ansehen

Die Website kann direkt im Browser geoeffnet werden:

```text
index.html
```

Alternativ ueber einen lokalen Server:

```bash
python3 -m http.server 4174
```

Dann im Browser oeffnen:

```text
http://127.0.0.1:4174/
```

## Auf GitHub Pages veroeffentlichen

1. Neues GitHub Repository erstellen.
2. Alle Dateien aus diesem Ordner hochladen.
3. In GitHub unter `Settings` -> `Pages` gehen.
4. Als Source `Deploy from a branch` waehlen.
5. Branch `main` und Ordner `/root` auswaehlen.
6. Speichern. Nach kurzer Zeit ist die Website ueber die GitHub-Pages-URL erreichbar.

## Hinweise

Die Website verwendet externe Fonts von Google Fonts und Adobe Typekit. Dafuer braucht die veroeffentlichte Seite Internetzugriff.

Das RSVP-Formular oeffnet aktuell eine vorausgefuellte E-Mail via `mailto:`. Fuer ein echtes Formular mit Speicherung oder automatischem Versand waere spaeter ein Formular-Service oder Backend noetig.
