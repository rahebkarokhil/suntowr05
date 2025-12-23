import React from "react";

import Home from "./Commponint/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Commponint/Home/Navbar/Navbar";
import Blog from "./Commponint/Blog/Blog";
import About from "./Commponint/About/About";

function App() {
 
  return (
    <>
      <div>
        <Router>
          <Navbar />
          

       
          
          <Routes>
            <Route path="/" element={<Home />} />code 
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About/>}/>
        
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
