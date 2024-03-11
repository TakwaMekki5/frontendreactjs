import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./component/login";
import { Home } from "./component/home";
import { Navigation } from './component/Navigation';
import { Logout } from './component/logout';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <div className="form-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
