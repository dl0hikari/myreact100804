import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from "./Pages/Index/Index";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:id?" Component={Index} />
        <Route path="//home" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
