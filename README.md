# 💼 LinkedIn Clone – Frontend (React + Tailwind CSS)

A modern, responsive LinkedIn clone with real-time post feeds, user authentication, and interactive UI components.

## 🌐 Live Demo
Frontend: [https://mini-linked-in-assignment.netlify.app/](https://mini-linked-in-assignment.netlify.app/)
Backend: [https://linkedinbackend-a38l.onrender.com/api/posts](https://linkedinbackend-a38l.onrender.com/api/posts)

## 🔥 Features
- **User Authentication** (Login/Register with JWT)
- **Post Feed** (Create/View posts)
- **Profile Section** (User details)
- **NewsSideBar** (Trending articles)
- **ProfileSidebar** (User suggestions)
- **Fully Responsive** (Mobile, Tablet, Desktop)

## 🛠 Tech Stack
- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **State Management**: React Context API, UseStates
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: React Icons, Luicide Icons
- **Backend**: [Node.js/Express API](https://github.com/sk5198222/linkedInBE)

## 🚀 Quick Start
1. Clone the repo:
```bash
git clone https://github.com/sk5198222/linkedinFE.git
cd linkedinFE
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
VITE_API_BASE_URL=https://your-backend.onrender.com
```

4. Start development server:
```bash
npm run dev
```

## 📂 Project Structure
```
linkedinFE/
├── src/
│   ├── assets/            # Images & logos
│   ├── components/        # Reusable components
│   │   ├── NewsSideBar/   # Trending news section
│   │   ├── ProfileSidebar/ # User suggestions
│   │   ├── Post/          # Post components
│   │   └── ...            # Other components
│   ├── pages/             # Main views
│   │   ├── Auth/          # Login/Register
│   │   ├── Feed/          # Main feed
│   │   └── Profile/       # User profile
│   ├── api.js             # API paths
│   ├── App.jsx            # Main App
│   └── main.jsx           # Entry point
├── public/                # Static files
├── .env                   # Environment variables
└── package.json
```

## 🔌 API Integration
All API calls are handled through Axios in `src/services/api.js`:
```javascript
// Example API call
export const getPosts = async () => {
  return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/posts`);
};
```

## 📱 Responsiveness
- Mobile (≤ 640px)
- Tablet (≤ 768px)
- Desktop (≥ 1024px)

## 📬 Contact
- **Email**: [sksk5198222@gmail.com](mailto:sksk5198222@gmail.com)
- **GitHub**: [@sk5198222](https://github.com/sk5198222)
- **LinkedIn**: [devsathyam](https://www.linkedin.com/in/devsathyam/)
