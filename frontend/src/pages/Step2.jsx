import { useState } from "react";
import FormField from "../components/FormField";

export default function Step2() {
  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const fetchCityState = async (pincode) => {
    try {
      const resp = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await resp.json();
      if (data[0]?.Status === "Success") {
        setCity(data[0].PostOffice[0].District);
        setState(data[0].PostOffice[0].State);
      }
    } catch (error) {
      console.error("Error fetching city/state:", error);
    }
  };

  const submit = async () => {
    const step1 = JSON.parse(localStorage.getItem("step1"));
    try {
      const res = await fetch("http://localhost:5000/form/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...step1, pin, city, state })
      });
      const result = await res.json();
      console.log(result);
      alert("Form submitted!");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/50">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Step 2: Address Details
        </h1>

        <div className="space-y-5">
          <FormField
            label="PIN Code"
            value={pin}
            onChange={(v) => {
              setPin(v);
              if (v.length === 6) fetchCityState(v);
            }}
            placeholder="400001"
          />
          <FormField
            label="City"
            value={city}
            onChange={setCity}
            placeholder="City"
          />
          <FormField
            label="State"
            value={state}
            onChange={setState}
            placeholder="State"
          />
        </div>

        <button
          onClick={submit}
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
        >
          Submit Form →
        </button>
      </div>
    </div>
  );
}
