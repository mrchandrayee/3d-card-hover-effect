# 3D Card Hover Effect — HTML & CSS

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/3d-card-hover-effect/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded video showing two fantasy book-cover cards with a 3D hover/parallax effect.

## What was visible in the video

The HTML code panel shows this structure for each card:

```html
<div class="card">
  <div class="wrapper">
    <img src="./Images/dark_rider-cover.jpg" class="cover-image" />
  </div>
  <img src="./Images/dark_rider-title.png" class="title" />
  <img src="./Images/dark_rider-character.webp" class="character" />
</div>
```

The second card follows the same pattern using `force_mage` asset names.

The original CSS panel is not shown, so the 3D hover behavior is reconstructed using CSS transforms, perspective, and a small pointer-position script.

## Features
- Two locally bundled book-cover images cropped from the supplied video.
- 3D tilt based on pointer position.
- Hover lift, zoom, and diagonal shine effect.
- Keyboard focus support.
- Like, Save, and Share demo controls.
- Responsive layout and reduced-motion support.
- No dependencies or build tools required.

## Run

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
3d-card-hover-effect/
├── index.html
├── style.css
├── script.js
├── README.md
└── Images/
    ├── dark_rider-cover.jpg
    └── force_mage-cover.jpg
```

## Reconstruction note

The video visibly provides the HTML card structure and image asset names, but not the full CSS/JavaScript source. The bundled cover images are crops from the video frame; the hover interaction is a functional reconstruction, not the creator's original source files.
