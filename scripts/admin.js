const fs = require('fs');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('episode-form');
    const episodeArtInput = document.getElementById('episode-art');
    const descriptionInput = document.getElementById('description');
    const listenLinkInput = document.getElementById('listen-link');
    const episodesFilePath = '../episodes.json';

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const episodeArt = episodeArtInput.files[0];
        const description = descriptionInput.value;
        const listenLink = listenLinkInput.value;

        if (episodeArt && description && listenLink) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const episodeData = {
                    title: `Episode ${Date.now()}`,
                    description: description,
                    artwork: e.target.result,
                    link: listenLink
                };

                fs.readFile(episodesFilePath, 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error reading episodes file:', err);
                        return;
                    }

                    const episodes = JSON.parse(data);
                    episodes.push(episodeData);

                    fs.writeFile(episodesFilePath, JSON.stringify(episodes, null, 2), (err) => {
                        if (err) {
                            console.error('Error writing episodes file:', err);
                            return;
                        }

                        alert('Episode added successfully!');
                        form.reset();
                    });
                });
            };
            reader.readAsDataURL(episodeArt);
        } else {
            alert('Please fill in all fields and upload artwork.');
        }
    });
});