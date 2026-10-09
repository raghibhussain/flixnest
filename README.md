# 🎬 FlixNest – Movie Streaming Web App (Aptech Vision Project)

FlixNest is a responsive, Netflix-style movie browsing front end built with **React** and **Vite**. It features a hero carousel, multiple movie sliders, and a dedicated watch page with an embedded video player and recommendations.

> Built as part of my Aptech coursework to practice component-based UI design, routing, and responsive layouts in React.

---

## ✨ Features

- **Hero carousel** – full-width slider showcasing featured movies with rating, duration, cast, genres, and a "Watch Trailer" button
- **Movie sections** – Upcoming, Latest, Trending, and Recommended movies, each in its own slider
- **Watch page** – dynamic route (`/singlepage/:id`) with an HTML5 video player, release date, description, and social share icons
- **Responsive header** – collapsible mobile navigation menu with toggle button
- **Dark theme UI** – cinematic dark design with custom CSS per component
- **Reusable components** – cards and sliders shared across pages
- **Footer** – links, copyright notice, and social media icons

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Framework | React 18 |
| Build tool | Vite 5 |
| Routing | React Router DOM 6 |
| Carousels | react-slick + slick-carousel |
| Styling | Custom CSS (one stylesheet per component) |
| Icons | Font Awesome 5 (CDN) |
| Linting | ESLint (react, react-hooks, react-refresh plugins) |
| Data | Static mock data (`src/dummyData.jsx`) |

---

## 📁 Project Structure

```
Aptech Vision Project/
├── public/
│   ├── images/            # Posters, slides, logo, icons
│   └── video/             # Trailer video files (video1.mp4, ...)
├── src/
│   ├── components/
│   │   ├── header/        # Navbar with mobile toggle
│   │   ├── homes/         # Hero slider + HomeCard
│   │   ├── upcoming/      # Reusable movie slider + Ucard
│   │   ├── trending/      # Trending section
│   │   ├── watch/         # Single movie / video page
│   │   └── footer/        # Footer
│   ├── home/              # HomePage (assembles all sections)
│   ├── dummyData.jsx      # Mock movie data
│   ├── App.jsx            # Routes
│   └── main.jsx           # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# 2. Go into the project folder
cd <your-repo-name>

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the project |

---

## 🎥 Adding Videos

Trailer videos are not included in the repository. To enable playback on the watch page, place your video files in `public/video/` using the names referenced in `src/dummyData.jsx`:

```
public/video/video1.mp4
public/video/video2.mp4
...
```

---

## 🔮 Future Improvements

- Connect to a real movie API (e.g. TMDB) instead of mock data
- User authentication ("Your Account" page)
- Search and genre filtering
- Watch list / favorites
- Working Contact and Feedback pages

---

## 📄 License

This project was created for educational purposes. Movie titles, images, and descriptions are used as placeholder content only.

---

## 👤 Author

**Raghib**
GitHub: [@raghibhussain](https://github.com/raghib hussain)
