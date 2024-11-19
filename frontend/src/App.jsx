import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/navbar';
import WritePost from './Pages/writepage';
import ChatUI from './Pages/chatpage';
import HomePage from './Pages/homepage';
import ProfilePage from './Pages/profilepage';
import Login from './Pages/login'; // Import the Login component

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/write-post" element={<WritePost />} />
        <Route path="/chat" element={<ChatUI />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
};

export default App;