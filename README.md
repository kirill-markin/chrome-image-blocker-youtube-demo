# chrome-image-blocker-youtube-demo

## Overview

`chrome-image-blocker-youtube-demo` is a simple Chrome extension designed to demonstrate how to toggle image loading settings using a button. This extension adds a button to the browser's popup interface, allowing users to enable or disable image loading with a single click.

## Features

- **Toggle Image Loading**: A button in the popup interface to toggle image loading on or off.
- **Persistent State**: The toggled state is saved using Chrome's storage API, ensuring it persists across browser sessions.
- **Minimalist Design**: Simple and clean user interface for easy interaction.

## Installation

1. Clone the repository from GitHub.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned the repository.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. You will see a popup with a button labeled "Toggle Setting".
3. Click the button to toggle image loading on or off.
4. The current state of the setting is persisted using Chrome's storage API.

## Files and Directory Structure

- **.gitignore**: Specifies files and directories to be ignored by Git.
- **LICENSE**: Contains the MIT License for the project.
- **README.md**: This file, providing an overview and documentation for the extension.
- **manifest.json**: Defines the extension's metadata and permissions.
- **popup.html**: The HTML file for the popup interface.
- **popup.js**: JavaScript file for handling the popup's button click event.
- **background.js**: Handles background tasks and listeners.
- **content.js**: Manages content scripts and interactions with web pages.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Feel free to open issues or submit pull requests to improve this extension. Contributions are welcome!

## Contact

For questions or feedback, please contact [Your Name](mailto:your.email@example.com).