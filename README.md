# EcoTrack 🌱

**EcoTrack** is a modular and lightweight web application for tracking personal and organizational sustainability data. It enables users to register, log in, and enter daily environmental metrics such as electricity usage, carbon emissions, and recycling volumes.

This platform is especially tailored for individuals and small to medium-sized enterprises (SMEs) who seek an easy-to-use, installable sustainability tracker without relying on heavy enterprise software.

---

## ✨ Features

- User registration and secure login
- Form-based input for:
  - Electricity usage (kWh)
  - Carbon emissions (kg)
  - Recycling percentage or volume
- Personalized dashboard
- Responsive and accessible design
- Simple local setup (no cloud deployment required)
- Environment variable configuration for database credentials

---

## 🛠️ Technologies Used

**Frontend**:
- HTML5
- CSS3
- JavaScript (Vanilla)

**Backend**:
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- dotenv

---

## 🚀 Installation Instructions

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Git (optional for cloning)

### Step-by-Step Guide

1. **Download or Clone the Repository**
   - Download ZIP from GitHub or run:
     ```bash
     git clone https://github.com/yourusername/ecotrack.git
     cd ecotrack
     ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory with the following content:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Run the App Locally**
   ```bash
   npm start
   ```

5. **Access the App**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📁 Project Folder Structure

```
ecotrack/
│
├── models/             # Mongoose schemas
├── routes/             # API routing (auth, data input)
├── config/             # Database connection logic
├── public/             # Frontend HTML/CSS/JS
├── .env.example        # Example env file
├── server.js           # Entry point
├── package.json        # Dependency manager
└── README.md
```

---

## 🔒 Security Note
User passwords are hashed using bcryptjs and sensitive information is managed securely via environment variables using dotenv.

---

## 🙌 Contact
For any questions or suggestions, contact: yourname@example.com

