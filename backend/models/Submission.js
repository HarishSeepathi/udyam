import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
    pan: { type: String, required: true },
    aadhaar: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Submission", SubmissionSchema);
