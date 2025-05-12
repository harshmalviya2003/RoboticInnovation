import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactFormSchema.parse(req.body);
      const savedContact = await storage.createContactSubmission(contactData);
      res.status(201).json({ success: true, data: savedContact });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ success: false, message: validationError.message });
      } else {
        res.status(500).json({ success: false, message: "An unknown error occurred" });
      }
    }
  });
  
  // Server stats for the dashboard
  app.get("/api/stats", async (_req, res) => {
    try {
      const stats = await storage.getStats();
      res.status(200).json(stats);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch stats" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
