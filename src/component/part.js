import React from 'react';

export const Part = ({ history }) => {

  return (
    <div className="container">
      <div>
        <h5 style={{ textAlign: 'center', marginTop: '50px' }}>Informations du Partenaire</h5>
      </div>
      <div className="form-group">
        <label>Nom du Partenaire:</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>choisir le serveur:</label>
        <select className="form-control">
          <option value="">Sélectionner une option</option>
          <option value="V01">frsopslcftv01</option>
          <option value="V03">frsopslcftv03</option>
        </select>
      </div>

      <div className="form-group">
        <label>Autres Informations:</label>
        <select className="form-control">
          <option value="">Sélectionner une option</option>
          <option value="Port et Adresse Réseau">Afficher le Port et l'Adresse Réseau</option>
          <option value="Type du Flux IDF">Afficher le Type du Flux IDF</option>
          <option value="Informations du Certificat">Afficher les Informations du Certificat</option>
        </select>
      </div>

      <div className="btn-group">
        <div className="d-grid gap-2 mt-3">
          <a href="/Dashboard" className="btn btn-primary login-button">OK</a>
        </div>
        <div className="d-grid gap-2 mt-3 ms-2">
          <a href="/Dashboard" className="btn btn-primary login-button">Annuler</a>
        </div>
      </div>
    </div>
  );
};
