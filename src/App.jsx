import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import AboutUs from "./Components/about.jsx";
import Service from "./Components/Service.jsx"; 
import ContactPage from "./Components/ContactUs.jsx";

function App() {
  return (
    <Router>
      <Navbar /> 
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback for 404s */}
          <Route path="*" element={<Hero />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;