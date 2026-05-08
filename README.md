<!-- Creative README: enhanced with animated/3D demo suggestions -->

# Academic Plus ✨

A modern student-management and learning platform with a public website, admin panel, and student portal — now presented with a creative README that highlights interactive 3D/animated demo ideas and quick previews you can run locally.

![Hero GIF placeholder](assets/readme-hero.gif)

Why this README is different
- It shows quick, copyable 3D animation snippets you can preview locally.
- It suggests lightweight options (CSS 3D) and richer options (Three.js / Lottie) to enhance your docs and demos.
- It keeps the full project reference and run instructions below.

---

## Animated Preview — Try a CSS 3D cube locally

Create a file `readme-demo.html` and paste this snippet to see a fast, CSS-only 3D cube (works in any modern browser):

```html
<!doctype html>
<html>
<head>
	<meta charset="utf-8" />
	<title>CSS 3D Cube Demo</title>
	<style>
		body{display:grid;place-items:center;height:100vh;margin:0;background:#0f172a;color:#e6edf3}
		.scene{width:200px;height:200px;perspective:800px}
		.cube{width:100%;height:100%;position:relative;transform-style:preserve-3d;animation:spin 6s linear infinite}
		.face{position:absolute;width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:18px;border:2px solid rgba(255,255,255,0.06)}
		.front{transform:translateZ(100px);background:linear-gradient(135deg,#7c3aed,#06b6d4)}
		.back{transform:rotateY(180deg) translateZ(100px);background:linear-gradient(135deg,#06b6d4,#7c3aed)}
		.right{transform:rotateY(90deg) translateZ(100px);background:#7f1d1d}
		.left{transform:rotateY(-90deg) translateZ(100px);background:#164e63}
		.top{transform:rotateX(90deg) translateZ(100px);background:#065f46}
		.bottom{transform:rotateX(-90deg) translateZ(100px);background:#92400e}
		@keyframes spin{from{transform:rotateX(10deg) rotateY(0deg)}to{transform:rotateX(10deg) rotateY(360deg)}}
	</style>
</head>
<body>
	<div class="scene">
		<div class="cube">
			<div class="face front">Academic+</div>
			<div class="face back">Student</div>
			<div class="face right">Admin</div>
			<div class="face left">Courses</div>
			<div class="face top">Materials</div>
			<div class="face bottom">Results</div>
		</div>
	</div>
</body>
</html>
```

Open the file in a browser to preview a smooth 3D cube animation — perfect for embedding as an animated GIF or recording a short demo to include in this README.

## Richer option: Basic Three.js starter (WebGL)

If you want interactive 3D with camera controls and models, Three.js is a small step up. Add this to an HTML page and include `https://unpkg.com/three@0.152.0/build/three.min.js`:

```js
// Minimal Three.js scene (add to an HTML file with a canvas)
import * as THREE from 'https://unpkg.com/three@0.152.0/build/three.module.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth, innerHeight); document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material); scene.add(cube);
camera.position.z = 3;
function animate(){requestAnimationFrame(animate); cube.rotation.x += 0.01; cube.rotation.y += 0.02; renderer.render(scene, camera);} animate();
```

Tip: record the canvas to a GIF (or use Lottie for vector animation) and add the resulting GIF to `assets/readme-hero.gif` for a polished README hero.

---

## Quick Highlights

- Public website with hero, courses, faculties, gallery and contact.
- Admin panel for managing students, courses, materials, attendance, fees, notifications, and results.
- Student panel for viewing enrolled materials, payments, attendance and results.

## Full Project Reference

This section contains the original project details so developers can run and extend the app.

### Project layout

```
backend/
	controllers/
	middleware/
	models/
	routes/
	uploads/
	index.js
	package.json
	seed.js

frontend/
	public/
	src/
		components/
		context/
		hooks/
		pages/
		services/
	index.html
	package.json
```

### Tech Stack

- Frontend: React, Vite, Tailwind, Framer Motion
- Backend: Node.js, Express, MongoDB, Mongoose

### Getting Started (short)

1. Clone the repo:

```bash
git clone <your-repository-url>
cd client-website
```

2. Backend install & run:

```bash
cd backend
npm install
node index.js
```

3. Frontend install & run (dev):

```bash
cd frontend
npm install
npm run dev
```

The frontend talks to the backend at `http://localhost:5000/api` by default.

### Env example (backend/.env)

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/academic-plus
JWT_SECRET=your_jwt_secret
```

### Database seeding

From `backend/`:

```bash
node seed.js
```

Creates demo accounts:
- Admin: `admin@academicplus.com` / `admin123`
- Student: `student@academicplus.com` / `password`

---

## How to add animated media to this README

- Record an in-browser demo as a short GIF using tools like `peek` (Linux), `LICEcap`, or browser extensions.
- Generate vector animations with Lottie (export from After Effects via Bodymovin) and embed on a website or link the Lottie JSON in the project docs.
- Include small WebM or MP4 previews for GitHub releases or documentation sites (GitHub README itself prefers GIFs for inline animation).

## Where to place demo assets

- Put GIFs or images in `frontend/public/assets/` or `assets/` at the repo root and reference them with relative paths in this README.
- Add a `readme-demo.html` (local preview file) at the repo root for quick browser previews.

---

## Notes & Future Improvements

- Move the API base URL to environment variables in the frontend.
- Add a small `docs/` folder with recorded GIFs and `readme-demo.html` previews for contributors.
- Consider a small Netlify/Vercel demo showing the 3D scene and public website.

If you want, I can: add the demo HTML file (`readme-demo.html`), generate a GIF from the frontend demo, or wire a live demo deploy. Tell me which option you prefer and I will implement it.

---

## Author

Built for the Academic Plus management and student learning workflow.

