<div align="center">

# 🎓 Academic Plus

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Academic%20Plus&fontSize=70&fontAlignY=35&desc=Modern%20Student%20Management%20&%20Learning%20Platform&descAlignY=55&descAlign=50" />

**Revolutionizing the educational experience through intuitive management and smart learning.**

<p align="center">
  <a href="#features">✨ Features</a> •
  <a href="#tech-stack">🧠 Tech Stack</a> •
  <a href="#getting-started">🚀 Getting Started</a> •
  <a href="#showcase">📸 Showcase</a>
</p>

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 🌟 About Academic Plus

**Academic Plus** is a next-generation platform engineered to streamline the operations of educational institutions. Whether it's a school, a coaching center, or a university, Academic Plus provides a unified ecosystem that bridges the gap between administration, faculty, and students.

### Why Choose Academic Plus?
- **All-In-One Dashboard:** Stop juggling tools. Manage attendance, fees, courses, and results from a single control panel.
- **Student-Centric:** A dedicated portal tailored for students to track their progress, access materials, and stay informed.
- **Sleek & Modern:** Designed with a stunning, animated, and fully responsive glassmorphism UI built on Framer Motion.

---

## 🔥 Key Features

<div align="center">
  <table>
    <tr>
      <td align="center"><b>👩‍🎓 Student Portal</b></td>
      <td align="center"><b>👑 Admin Dashboard</b></td>
      <td align="center"><b>🌐 Public Website</b></td>
    </tr>
    <tr>
      <td>
        • 📚 24/7 Access to Materials<br>
        • 📅 Real-time Attendance<br>
        • 📊 Instant Results Tracking<br>
        • 💳 Secure Fee Management<br>
        • 🔔 Push Notifications
      </td>
      <td>
        • 👥 Comprehensive User Mgmt<br>
        • 📁 Centralized Content Hub<br>
        • 📈 Analytics & Reporting<br>
        • 💵 Financial Tracking<br>
        • 📢 Broadcast Announcements
      </td>
      <td>
        • 🎨 Stunning Landing Pages<br>
        • 👨‍🏫 Interactive Faculty Roster<br>
        • 📖 Course Catalogues<br>
        • 📱 Mobile-First Design<br>
        • ⚡ Blazing Fast Performance
      </td>
    </tr>
  </table>
</div>

---

## 📸 Platform Showcase

*See the magic in action:*

<div align="center">

| Public Interface | Admin Command Center | Student Dashboard |
|:---:|:---:|:---:|
| <img src="assets/home.png" width="280" alt="Home Page"/> | <img src="assets/admin.png" width="280" alt="Admin Dashboard"/> | <img src="assets/student.png" width="280" alt="Student Portal"/> |

</div>

---

## 🛠 Tech Architecture

Academic Plus is built on a robust, scalable MERN stack, paired with modern utility libraries for the best developer and user experience.

- **Frontend:** React 19, Tailwind CSS v4, Framer Motion, Recharts
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment & Tooling:** Vite, ESLint, PWA integration

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Kartikcc123/client-website.git
cd client-website
```

### 2️⃣ Environment Setup

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/academic-plus
JWT_SECRET=your_super_secret_key
```

### 3️⃣ Initialize the Backend

Open a terminal and navigate to the backend directory:

```bash
cd backend
npm install
node seed.js    # 🌱 Seed the database with initial demo data
node index.js   # 🚀 Server runs on http://localhost:5000
```

> **Demo Credentials:**
> - **Admin:** `admin@academicplus.com` | `admin123`
> - **Student:** `student@academicplus.com` | `password`

### 4️⃣ Launch the Frontend

Open a second terminal window and navigate to the frontend directory:

```bash
cd frontend
npm install
npm run dev     # ✨ Client runs on http://localhost:5173
```

---

## 📂 Project Structure

A quick glance at the repository organization:

<details>
<summary><b>Click to expand</b></summary>

```text
Academic-Plus/
├── backend/                  # Server-side code
│   ├── controllers/          # Business logic
│   ├── middleware/           # Request interceptors (Auth, etc.)
│   ├── models/               # MongoDB Schemas
│   ├── routes/               # API endpoints
│   ├── index.js              # Entry point
│   └── seed.js               # Database population script
│
├── frontend/                 # Client-side code (Vite + React)
│   ├── public/               # Static assets & PWA icons
│   ├── src/
│   │   ├── components/       # Reusable UI parts
│   │   ├── context/          # Global state
│   │   ├── pages/            # View components
│   │   └── main.jsx          # React mount point
│   └── vite.config.js        # Build configuration
│
└── README.md                 # You are here!
```
</details>

---

## 🔮 Future Roadmap

We are constantly innovating. Here is what is on the horizon:

- [ ] 🤖 **AI-Powered Analytics:** Predictive performance insights for students.
- [ ] 📹 **Live Virtual Classes:** Seamless WebRTC integration.
- [ ] 💬 **Real-Time Communication:** In-app chat between faculty and students.
- [ ] 📱 **Native Mobile Apps:** Expanding beyond PWA to app stores.
- [ ] ☁️ **Cloud Storage Integration:** Native AWS S3 support for materials.

---

## 👨‍💻 Developed By

<div align="center">

<a href="https://github.com/Kartikcc123">
  <img src="https://github.com/Kartikcc123.png" width="100" style="border-radius:50%; border: 3px solid #00F7FF;" />
</a>

### Kartik Agarwal
*🚀 MERN Developer | ☁️ Cloud Learner | 🤖 AI Enthusiast*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Kartikcc123)

</div>

---

<div align="center">
  <b>💙 Thank You For Visiting</b><br>
  Made with ❤️ by Kartik Agarwal.<br>
  <i>Licensed under the MIT License.</i>
</div>
