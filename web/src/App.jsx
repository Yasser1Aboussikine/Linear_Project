import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CelebrityClassifier from "./components/CelebrityClassifier";
// Remove import of ContactUs if it's only used in Home
// import ContactUs from "./components/ContactUs";

// celebrity look Alike
// emotion detection

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recognize" element={<CelebrityClassifier />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/contact" element={<ContactUs />} /> Remove the contact route */}
      </Routes>
    </>
  );
}

export default App;
