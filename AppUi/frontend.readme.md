# KnockoutZone - Frontend
KnockoutZone is a dynamic and responsive web application built using:
- **⚛️ React (via Vite)** - JavaScript library for building dynamic user interfaces, with Vite for fast dev builds and hot reload.
- **🎨 Tailwind CSS** - Utility-first CSS framework for rapid, responsive styling without writing custom CSS.

## 📁 Folder Structure
``` sh
src/
├── assets/           # Static assets like images, icons, and fonts
├── components/       # Reusable UI components
│   └── common/       # Common components used across pages
│       ├── button/   # Custom button components
│       ├── form/     # Input fields, form layouts, etc.
│       └── toasts/   # Toast notifications or alerts
├── pages/            # Page-level components for routing
│   ├── admin/        # Admin-specific views or dashboards
│   ├── auth/         # Login, Register, Forgot Password, etc.
│   ├── guest/        # Public-facing pages accessible without login
│   ├── help/         # Help or FAQ-related content
│   └── player/       # Core player/user dashboard or zone
├── routes/           # Route definitions organized by user role
│   ├── admin/        # Admin route handlers
│   ├── dev/          # Developer/debug routes (if any)
│   ├── guest/        # Public guest routes
│   └── player/       # Routes for logged-in users or players
├── store/            # State management setup (e.g., Redux)
│   └── slices/       # Feature-specific Redux slices
├── utils/            # Utility functions and helpers
│   └── constants/    # Static constants used across the app
```

## ▶️ How to Run the Project

### 1. Fork and Clone the Repository
- First, fork the repo from GitHub
- Then clone your fork:
``` sh
git clone https://github.com/yourusername/KnockoutZone.git
cd KnockoutZone/AppUi
```

### 2. Install dependencies
Make sure you have Node.js v18+ installed. Then run:
``` sh
npm install
```

### 3. Create .env file (if needed)
If the app expects any environment variables (e.g., API base URL), create a .env file:
``` sh
VITE_API_BASE_URL=http://localhost:8080/api
```

### 4. Start the Development Server
``` sh
npm run dev
```

Visit the app in your browser at:
➡️ http://localhost:5173

