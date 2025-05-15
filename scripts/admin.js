const fs = require('fs');

const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "FIREBASE_AUTH_DOMAIN",
  databaseURL: "FIREBASE_DATABASE_URL",
  projectId: "FIREBASE_PROJECT_ID",
  storageBucket: "FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
  appId: "FIREBASE_APP_ID",
  measurementId: "FIREBASE_MEASUREMENT_ID"
};

firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('episodeForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const episode = {
      title: document.getElementById('title').value,
      description: tinymce.get('description').getContent(),
      image: document.getElementById('image').value,
      spotify: document.getElementById('spotify').value,
      apple: document.getElementById('apple').value,
      deezer: document.getElementById('deezer').value,
      amazon: document.getElementById('amazon').value,
      startYear: document.getElementById('startYear').value,
      endYear: document.getElementById('endYear').value
    };

    firebase.database().ref('episodes').push(episode)
      .then(() => {
        alert('Episódio cadastrado com sucesso!');
        form.reset();
        tinymce.get('description').setContent('');
      })
      .catch((error) => {
        alert('Erro ao cadastrar episódio: ' + error.message);
      });
  });
});