const timelineContainer = document.getElementById('timeline');

fetch('episodes.json')
  .then(response => response.json())
  .then(episodes => {
    const timeline = document.getElementById('timeline');
    episodes.forEach(ep => {
      const div = document.createElement('div');
      div.className = 'episode';
      div.innerHTML = `
        <img src="${ep.image}" alt="${ep.title}">
        <h2>${ep.title}</h2>
        <p>${ep.description}</p>
        <a href="${ep.spotify}" target="_blank">Ouça no Spotify</a>
        <div style="clear:both"></div>
      `;
      timeline.appendChild(div);
    });
  });