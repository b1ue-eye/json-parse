# JSON Formatter - Chrome Extension

A sleek and powerful Chrome extension to format, beautify, and convert JSON strings and JavaScript objects instantly. Built with Vite, React, and TypeScript.

![Project Screenshot](<img width="779" height="594" alt="image" src="https://github.com/user-attachments/assets/4a4c3730-7669-4352-998e-93e8fd65fc7a" />
) <!-- TODO: Add a screenshot of the extension -->

## Features

- **Instant Formatting**: Beautify ugly, minified JSON with a single click.
- **JSON to Object**: Convert valid JSON strings into easy-to-read JavaScript object literals.
- **Object to JSON**: Convert JavaScript object literals back into standard JSON strings.
- **Safe Parsing**: Uses `json5` for robust and secure parsing of object literals, avoiding the risks of `eval()`.
- **Dual Pane View**: See your input and output side-by-side for easy comparison.
- **Dark & Light Themes**: Switch between themes for your viewing comfort.
- **Modern Tech Stack**: Fast, responsive, and built with Vite, React, and TypeScript.

## Installation

### From the Chrome Web Store

> Coming soon!

### From Source

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/b1ue-eye/json-parse.git
    cd json-parse
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build the extension:**
    ```bash
    npm run build
    ```

4.  **Load the extension in Chrome:**
    - Open Chrome and navigate to `chrome://extensions`.
    - Enable "Developer mode" in the top right corner.
    - Click "Load unpacked".
    - Select the `dist` directory from the project folder.

## Development

To start the development server with HMR (Hot Module Replacement):

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the dev server:**
    ```bash
    npm run dev
    ```

3.  **Load the extension in Chrome:**
    - Go to `chrome://extensions`.
    - Enable "Developer mode".
    - Click "Load unpacked".
    - Select the project's root directory. The `crx` plugin for Vite will handle the necessary manifest configurations for development.

## Technology Stack

- Vite - Next-generation frontend tooling.
- React - A library for building user interfaces.
- TypeScript - Typed JavaScript at scale.
- @crxjs/vite-plugin - A Vite plugin for building Chrome extensions.
- JSON5 - A safe and human-friendly superset of JSON.

## License

This project is licensed under the MIT License.
