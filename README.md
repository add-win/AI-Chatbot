# AI Chatbot

A simple full-stack chatbot application featuring a React (Vite) frontend and an Express Node.js backend integration with the Groq API.

---

## 🚀 Features

- **React + Vite Frontend**: Fast development server and builds.
- **Express Backend**: Proxy server protecting your API keys and routing requests.
- **Groq API Integration**: Generates natural language responses using high-speed LLMs (e.g., Llama 3.3).
- **Real-Time UI State**: Typing indicator and conversation history bubble display.

---

## 📁 Project Structure

```
ai-chatbot/
├── backend/            # Express.js Server
│   ├── .env.example    # Configuration template
│   ├── server.js       # Main server logic
│   └── package.json    # Backend dependencies
├── frontend/           # React App (Vite)
│   ├── src/            # Source code (App.jsx, main.jsx, etc.)
│   ├── index.html      # Main entry HTML
│   └── package.json    # Frontend dependencies
└── README.md           # Project Documentation
```

---

## 🛠️ Setup Instructions

### 1. Prerequisites
- **Node.js**: Ensure you have Node.js installed (v16+ recommended).
- **Groq API Key**: Get your API key from the [Groq Console](https://console.groq.com/).

### 2. Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file by copying the template:
   ```bash
   cp .env.example .env
   ```
4. Open the `.env` file and insert your Groq API Key:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```
5. Start the backend server:
   ```bash
   node server.js
   ```
   The backend server runs on `http://localhost:5000`.

### 3. Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open the provided URL (usually `http://localhost:5173`) in your browser.

---

## 🤖 API Endpoint

### `POST /chat`
- **Request Body**:
  ```json
  {
    "message": "Hello, bot!"
  }
  ```
- **Response Body**:
  ```json
  {
    "reply": "Hello! How can I assist you today?"
  }
  ```

---

## 🔒 Security Notes
- **Never commit your `.env` file** to GitHub or any version control system. It has been added to the root `.gitignore` file to prevent accidental leaks.
- Ensure the Groq API Key is kept secure and rotated if it is exposed.

