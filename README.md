# J.A.R.V.I.S — Offline Neural Interface

> *Just A Rather Very Intelligent System — vollständig offline, kein API-Key nötig*

![Status](https://img.shields.io/badge/Status-Offline%20Ready-00ff88?style=flat-square)
![API](https://img.shields.io/badge/API--Key-Nicht%20nötig-00d4ff?style=flat-square)
![Brain](https://img.shields.io/badge/Neuronen-Selbstlernend-ff9f0a?style=flat-square)

---

## Features

- **100% Offline** — kein API-Key, keine externe KI
- **Eingebautes Wissen** — Physik, Chemie, Biologie, Mathe, Informatik, KI, Raumfahrt, Geschichte, Philosophie, Wirtschaft
- **URL-Loader** — Links eingeben → Jarvis liest & analysiert den Inhalt → speichert lokal
- **Selbstlernend** — Neuronen wachsen, Synapsen stärken sich bei jeder Interaktion
- **3D Gehirn** — rotierendes Fibonacchi-Kugel-Netz, per Maus/Touch drehbar
- **Expandiert beim Denken** — Gehirn wächst auf 140% beim Verarbeiten
- **Zieht sich zusammen** beim Antworten (74%)
- **Oranger Reading-Ring** beim URL-Laden
- **Sprachsteuerung** — Mikrofon + TTS Deutsch (Chrome)
- **Custom Cursor** — animierter Sci-Fi Cursor mit Nachläufer
- **Boot Sequence** — animierter Startbildschirm

---

## Setup — Einfacher geht's nicht

```bash
# Einfach öffnen:
open index.html
# oder Doppelklick auf index.html
```

**Kein API-Key. Keine Installation. Kein Server.** Einfach die HTML-Datei öffnen.

> Chrome empfohlen (für Spracherkennung)

---

## GitHub Pages

1. Repository erstellen
2. `index.html` hochladen
3. `Settings → Pages → Branch: main → Save`
4. Läuft auf `https://USERNAME.github.io/REPO`

---

## URL-Loader nutzen

1. URL in das Feld oben rechts eingeben (z.B. `https://de.wikipedia.org/wiki/KI`)
2. **LADEN** drücken
3. Jarvis liest den Inhalt via CORS-Proxy
4. Danach Fragen dazu stellen — Jarvis filtert relevante Abschnitte heraus
5. Geladene Seiten erscheinen als Chips in der Wissensdatenbank

---

## Wissensbereiche (eingebaut)

| Bereich | Themen |
|---------|--------|
| Physik | Relativität, Quantenmechanik, Gravitation, Thermodynamik |
| Chemie | Atome, Verbindungen, Reaktionen |
| Biologie | Zellen, DNA, Evolution, Gehirn |
| Mathematik | Grundlagen, Statistik, Geometrie, Wahrscheinlichkeit |
| Informatik | Algorithmen, Programmierung, KI/ML, Netzwerke, Sicherheit |
| Raumfahrt | Artemis, ISS, Mars, Raketenantrieb |
| Geschichte | WW1, WW2, Kalter Krieg, Internet-Geschichte |
| Philosophie | Sokrates, Kant, Nietzsche, Existentialismus |
| Wirtschaft | BIP, Finanzen, Tech-Branche, Startups |
| Aktuelles | KI 2024, Klima, Geopolitik |

---

## Tech

- Pure **Vanilla JS** — zero dependencies
- **3D Canvas** — eigene Projektionsmatrix
- **CORS Proxy** — allorigins.win für URL-Laden
- **Web Speech API** — Sprachein/-ausgabe
- Läuft komplett im Browser, kein Server nötig

---

MIT License
