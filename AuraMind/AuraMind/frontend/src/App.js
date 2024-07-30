import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} /> {}
            <Route path="/chat" element={<Chat />} /> {}
        </Routes>
    </Router>
);

export default App;