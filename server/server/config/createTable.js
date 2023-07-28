const mysql = require('mysql');

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pureview',
});

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

    // Fermer la connexion à la base de données
    connection.end((err) => {
      if (err) {
        console.error('Erreur lors de la fermeture de la connexion à la base de données :', err);
        return;
      }
      console.log('Connexion à la base de données fermée avec succès.');
    });
  });
});

