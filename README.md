# Funngro Website

A two-page production website built for **Funngro** — India's #1 teen freelancing platform where 70 lakh young Indians earn real money by working with India's biggest brands.

> 🦈 **As Seen on Shark Tank India Season 2** — Backed by Amit Jain & Namita Thapar

---

## 🌐 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page + About Us, Shark Tank story, Founders, Timeline, Testimonials |
| **Discover** | `/discover` | Projects & opportunities dashboard |

### 📱 Responsive Device Serving
- **Desktop** (≥ 768px) → Desktop-optimised Stitch screen
- **Mobile** (< 768px) → Mobile-optimised Stitch screen

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite 5 |
| Routing | React Router v6 |
| Styling | Vanilla CSS-in-JS (Blockbuster Cyber-Emerald design system) |
| Fonts | Outfit + Hanken Grotesk (Google Fonts) |
| Deployment | Python Flask |

---

## 🚀 Getting Started

### Development
```bash
npm install
npm run dev
# → http://localhost:5173
```

### Production Build + Python Server
```bash
npm run build
pip install flask
python server.py
# → http://localhost:5000
```

---

## 📁 Project Structure

```
├── public/
│   ├── LOGO.JPG                         # Funngro brand logo
│   ├── desktop-home.html                # Stitch Desktop Home screen
│   ├── mobile-home.html                 # Stitch Mobile Home screen
│   ├── desktop-discover.html            # Stitch Desktop Discover screen
│   ├── mobile-discover.html             # Stitch Mobile Discover screen
│   └── stitch_funngro_revamp_website/   # Testimonial images (10 real earners)
├── src/
│   ├── pages/
│   │   ├── Home.jsx                     # Page 1 — Home + About Us
│   │   └── Discover.jsx                 # Page 2 — Discover Projects
│   └── components/
│       ├── NavBar.jsx                   # Fixed glassmorphic navigation
│       ├── AboutSection.jsx             # About · Founders · Timeline · Testimonials
│       └── AutoResizeIframe.jsx         # Auto-height iframe wrapper
├── server.py                            # Python Flask production server
├── requirements.txt                     # Python dependencies
└── vite.config.js
```

---

## 👥 Contributors

| Contributor | Role |
|-------------|------|
| [@manasmalla1316](https://github.com/manasmalla1316) | Co-creator & Developer |
| [@charandevarakonda10](https://github.com/charandevarakonda10) | Co-creator & Developer |

---

## 🏢 Organization

Built under [The Ignite Club](https://github.com/the-ignite-club)

---

## 📄 License

MIT © Funngro Innovations Pvt Ltd
