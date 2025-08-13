import { useState } from "react";
import FormField from "../components/FormField";
import { useNavigate } from "react-router-dom";

export default function Step1() {
  const [pan, setPan] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const next = () => {
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan))
      return setError("Invalid PAN");
    if (!/^\d{12}$/.test(aadhaar))
      return setError("Invalid Aadhaar");
    localStorage.setItem("step1", JSON.stringify({ pan, aadhaar }));
    navigate("/step2");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-6">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/40">
        
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Step 1 — Enter Your Details
        </h2>

        <FormField
          label="PAN Number"
          value={pan}
          onChange={setPan}
          placeholder="ABCDE1234F"
        />
        <FormField
          label="Aadhaar Number"
          value={aadhaar}
          onChange={setAadhaar}
          placeholder="123412341234"
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          onClick={next}
          className="w-full mt-6 px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
