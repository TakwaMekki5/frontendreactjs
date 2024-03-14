// Import des packages React JS
import axios from "axios";
import { useState } from "react";

// Définition de la fonction Login.
export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Création de la méthode de soumission.
  const submit = async e => {
    e.preventDefault();
    const user = {
      username: username,
      password: password
    };

    // Création de la requête POST
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

      // Initialisation des tokens d'accès et de rafraîchissement dans le local storage
      localStorage.clear();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);

      // Configuration du header pour inclure le token d'accès dans chaque requête
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;

      // Redirection vers la page d'accueil
      window.location.href = '/';
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  // Rendu du composant
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
        <div className="logo-container">
          <img src="C:\Users\tmekki\Desktop\frontendreactjs\public\images\Logo_Sign_In.jpg" alt="Logo Sign In" className="signin-logo" />
        </div>
          <h3 className="Auth-form-title login-title">Sign In </h3>
          <div className="form-group mt-3">
            <input
              className="form-control mt-1"
              placeholder="Username*"
              name="username"
              type="text"
              value={username}
              required
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
           
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Password*"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="remember-forgot-container">
              <label className="remember-me">
               <input type="checkbox" /> Remember me
              </label>
             <a href="/forgot-password" className="forgot-password-link">Forgot password?</a>
            </div>

          <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary login-button">Login</button>
          <div className="mt-3">
            Don't have an account? <a href="/signup">Create an Account</a>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};

