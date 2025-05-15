const timelineContainer = document.getElementById('timeline');

fetch('episodes.json')
  .then(response => response.json())
  .then(episodes => {
    const timeline = document.getElementById('timeline');
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