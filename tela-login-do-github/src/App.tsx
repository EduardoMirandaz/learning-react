import React from 'react';
import './App.css';
import { SignInPage } from './pages/SignInPage/SignInPage';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignInPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
