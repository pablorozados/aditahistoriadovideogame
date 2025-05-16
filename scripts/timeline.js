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

const timeline = document.getElementById('timeline');

firebase.database().ref('episodes').once('value')
  .then(snapshot => {
    const episodes = [];
    snapshot.forEach(child => {
      episodes.push(child.val());
    });

    // Ordena por ano de início (opcional)
    episodes.sort((a, b) => a.startYear - b.startYear);

    episodes.forEach(ep => {
      const div = document.createElement('div');
      div.className = 'episode';
      div.innerHTML = `
        <div class="years">${ep.startYear} - ${ep.endYear}</div>
        <img src="${ep.image}" alt="${ep.title}">
        <h2>${ep.title}</h2>
        <p>${ep.description}</p>
        <div class="links">
          ${ep.spotify ? `<a href="${ep.spotify}" target="_blank">Spotify</a>` : ''}
          ${ep.apple ? `<a href="${ep.apple}" target="_blank">Apple Podcasts</a>` : ''}
          ${ep.deezer ? `<a href="${ep.deezer}" target="_blank">Deezer</a>` : ''}
          ${ep.amazon ? `<a href="${ep.amazon}" target="_blank">Amazon Music</a>` : ''}
        </div>
        <div style="clear:both"></div>
      `;
      timeline.appendChild(div);
    });
  });

<!-- Firebase App (core) -->
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
<!-- Firebase Database -->
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>
<!-- timeline.js -->
<script src="scripts/timeline.js"></script>