import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-white">
      <Router>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Other pages will go here */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}
