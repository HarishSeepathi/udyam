import express from "express";
import Submission from "../models/Submission.js";
import { validatePAN, validateAadhaar } from "../utils/validation.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
    const { pan, aadhaar } = req.body;

    if (!validatePAN(pan)) return res.status(400).json({ error: "Invalid PAN" });
    if (!validateAadhaar(aadhaar)) return res.status(400).json({ error: "Invalid Aadhaar" });

    const saved = await Submission.create({ pan, aadhaar });
    res.json({ success: true, data: saved });
});

export default router;
