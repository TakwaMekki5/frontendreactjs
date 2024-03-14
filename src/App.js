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
            <div className="content-container">
            <div class="form-and-image-container">
                 <div className="image-container">
                 <img src="C:\Users\tmekki\Desktop\frontendreactjs\public\images\sopra_log.png" alt="Logo SopraHR" className="image" />
                </div>
                <div className="form-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
