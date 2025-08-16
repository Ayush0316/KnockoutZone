# 📘 LEARN.md

Welcome to the KnockOutZone Learning Guide!

This document is designed to help new contributors get up to speed with the technologies used in this full-stack web application and start contributing effectively.

---

## 🧰 Overview of Technologies Used

| Layer     | Technology                     |
|-----------|--------------------------------|
| Frontend  | React, TailwindCSS             |
| Backend   | Java (Spring Boot)             |
| Database  | PostgreSQL                     |
| Auth      | JWT (JSON Web Tokens)          |
| Realtime  | Socket.IO / REST Polling       |
| Deployment| Vercel (Frontend), Render / Railway (Backend) |

---

## 📚 Learning Resources

### React (Frontend)
- [React Official Docs](https://reactjs.org/docs/getting-started.html)
- [React Crash Course (YouTube)](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
- [TailwindCSS Docs](https://tailwindcss.com/docs)

### Java & Spring Boot (Backend)
- [Spring Boot Beginner Guide](https://spring.io/guides/gs/spring-boot/)
- [Java Brains - Spring Boot Playlist](https://www.youtube.com/playlist?list=PLqq-6Pq4lTTZSKAFG6aCDVDP86Qx4lNas)

### PostgreSQL (Database)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [SQL Basics](https://www.w3schools.com/sql/)

### Authentication - JWT
- [JWT Intro](https://jwt.io/introduction)
- [Spring Security + JWT Guide](https://www.baeldung.com/spring-security-oauth-jwt)

### Real-Time Communication
- [Socket.IO Documentation](https://socket.io/docs/)
- [REST Polling Basics](https://dev.to/kiranrajvjd/rest-vs-websockets-vs-server-sent-events-1bfd)

### Deployment
- [Vercel Documentation](https://vercel.com/docs)
- [Render Deployment Guide](https://render.com/docs/deploy-a-spring-boot-app)
- [Railway Deployment](https://docs.railway.app/)

---

## 🧑‍💻 Tips for New Contributors

- **Start small:** Begin with documentation, UI fixes, or refactoring tasks.
- **Read `CONTRIBUTING.md`:** Understand how to set up and contribute.
- **Understand the flow:** Explore how players register, how matches are scheduled, and how scores are updated.
- **Ask questions:** Don't hesitate to ask maintainers or others in the Discord server.

---

## 🛠 Suggested First-Time Setup

1. **Clone the repository**
2. **Set up the backend** (Java + Spring Boot + PostgreSQL)
3. **Run the frontend** (React + TailwindCSS)
4. **Explore the app locally**
5. **Pick an issue and start contributing!**

---

## 🐞 Troubleshooting

Here are some common issues you might face while setting up or contributing, along with suggested solutions:

### 1. **Backend Not Starting (Java/Spring Boot Errors)**
- **Solution:** Ensure you have Java 17 or higher installed.
- Check if your PostgreSQL database is running and the credentials in `application.properties` are correct.

### 2. **Database Connection Failed**
- **Solution:** 
  - Make sure PostgreSQL is installed and the DB service is running.
  - Double-check your DB name, username, and password in the config files.
  - Check for any firewall or port blockages (default is port `5432`).

### 3. **Frontend Crashes or Doesn’t Load**
- **Solution:** 
  - Run `npm install` or `yarn` in the frontend directory to install dependencies.
  - Use `npm run dev` or `npm start` (depending on setup).
  - Ensure the backend server is running if the frontend depends on API calls.

### 4. **CORS Errors in Browser Console**
- **Solution:** 
  - Add CORS configurations in the Spring Boot backend (usually in a WebConfig file or Controller).
  - You can temporarily disable CORS in development using browser extensions (not recommended for production).

### 5. **Real-time Features Not Working (Socket.IO)**
- **Solution:**
  - Check if the backend server has Socket.IO setup and is running.
  - Confirm that both frontend and backend are using the correct socket URL and port.

### 6. **Build/Deployment Errors (Vercel, Render, Railway)**
- **Solution:**
  - Review build logs provided by the platform.
  - For frontend (Vercel), ensure the build command and output directory are correctly set in project settings.
  - For backend (Render/Railway), ensure environment variables are correctly configured.

---

## 📎 Additional Documentation

- [`README.md`](./README.md) – Project Overview
- [`CONTRIBUTING.md`](./CONTRIBUTING.md) – Contribution Guide
- [`LICENSE`](./LICENSE) – License Info

---

## 🌟 GSSoC Notes

If you're contributing as part of **GSSoC'25**, here’s how you can make the most out of it:

### 🏁 Getting Started
- Look for issues labeled with `gssoc` or `good first issue`.
- If you find an unlabeled issue you want to work on, **ask for it to be assigned** in the comments.
- Follow the `CONTRIBUTING.md` file to set up your environment and make your first PR.

### 🛠️ Contribution Tips
- Always comment on an issue before starting work to avoid duplication.
- Make small, focused PRs with meaningful commit messages.
- Ask questions in the Discord server if you're stuck — mentors and maintainers are here to help!

### 💡 Ideas for Contributions
- Improve project documentation (`README.md`, `LEARN.md`, `CONTRIBUTING.md`)
- Add frontend UI enhancements
- Fix backend bugs or refactor Java/Spring Boot code
- Help test features and report issues
- Write or improve error handling, validations, or accessibility

We’re excited to have you on board. Good luck and happy contributing! 💻🚀 

