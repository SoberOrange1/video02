# Video Player App

This project is a simple video player application built with React. It allows users to play, pause, and seek through a video. The video used in this application is sourced from an external URL.

## Features

- Play and pause functionality
- Progress bar for seeking through the video
- Display of current playback time and total duration

## Project Structure

```
video-02
├── src
│   ├── components
│   │   ├── VideoPlayer.js       # Manages video playback
│   │   ├── ProgressBar.js       # Displays progress bar and time
│   │   └── Controls.js          # Provides play/pause buttons
│   ├── styles
│   │   ├── VideoPlayer.css      # Styles for VideoPlayer component
│   │   ├── ProgressBar.css      # Styles for ProgressBar component
│   │   └── Controls.css         # Styles for Controls component
│   ├── utils
│   │   └── timeFormatter.js     # Utility for formatting time
│   └── App.js                   # Main application file
├── public
│   └── index.html               # Main HTML file
├── package.json                 # npm configuration file
└── README.md                    # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd video-02
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the app in your default web browser.

## License

This project is licensed under the MIT License.