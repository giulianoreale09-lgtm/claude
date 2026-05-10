# J.A.R.V.I.S — Neural Interface

> *Just A Rather Very Intelligent System*

Ein modernes, KI-gestütztes Neural Interface im Sci-Fi Stil — mit 3D-Gehirn, Selbstlernfunktion und Sprachsteuerung.

![Preview](https://img.shields.io/badge/Status-Online-00ff88?style=flat-square&logo=circle)
![Neurons](https://img.shields.io/badge/Neuronen-Selbstlernend-00d4ff?style=flat-square)
![Voice](https://img.shields.io/badge/Sprache-Deutsch-0095cc?style=flat-square)

---

## Features

- **3D Neuronales Netz** — rotierendes Gehirn auf Fibonacchi-Kugel, per Maus/Touch drehbar
- **Selbstlernend** — Neuronen wachsen kontinuierlich, Synapsen stärken sich (Hebbsches Lernen)
- **Expandiert beim Denken** — Gehirn vergrößert sich beim Verarbeiten einer Anfrage
- **Zieht sich zusammen beim Antworten** — fokussiert sich beim Formulieren der Antwort
- **Immer online** — Google Search Tool integriert für aktuelle Infos
- **Sprachsteuerung** — Mikrofon-Eingabe (Chrome) + TTS-Ausgabe auf Deutsch
- **Custom Cursor** — animierter Sci-Fi Cursor
- **Boot Sequence** — animierter Startbildschirm
- **HUD Overlays** — Neuronenzahl, Synapsen, Auslastung, Konfidenz

---

## Setup

### 1. Kostenlosen API-Key holen

Gehe auf [aistudio.google.com/apikey](https://aistudio.google.com/apikey) und erstelle einen **Gemini API-Key**.  
Kostenlos, dauert 2 Minuten, kein Kreditkarte nötig.

### 2. Lokal starten

```bash
# Einfach die Datei in Chrome öffnen
open index.html
# oder
double-click index.html
```

> **Wichtig:** Chrome verwenden (für Spracherkennung + CORS)

### 3. GitHub Pages (Optional)

```
Settings → Pages → Branch: main → / (root) → Save
```

Dann ist Jarvis unter `https://dein-username.github.io/jarvis` erreichbar.

---

## Steuerung

| Aktion | Beschreibung |
|--------|-------------|
| **Maus ziehen** auf Gehirn | Gehirn rotieren |
| **Tippen + Enter** | Nachricht senden |
| **◉ Mikrofon** | Sprachsteuerung (Chrome) |
| **▶ Senden** | Nachricht absenden |

---

## Tech Stack

- Pure **Vanilla JS** — kein Framework, keine Dependencies
- **Gemini 2.0 Flash** API mit Google Search Tool
- **3D Canvas** — eigene Projektionsmatrix, Fibonacci-Kugel
- **Web Speech API** — Spracheingabe & TTS
- **CSS Animations** — Boot Sequence, Cursor, Pulse Effects

---

## Selbstlernmechanismus

```
Alle 3.5 Sekunden:
├── Synaptische Stärkung (Hebbsches Lernen)
├── Synaptisches Pruning (schwache Verbindungen entfernen)
├── Neuronenwachstum (+1 Neuron bis max. 200)
└── Zufälliger Aktivierungsfunke

Bei jeder Anfrage:
├── +2 neue Neuronen
├── Verbindungsgewichte erhöhen
└── Gehirn expandiert (Scale 1.42x)

Bei jeder Antwort:
├── Weitere Gewichtsstärkung
└── Gehirn kontrahiert (Scale 0.72x)
```

---

## Lizenz

MIT — frei verwendbar.
