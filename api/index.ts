import express from "express";
import { storage } from "../server/storage";
import { insertContactInquirySchema } from "../shared/schema";
import { z } from "zod";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactInquirySchema.parse(req.body);
    const inquiry = await storage.createContactInquiry(validatedData);
    res.json(inquiry);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Invalid input data", errors: error.errors });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const inquiries = await storage.getContactInquiries();
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default app;
