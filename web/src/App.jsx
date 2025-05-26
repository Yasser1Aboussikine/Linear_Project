import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Code from "./pages/Code";
import Results from "./pages/Results";

// Remove import of ContactUs if it's only used in Home
// import ContactUs from "./components/ContactUs";

// celebrity look Alike
// emotion detection

function App() {
  const handleRead = () => {
    window.open("/path/to/report.pdf", "_blank");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/code" element={<Code />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<AboutUs />} />
       
        {/* <Route path="/contact" element={<ContactUs />} /> Remove the contact route */}
      </Routes>
    </>
  );
}

export default App;
