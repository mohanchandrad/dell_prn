import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import Home from "./pages/Home";
import Service from "./pages/Service";
import Blog from './pages/Blog';
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
