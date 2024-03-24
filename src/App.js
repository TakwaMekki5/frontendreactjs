import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./component/login";
import { NAccount } from './component/NAccount';
import { Password } from './component/Password';
import { ChangePassword } from './component/ChangePassword';
import { Navigation } from './component/Navigation';
import { Home } from "./component/home";
import { Dashboard } from './component/Dashboard';
import { Logout } from './component/logout';
import { Part } from './component/part';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <div className="content-container">
                <div className="form-and-image-container">
                    <div className="form-container">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/password" element={<Password />} />
                            <Route path="/naccount" element={<NAccount />} />
                            <Route path="/changepassword" element={<ChangePassword />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/part" element={<Part />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/home" element={<Home />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
