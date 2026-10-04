
---

# zentry-clone

```markdown
# 🎮 Zentry Animated Gaming Web Experience (Clone)

A visually stunning, award-winning inspired gaming website featuring 3D scroll animations, interactive video morphing, clip-path masks, and micro-interactions powered by GSAP.

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react)
![GSAP](https://img.shields.io/badge/Animations-GSAP%20%7C%20ScrollTrigger-88CE02?style=for-the-badge&logo=greensock)
![TailwindCSS](https://img.shields.io/badge/Styles-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwindcss)

---

## 📌 Features

* **3D Scroll & Timeline Animations:** Smooth scroll-driven animations using GSAP `ScrollTrigger` and custom timeline contexts.
* **Interactive Video Hero Section:** Clip-path video zooming and seamless background video switching upon user interaction.
* **Animated Typography:** Word-by-word 3D rotational text entry animations.
* **Bento Grid Showcase:** Interactive grid components with tilt effects and video previews.
* **Ambient Audio Player:** Toggleable background music with animated sound wave visualizers.

---

## 🛠️ Tech Stack

* **Framework:** React 18, Vite
* **Animation Library:** GSAP (GreenSock), `@gsap/react`, ScrollTrigger
* **Styling:** Tailwind CSS v3, PostCSS, Autoprefixer
* **Icons & Hooks:** React Icons, `react-use`

---

## 📂 Project Structure

```text
zentry-clone/
├── public/
│   ├── audio/        # Background audio loops
│   ├── fonts/        # Custom typography fonts
│   ├── img/          # Asset imagery
│   └── videos/       # Hero & Feature background videos
└── src/
    ├── components/
    │   ├── About.jsx
    │   ├── AnimatedTitle.jsx
    │   ├── Button.jsx
    │   ├── Features.jsx
    │   ├── Hero.jsx
    │   ├── Navbar.jsx
    │   └── Story.jsx
    └── App.jsx
