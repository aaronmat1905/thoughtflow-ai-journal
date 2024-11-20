import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/navbar';
import WritePost from './Pages/writepage';
import ChatUI from './Pages/chatpage';
import HomePage from './Pages/homepage';
import ProfilePage from './Pages/profilepage';
import Login from './Pages/login'; 
import SearchPosts from "./Pages/searchposts"
import AboutPage from "./Pages/aboutpage"; 
import Signup from "./Pages/signup"; 
import { AuthContextProvider } from './context/AuthContext';
import "./app.css"
const App = () => {
  return (
    <AuthContextProvider>
    <Router>
      <NavBar />
      <Routes path="/" element={<Navigate to="/login" />} >
        <Route path="/write-post" element={<WritePost />} />
        <Route path="/view-post" element={<SearchPosts/>} />
        <Route path="/chat" element={<ChatUI />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </AuthContextProvider>
  );
};

export default App;