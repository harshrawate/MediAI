# MediAI - AI-Powered Healthcare Assistant 🩺

MediAI is a modern web application designed to help users make informed decisions about the products they consume. By leveraging advanced AI and real-time web search, MediAI analyzes product ingredients from labels to provide health scores, detailed breakdowns, and personalized advice through an interactive chatbot

## 🚀 Features

- **Product Label Analysis**: Upload an image of any product's ingredient list to get an instant health analysis.
- **Health Scoring**: Receive a consolidated health score based on the quality and impact of ingredients.
- **Ingredient Breakdown**: Understand what's inside your products with clear explanations of potential risks and benefits.
- **AI Health Chatbot**: Ask follow-up questions about products or get general health advice from our Gemini-powered assistant.
- **Real-time Insights**: Integrated with Tavily Search to provide the most up-to-date health information.
- **Modern UI/UX**: A sleek, responsive interface built with React 19 and Tailwind CSS 4.

## 🛠️ Tech Stack

### Frontend
- **React 19**: Core UI framework.
- **Vite**: Ultra-fast build tool and dev server.
- **Tailwind CSS 4**: For high-performance, utility-first styling.
- **Framer Motion**: Smooth animations and transitions.
- **Lucide React**: Beautiful icons.
- **React Router 7**: Client-side routing.

### Backend
- **Node.js & Express 5**: Robust server-side architecture.
- **Google Gemini API**: Powers the core AI analysis and chatbot.
- **Tavily API**: Provides real-time health data via search.
- **Multer**: Handles image uploads for product scanning.

## 📥 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/harshrawate/MediAI.git
   cd MediAI
   ```

2. **Setup the Server**:
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   GOOGLE_API_KEY=your_gemini_api_key
   TAVILY_API_KEY=your_tavily_api_key
   ```

3. **Setup the Client**:
   ```bash
   cd ../client
   npm install
   ```
   Create a `.env` file in the `client` directory:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```

### Running the Application

1. **Start the Server**:
   ```bash
   cd server
   npm start # or node server.js
   ```

2. **Start the Client**:
   ```bash
   cd client
   npm run dev
   ```

## 📂 Directory Structure

```text
MediAI/
├── client/             # Frontend React application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Main page views (Home, Analyzer)
│   │   └── assets/     # Images and static files
│   └── public/
├── server/             # Backend Express API
│   ├── controllers/    # API logic
│   ├── routes/         # Endpoint definitions
│   ├── services/       # External API integrations (Gemini, Tavily)
│   └── uploads/        # Temporary storage for scanned images<img width="1910" height="857" alt="{333686C7-07F2-4B69-AAE1-6ED1F37D7961}" src="https://github.com/user-attachments/assets/8ee9442c-b800-49ed-a579-9b8dd4016fed" />

└── README.md           # Project documentation
```

## 🛡️ License

This project is licensed under the ISC License.

---
Built by [Harsh Rawate](https://github.com/harshrawate)


<img width="1910" height="857" alt="{333686C7-07F2-4B69-AAE1-6ED1F37D7961}" src="https://github.com/user-attachments/assets/f2683428-d5d1-4d0a-ab16-14a4e41af2bf" />

<img width="1917" height="865" alt="{3CAB6343-A37B-4E91-BD92-20DAC8F26335}" src="https://github.com/user-attachments/assets/bfe16e1b-617b-49ab-86cd-d56b04437c79" />


