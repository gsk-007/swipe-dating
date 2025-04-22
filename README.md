# Swipe Dating

**Swipe Dating** is a full-stack, swipe-based matchmaking application that replicates the core features of popular dating platforms.  
It was built as a learning project to deepen understanding of full-stack web development, user authentication, real-time communication, and responsive UI design.

---

## 🎯 Why This Project Exists

This project is a hands-on exploration into building a modern, real-world application from scratch.  
It aims to solve the following learning challenges:

- Building interactive, swipe-based UI features
- Handling secure user authentication
- Managing real-time messaging between users
- Structuring and deploying a full-stack application
- Designing responsive layouts that work across devices

---

## ✨ Features

- **User Authentication** – Sign-up and login functionality with JWT-based security
- **User Profiles** – Create and update profiles with photos and bios
- **Swipe Interface** – Swipe left/right to like or pass
- **Matchmaking Logic** – Mutual likes create a match
- **Real-Time Chat** – Instant messaging between matched users
- **Mobile-Responsive Design** – Optimized for both desktop and mobile devices

---

## 🧱 Project Structure

The project is divided into two main directories:

```
swipe-dating/
│
├── api/       # Backend (Express, MongoDB, JWT, Socket.io)
│
└── client/    # Frontend (React, CSS, Context API)
```

---

## 🛠️ Tech Stack

- **Frontend**: React, JavaScript, HTML, CSS (Tailwind)
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Real-Time Messaging**: Socket.io
- **State Management**: Zustand

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm installed
- A running MongoDB instance (local or cloud-based)
- Cloudinary API Key and Secret

### Installation Steps

1. **Clone the repo:**
   ```bash
   git clone https://github.com/gsk-007/swipe-dating.git
   cd swipe-dating
   ```

2. **Install dependencies:**
   ```bash
   npm install
   
   cd client
   npm install
   ```

3. **Set up environment variables in `api/.env`:**
   ```env
   PORT=5000
   MONGO_URI=
    
   JWT_SECRET=changeme
    
   NODE_ENV=development
    
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
    
   CLIENT_URL=http://localhost:5173
   ```

4. **Start the backend:**
   ```bash
   npm start
   ```

5. **Start the frontend in another terminal:**
   ```bash
   cd client
   npm start
   ```

Visit `http://localhost:5173` to view the app.

---



