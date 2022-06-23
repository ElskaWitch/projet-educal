import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Instructor from "./pages/Instructor";
import Error from "./pages/Error";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <Navigation />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Instructor" element={<Instructor />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
