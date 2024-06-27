import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import CatFact from './Components/CatFact';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<CatFact />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
