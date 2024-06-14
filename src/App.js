import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Ferrari from "./pages/ferrari";

const App = () => {

  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ferrari" element={<Ferrari/>}/>
        
        </Routes>
      </Router>
    
  );
};

export default App;
