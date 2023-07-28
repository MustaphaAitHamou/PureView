const User = require('./api/client/models/Client.js');

// Exemple de test de création d'un nouvel utilisateur
const testCreateUser = async () => {
  const userData = {
    nom: 'Doe',
    prenom: 'John',
    pays: 'France',
    adresse: '1 rue de la Paix',
    ville: 'Paris',
    etat: 'Île-de-France',
    codePostal: '75000',
  };

  try {
    const newUser = await User.createUser(userData);
    console.log('Nouvel utilisateur créé :', newUser);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur', error);
  }
};

// Appeler ici d'autres tests pour les autres opérations CRUD

// Appeler les tests
testCreateUser();
