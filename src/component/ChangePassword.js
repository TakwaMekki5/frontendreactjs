// Import des packages React JS
import axios from "axios";
import { useState } from "react";
import { Password } from "./Password";

// Définition de la fonction Login.
export const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  // Création de la méthode de soumission.
  const submit = async e => {
    e.preventDefault();
    const user = {
      password: password,
      Confirmpassword: ConfirmPassword
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
          <h3 className="Auth-form-title login-title">Change Password </h3>
          <div className="form-group mt-3">
            <input
              className="form-control mt-1"
              placeholder="Password"
              name="Password"
              type="text"
              value={Password}
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              name="Confirmpassword"
              type="Confirmpassword"
              className="form-control mt-1"
              placeholder="Confirm Password"
              value={ChangePassword}
              required
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
    
          <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary login-button">Continue</button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <a href="/login" className="btn btn-primary login-button">Annuler</a>
          </div>
          
        </div>
      </form>
    </div>
  );
};