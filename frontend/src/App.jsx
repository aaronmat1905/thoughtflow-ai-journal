// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/navbar';
import { WritePost } from './Pages/writepage';
import { ChatUI } from './Pages/chatpage';
import {HomePage} from "./Pages/homepage"; 
import {ProfilePage} from "./Pages/profilepage"; 
import './app.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> Uncomment if you have a home page */}
        <Route path="/write-post" element={<WritePost />} />
        <Route path="/chat" element={<ChatUI />} />
		<Route path= "/homepage" element = {<HomePage/>} />
		<Route path= "/profile" element = {<ProfilePage/>} />
      </Routes>
    </Router>
  );
}

export default App;