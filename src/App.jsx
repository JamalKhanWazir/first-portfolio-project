import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import "./styles/app.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      <Footer />
    </Router>
  ) 
}

export default App
