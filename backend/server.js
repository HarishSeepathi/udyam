import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import formRouter from "./routes/form.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection

mongoose.connect("mongodb://localhost:27017/udyamb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error(err));

app.use("/form", formRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
