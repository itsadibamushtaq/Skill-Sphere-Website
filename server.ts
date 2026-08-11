import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side Gemini initialization
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", aiConfigured: !!apiKey });
  });

  // Ask SkillSphere AI Assistant Endpoint
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { prompt, history, context } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }

      if (!ai) {
        // Fallback intelligent response if GEMINI_API_KEY is missing or unconfigured
        return res.json({
          response: `[SkillSphere AI Learning Guide]\n\nBased on your query: "${prompt}", here is a structured recommendation:\n\n1. **Core Recommendation**: Focus on establishing strong fundamentals before diving into specialized tools.\n2. **Suggested Learning Step**: Dedicate 4-6 hours per week to Python/Core concepts, followed by hands-on project building.\n3. **Recommended Next Course**: Check out our 'Python Fundamentals' and 'Introduction to AI' tracks in the Course Explorer.\n\n*Tip: Connect your Gemini API Key in Settings > Secrets for personalized real-time AI responses!*`,
        });
      }

      const systemInstruction = `You are "SkillSphere AI", an expert youth career counselor, tech educator, and skills mentor. Your mission is to help students, fresh graduates, and career switchers discover the right digital skills, roadmaps, government programs, certifications, and project-based learning. Always provide structured, encouraging, highly actionable advice with clear steps, estimated study times, and career tips. Keep formatting markdown-rich with bold titles and bullet points. Context: ${context || 'General Youth Career Guidance'}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return res.json({ response: response.text });
    } catch (error: any) {
      console.error("Error in /api/ai/chat:", error);
      return res.status(500).json({
        error: "Failed to generate AI response",
        details: error?.message || "Unknown error",
      });
    }
  });

  // AI Career Plan Generator
  app.post("/api/ai/plan", async (req, res) => {
    try {
      const { goal, currentLevel, hoursPerWeek, style } = req.body;

      if (!ai) {
        return res.json({
          plan: {
            title: `6-Month Action Plan for ${goal || "Digital Career"}`,
            months: [
              { month: 1, topic: "Computer & Programming Fundamentals", hours: hoursPerWeek || 5, milestones: ["Learn basic syntax", "Build CLI tool"] },
              { month: 2, topic: "Core Specialized Skills & Tools", hours: hoursPerWeek || 5, milestones: ["Database/Math basics", "Small project"] },
              { month: 3, topic: "Intermediate Concepts & Frameworks", hours: hoursPerWeek || 5, milestones: ["API integration", "Mid-level project"] },
              { month: 4, topic: "Advanced Concepts & Optimization", hours: hoursPerWeek || 5, milestones: ["Security/Performance", "Full project"] },
              { month: 5, topic: "Portfolio & Real-World Projects", hours: hoursPerWeek || 5, milestones: ["GitHub deployment", "Case study writeup"] },
              { month: 6, topic: "Certifications, Resume & Interview Prep", hours: hoursPerWeek || 5, milestones: ["CV review", "Mock interviews"] },
            ],
          },
        });
      }

      const prompt = `Generate a structured 6-month personalized learning plan for a user with goal: "${goal}", current level: "${currentLevel}", available time: ${hoursPerWeek} hours/week, learning style: "${style}". Return valid JSON formatted with title and an array of 6 months, each containing month number, topic, target hours, and 2-3 specific milestones.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.3,
        },
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json({ plan: parsed });
    } catch (error: any) {
      console.error("Error in /api/ai/plan:", error);
      return res.status(500).json({ error: "Failed to generate plan" });
    }
  });

  // Vite development middleware or static production serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SkillSphere server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
