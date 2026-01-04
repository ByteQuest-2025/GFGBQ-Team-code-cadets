
  <title>AI Verifier – Hackathon README</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      background-color: #0f172a;
      color: #e5e7eb;
      line-height: 1.6;
      padding: 30px;
    }
    h1, h2, h3 {
      color: #38bdf8;
    }
    a {
      color: #22d3ee;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .box {
      background: #020617;
      border-left: 4px solid #38bdf8;
      padding: 16px;
      margin: 20px 0;
      border-radius: 6px;
    }
    ul {
      margin-left: 20px;
    }
    code {
      background: #020617;
      padding: 4px 6px;
      border-radius: 4px;
      color: #a5f3fc;
    }
    footer {
      margin-top: 40px;
      text-align: center;
      color: #94a3b8;
      font-size: 14px;
    }
  </style>
</head>

<body>

  <h1>🤖 AI Verifier – Trust AI Before You Use It</h1>

  <div class="box">
    <strong>👥 Team Name:</strong> Code Cadets
  </div>

  <h2>📌 Hackathon Repository Guidelines</h2>
  <div class="box">
    <p>All team leaders may have received a GitHub invitation to a repository named:</p>
    <code>GFGBQ-Team-&lt;Team Name&gt;</code>

    <p>This repository serves as the <strong>official workspace for the hackathon</strong>.</p>

    <h3>Team Leaders are responsible for:</h3>
    <ul>
      <li>Adding all officially registered teammates to the repository</li>
      <li>Ensuring all development work and code pushes happen only in the assigned repository</li>
      <li>No external collaborators are allowed</li>
      <li>Only declared and registered team members may be added</li>
      <li><strong>Adding any external collaborator will result in disqualification</strong></li>
    </ul>
  </div>

  <h2>📌 Problem Statement</h2>
  <p>
    With the rapid growth of generative AI, users increasingly rely on AI-generated content
    for academics, research, and professional tasks. However, AI systems often produce
    <strong>hallucinated facts, misleading claims, and fake or broken citations</strong>,
    making it difficult to judge credibility.
  </p>
  <p>
    There is a strong need for a unified platform that helps users
    <strong>verify AI-generated content before trusting or using it</strong>.
  </p>

  <h2>🚀 Project Overview</h2>
  <p>
    <strong>AI Verifier</strong> is a web-based AI-powered platform that validates
    AI-generated text by detecting hallucinations, verifying factual claims,
    analyzing citations, and generating a <strong>Trust Score (0–100)</strong>.
  </p>
  <p>
    It acts as a <strong>trust layer between users and AI systems</strong>,
    enabling informed and responsible usage of AI-generated information.
  </p>

  <h2>✨ Key Features</h2>
  <ul>
    <li><strong>Claim Verification:</strong> Breaks text into claims and marks them as Valid, Questionable, or False</li>
    <li><strong>Hallucination Detection:</strong> Identifies misleading or incorrect AI statements</li>
    <li><strong>Citation Analysis:</strong> Detects fake, invalid, or broken references</li>
    <li><strong>Trust Score:</strong> Overall reliability score from 0 to 100</li>
    <li><strong>Premium UI:</strong> Glassmorphism design, fully responsive</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>
  <h3>Frontend</h3>
  <ul>
    <li>React + TypeScript</li>
    <li>Tailwind CSS</li>
    <li>shadcn/ui</li>
    <li>Lucide Icons</li>
  </ul>

  <h3>Backend</h3>
  <ul>
    <li>FastAPI</li>
    <li>Python</li>
    <li>AI/ML-based verification logic</li>
  </ul>

  <h3>Deployment</h3>
  <ul>
    <li>Frontend: Vercel</li>
    <li>Backend: Render</li>
  </ul>

  <h2>🌐 Deployed Links</h2>
  <ul>
    <li>Frontend: <a href="https://codecadet-psi.vercel.app/" target="_blank">https://codecadet-psi.vercel.app/</a></li>
    <li>Backend API: <a href="https://ps03-ai-verifier.onrender.com" target="_blank">https://ps03-ai-verifier.onrender.com</a></li>
  </ul>

  <h2>🎥 Demonstration Video</h2>
  <p>
    <a href="https://drive.google.com/drive/u/1/folders/1Y36SRopdGdP_tIiB50U5PtIb_iShMT_X" target="_blank">
      Click here to view the 2-minute demo video
    </a>
    <br />
    <em>(Permission: Anyone with the link can view)</em>
  </p>

  <h2>📊 PPT Link</h2>
  <p>
    <a href="https://www.canva.com/design/DAG9YUo6zOw/hPAt-6vwC4CjDQnhgY3fDA/edit" target="_blank">
      View Project PPT (PDF)
    </a>
  </p>

  <h2>⚙️ Setup & Installation</h2>
  <pre>
git clone https://github.com/ByteQuest-2025/GFGBQ-Team-code-cadets
cd GFGBQ-Team-code-cadets
npm install
npm run dev
  </pre>
  <p>Open in browser: <code>http://localhost:5173</code></p>

  <h2>📌 Usage Instructions</h2>
  <ol>
    <li>Paste AI-generated text into the input field</li>
    <li>Click <strong>Verify</strong></li>
    <li>Review claim validation, citation checks, and trust score</li>
  </ol>

  <h2>🧠 Use Cases</h2>
  <ul>
    <li>Students & Researchers</li>
    <li>Journalists & Writers</li>
    <li>Developers using AI tools</li>
    <li>Educators</li>
    <li>Enterprises validating AI outputs</li>
  </ul>

  <h2>🔮 Future Enhancements</h2>
  <ul>
    <li>Inline claim highlighting</li>
    <li>PDF export of verification reports</li>
    <li>Browser extension</li>
    <li>User authentication & history</li>
    <li>Dark / Light mode toggle</li>
  </ul>

  <h2>📄 License</h2>
  <p>This project is licensed under the <strong>MIT License</strong>.</p>

  <footer>
    🔐 <strong>AI Verifier</strong> – Because trusting AI should be a choice, not a risk.
  </footer>

</body>
</html>
