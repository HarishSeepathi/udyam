import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
    </Routes>
  );
}


