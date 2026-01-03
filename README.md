
# 🔍 AI Verifier – Trust AI Before You Use It

> A modern AI-powered verification tool that detects hallucinations, validates factual claims, and analyzes citations in AI-generated text.

---

## 🚀 Overview

**AI Verifier** is a web-based application designed to help users **verify the credibility of AI-generated content**.
With the rapid adoption of generative AI, misinformation, hallucinated facts, and fake citations have become major concerns.

This project acts as a **trust layer for AI**, enabling users to:

* Detect hallucinations
* Verify factual claims
* Identify fake or broken citations
* Get an overall **Trust Score** for AI-generated text

---

## 🏆 Why This Project Matters

* AI tools often generate **confident but incorrect information**
* Users struggle to distinguish between **real facts and hallucinations**
* Academic, research, and professional use cases demand **verified content**

👉 **AI Verifier bridges the gap between AI generation and human trust.**

---

## ✨ Key Features

### ✅ Claim Verification

* Breaks text into individual claims
* Verifies each claim using AI-based analysis
* Labels claims as **Valid / Questionable / False**

### ❌ Hallucination Detection

* Identifies statements that are factually incorrect or misleading
* Highlights suspicious AI-generated assertions

### 📚 Citation Analysis

* Detects **fake citations**
* Flags **broken or invalid references**

### 📊 Trust Score

* Generates an overall **Trust Score** (0–100)
* Helps users quickly judge reliability

### 🧪 Sample Text Demo

* One-click demo text for live testing (perfect for hackathons & demos)

### 🎨 Premium UI / UX

* Glassmorphism design
* Animated gradients & progress indicators
* Fully responsive (mobile + desktop)
* SaaS-grade interface

---

## 🛠️ Tech Stack

### Frontend

* **React + TypeScript**
* **Tailwind CSS**
* **shadcn/ui**
* **Lucide Icons**

### Backend

* **FastAPI**
* **Python**
* AI/ML-based verification logic
* REST API hosted on Render

### Deployment

* Frontend: Vercel / Netlify
* Backend: Render



---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-verifier.git
cd ai-verifier
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

### 4️⃣ Open in Browser

```
http://localhost:5173
```

---

## 🔗 API Integration

The frontend communicates with a hosted verification API:

```http
POST https://ps03-ai-verifier.onrender.com/verify
```

### Request Body

```json
{
  "text": "AI-generated content here"
}
```

### Response Example

```json
{
  "trust_score": 72,
  "claims": [
    { "claim": "Example claim", "status": "valid" }
  ],
  "fake_citations": [],
  "broken_citations": []
}
```

---

## 📱 Responsiveness

* Fully optimized for **mobile, tablet, and desktop**
* Buttons stack on smaller screens
* Adaptive text areas and layouts

---

## 🧠 Use Cases

* Students & Researchers
* Journalists & Writers
* Developers using AI tools
* Educators
* Enterprises validating AI outputs

---

## 🧪 Hackathon Readiness

✔ Live demo friendly
✔ Clear problem–solution mapping
✔ Strong AI + trust narrative
✔ Scalable architecture
✔ Judges-friendly UI & UX

---

## 🔮 Future Enhancements

* 🔥 Highlight verified claims inside text
* 📈 Interactive Trust Score gauge
* 📄 Export verification report (PDF)
* 🌐 Browser extension
* 👥 User authentication & history
* 🌙 Light / Dark mode toggle



---

## 📄 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and build upon it.

---

## ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🛠️ Fork it
* 💡 Suggest improvements

---

### 🔐 *AI Verifier – Because trusting AI should be a choice, not a risk.*

---

