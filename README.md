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

Das RSVP-Formular sendet aktuell per `POST` an ein Google-Apps-Script und nutzt ein verstecktes iframe als Ziel, damit die Besucher auf der Website bleiben.

## RSVP mit Google Sheets

Das Ziel-Sheet ist:

```text
https://docs.google.com/spreadsheets/d/1jmPmD1rBYOvuKitZi2UruszADXGgMgFdmgr6N1ahI1s/edit
```

Die Datei `google-apps-script-rsvp.gs` enthaelt ein passendes Google Apps Script fuer dieses Sheet.

Im Google Sheet sollten diese Spalten angelegt sein:

```text
timestamp | name | email | response | children | stay | source
```

So wird es verbunden:

1. Im Google Sheet auf `Extensions` -> `Apps Script` gehen.
2. Den Inhalt aus `google-apps-script-rsvp.gs` einfuegen.
3. Das Script schreibt standardmaessig in das erste Tabellenblatt. Wenn du ein bestimmtes Blatt verwenden willst, kannst du `SHEET_NAME` im Script setzen.
4. `Deploy` -> `New deployment` -> Typ `Web app` waehlen.
5. Zugriff auf `Anyone` setzen.
6. Die Web-App-URL kopieren.
7. Diese Web-App-URL in `index.html` beim RSVP-Formular als `action="..."` einsetzen.

Wenn du das Apps Script spaeter aenderst, musst du erneut deployen:

```text
Deploy -> Manage deployments -> Edit -> Version: New version -> Deploy
```
