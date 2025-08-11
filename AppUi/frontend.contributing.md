# Contributing to KnockoutZone Frontend

Thank you for contributing to the **frontend** of KnockoutZone! This guide outlines standards and practices to help you contribute effectively.


## 🧰 Tech Stack

- **Framework:** React.js with Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit (or useContext where applicable)
- **Routing:** React Router


## 📁 Project Structure
``` sh
src/
├── assets/               #Static files like images and icons  
├── components/           #Reusable UI components  
│   └── common/  
│       ├── button/  
│       ├── form/  
│       └── toasts/  
├── pages/                #Route-level pages  
│   ├── admin/  
│   ├── auth/  
│   ├── guest/  
│   ├── help/  
│   └── player/  
├── routes/               #Route configurations  
├── store/                #Redux or state slices  
│   └── slices/  
├── utils/                #Helpers and constants  
│   └── constants/
```

## 🧑‍💻 Code Style & Guidelines

- Use modern JavaScript (ES6+): `const`, `let`, arrow functions, etc.
- Use functional React components and hooks.
- Tailwind CSS is preferred; avoid custom CSS unless necessary.
- Follow modular structure: place components, pages, and logic where they belong.
- Avoid magic strings. Use constants from `utils/constants/` wherever possible.
- Add comments for any non-obvious logic.
- Use `camelCase` for variables and functions, `PascalCase` for components.


## 🧪 Development Workflow

1. Install dependencies:
```sh
npm install
```
2. Start the dev server:
```sh
npm run dev
```


## 🔀 Git & Branching

- Always branch off from `main` or `dev`:
``` sh
git checkout -b feat/your-feature-name
```
- Write meaningful commits:
```sh
git commit -m "Add navbar component to guest layout"
```
- Push to your fork and open a **Pull Request to `frontend` branch**.


## ✅ Pre-PR Checklist

- [ ] No unused imports or console logs
- [ ] UI looks fine on different screen sizes
- [ ] Code is modular and placed in the right directory
- [ ] No breaking changes to other pages/components


## 🤝 Code of Conduct

- Be respectful in reviews and discussions.
- Stick to consistent conventions.
- Document your logic if it’s complex or non-obvious.

Thanks for making KnockoutZone better! 🚀
