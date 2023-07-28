const mysql = require('mysql');

// Créez une connexion à la base de données MySQL en utilisant les informations de connexion de database.js
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pureview',
});

// Connectez-vous à la base de données MySQL
connection.connect((error) => {
  if (error) {
    console.error('Erreur de connexion à la base de données:', error);
  } else {
    console.log('Connecté à la base de données MySQL.');
  }
});

// Fonction pour créer un nouvel utilisateur dans la base de données
const createUser = (userData) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO clients SET ?';

    connection.query(query, userData, (error, results) => {
      if (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
        reject(error);
      } else {
        console.log('Utilisateur créé avec succès.');
        resolve(results);
      }
    });
  });
};

// Utilisez cette fonction dans votre gestionnaire de soumission de formulaire
const handleSubmit = async (values) => {
  try {
    const response = await createUser({
      nom: values.firstName,
      prenom: values.lastName,
      pays: values.country,
      adresse: values.street1,
      adresse2: values.street2,
      ville: values.city,
      etat: values.state,
      codePostal: values.zipCode,
    });

    console.log('Réponse de la base de données:', response);
    // Réinitialisez le formulaire ou redirigez l'utilisateur vers une autre page si nécessaire
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
    // Affichez un message d'erreur à l'utilisateur ou prenez d'autres mesures en cas d'erreur
  }
};

// Assurez-vous de fermer la connexion à la base de données lorsque vous n'en avez plus besoin
const closeConnection = () => {
  connection.end((error) => {
    if (error) {
      console.error('Erreur lors de la fermeture de la connexion:', error);
    } else {
      console.log('Connexion à la base de données fermée.');
    }
  });
};

module.exports = { handleSubmit, closeConnection };
