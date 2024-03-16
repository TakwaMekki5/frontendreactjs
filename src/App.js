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
            <div class="form-and-image-container">
                
                <div className="form-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                    <Routes>
                          <Route exact path="/" element={<Login/>} />
                          <Route path="/Password" element={<Password/>} />
                     </Routes>
                    <Routes>
                          <Route exact path="/" element={<Login/>} />
                          <Route path="/naccount" element={<NAccount/>} />
                     </Routes>
                     <Routes>
                           <Route path="/changepassword" element={<ChangePassword />} />
                     </Routes>
                     <Routes>
                           <Route path="/dashboard" element={<Dashboard/>} />
                     </Routes>
                     <Routes>
                           <Route path="/part" element={<Part/>} />
                     </Routes>
                    
                </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
