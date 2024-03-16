import React from "react";
import axios from "axios";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async e => {
    e.preventDefault();
    const user = {
      username: username,
      password: password
    };

    try {
      const { data } = await axios.post(
        'http://localhost:8000/token/',
        user,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      localStorage.clear();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);

      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;

      window.location.href = '/';
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        
        <div className="Auth-form-content ">
         
        <div className="logo-container">
        <img src={process.env.PUBLIC_URL + "/images/sopra_log.png"} alt="Logo Sign In" className="signin-logo" /> 
        </div>
          <h3 className="Auth-form-title login-title">Sign In </h3>
         
          <div className="form-group mt-3 password-wrapper" >
            <FaUser className='icon' />
            <input
              className="form-control mt-1"
              placeholder="Username"
              name="username"
              type="text"
              value={username}
              required
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          
        <div className="form-group mt-3 password-wrapper">
            <FaLock className='icon'/>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />
            
          
        </div>

          <div className="remember-forgot-container">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
           </label>
             <a href="/password" className="black-link">Forgot password?</a>
          </div>

          <div className="d-grid gap-2 mt-3">
            <a href="/Dashboard" className="btn btn-primary login-button">Login</a>
          </div>
          
          <div className="mt-3">
           Don't have an account? <a href="/naccount" className="black-link">Create an Account</a>
          </div>

        </div>
      
      </form>
    </div>
  );
};