## Weather App

A simple weather application built with React and Material-UI that fetches weather data using the OpenWeatherMap API.

## Features

- Search for weather information by city name.
- Display current temperature, minimum and maximum temperatures, humidity, and weather description.

## Live Demo

Check out the live demo of the application [here](https://weatherappbyh.netlify.app/).

Replace `#` with the actual URL of your deployed application.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/HarryOhm33/Weather-App.git
cd Weather-App
```

### 2. Install Dependencies

Using npm:

```sh
npm install
```

Using yarn:

```sh
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add your OpenWeatherMap API key:

```
VITE_API_KEY=your_openweathermap_api_key
```

Replace `your_openweathermap_api_key` with your actual API key from [OpenWeatherMap](https://openweathermap.org/api).

### 4. Start the Development Server

Using npm:

```sh
npm run dev
```

Using yarn:

```sh
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Project Structure

```
weather-app/
├── public/             # Static public assets
├── src/                # Source files
│   ├── components/     # React components
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point for React
├── .env                # Environment variables
├── vite.config.js      # Vite configuration
├── package.json        # Project configuration and dependencies
└── README.md           # Project documentation
```

## Usage

1. Enter the name of a city in the search box.
2. Click the "Search" button.
3. The weather information for the specified city will be displayed.

## Acknowledgements

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Vite](https://vitejs.dev/)

By following these steps, your Vite-based React project should be set up correctly with environment variables. When you deploy your project, update the "Live Demo" section with the actual URL.
