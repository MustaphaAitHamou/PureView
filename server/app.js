// Importer les modules nécessaires
const express = require('express');
const mysql = require('mysql');
const app = express();

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pureview',
});

app.post('src/api/client/models/Client.js', (req, res) => {
    const formData = req.body;
  
    connection.query('INSERT INTO clients SET ?', formData, (error, results) => {
      console.log('salut');
      if (error) {
        console.error('Erreur lors de l\'insertion des données :', error);
        res.status(500).json({ error: 'Une erreur est survenue' });
      } else {
        console.log('Données insérées avec succès');
        res.status(200).json({ message: 'Données insérées avec succès' });
      }
    });
  });
  


// Middleware pour parser les requêtes JSON
app.use(express.json());

// Établir la connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données :', err);
    return;
  }
  console.log('Connexion à la base de données réussie !');

  // Création de la table "clients"
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS clients (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nom VARCHAR(255) NOT NULL,
      prenom VARCHAR(255) NOT NULL,
      pays VARCHAR(255) NOT NULL,
      adresse1 VARCHAR(255) NOT NULL,
      adresse2 VARCHAR(255),
      ville VARCHAR(255) NOT NULL,
      etat VARCHAR(255) NOT NULL,
      code_postal VARCHAR(10) NOT NULL
    )
  `;

  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Erreur lors de la création de la table :', err);
      return;
    }
    console.log('Table "clients" créée avec succès !');
  });
});

// Route pour l'envoi du formulaire
app.post('/api/client/models/Clients.js', (req, res) => {
  const formData = req.body;

  connection.query('INSERT INTO clients SET ?', formData, (error, results) => {
    if (error) {
      console.error('Erreur lors de l\'insertion des données :', error);
      res.status(500).json({ error: 'Une erreur est survenue' });
    } else {
      console.log('Données insérées avec succès');
      res.status(200).json({ message: 'Données insérées avec succès' });
    }
  });
});

// Démarrer le serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});