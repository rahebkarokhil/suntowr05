import React from "react";

import Home from "./Commponint/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Commponint/Home/Navbar/Navbar";
import Blog from "./Commponint/Blog/Blog";
import About from "./Commponint/About/About";
import Footer from "./Commponint/Home/Footer/Footer";

function App() {
 
  return (
    <>
      <div>
        <Router>
          <Navbar />
          

       
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About/>}/>
          </Routes>

          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
