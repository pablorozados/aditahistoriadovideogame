# Podcast Timeline

This project is a simple web application that showcases a timeline of podcast episodes related to gaming history. It allows users to view episodes, along with their descriptions and artwork, and provides an admin interface for adding new episodes.

## Project Structure

The project consists of the following files and directories:

- `src/`: Contains all the source files for the web application.
  - `index.html`: The main page displaying the timeline of podcast episodes.
  - `admin.html`: The admin interface for adding new podcast episodes.
  - `styles/`: Contains CSS files for styling the application.
    - `main.css`: The main stylesheet for the website.
  - `scripts/`: Contains JavaScript files for functionality.
    - `timeline.js`: Handles loading and displaying podcast episodes on the timeline page.
    - `admin.js`: Manages the form submission for adding new episodes.
  - `assets/`: Contains static assets such as images.
    - `episode-art-placeholder.png`: A placeholder image for episode artwork.

- `episodes.json`: A JSON file that stores data for each podcast episode, including titles, descriptions, artwork URLs, and listening links.

- `README.md`: This documentation file explaining the project and its usage.

- `.gitignore`: Specifies files and directories to be ignored by Git.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository from GitHub.
2. Open the `src/index.html` file in your web browser to view the podcast timeline.
3. To add new episodes, open `src/admin.html` and fill out the form with the episode details.

## Usage

- **Viewing Episodes**: Navigate to the main page to see the timeline of episodes. Each episode will display its title, description, and artwork.
- **Adding Episodes**: Use the admin interface to submit new episodes. Fill in the required fields and upload the episode artwork.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and contributions are welcome!

## License

This project is open-source and available under the MIT License.