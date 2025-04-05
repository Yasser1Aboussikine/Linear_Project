import "./App.css";
import { Router, Routes, Route } from "react-router-dom";

// celebrity look Alike
// emotion detection

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<div>HOOOME</div>} />
        <Route path="/recognize" element={<div>REcogniiiez</div>} />
        <Route path="/about" element={<div>ABOOOOUTTT</div>} />
      </Routes>
    </>
  );
}

export default App;
