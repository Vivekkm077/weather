# weather
Weather App
A simple weather application built with React and Material-UI that fetches weather data using the OpenWeatherMap API.

Features
Search for weather information by city name.
Display current temperature, minimum and maximum temperatures, humidity, and weather description.
Live Demo
Check out the live demo of the application here.

Replace # with the actual URL of your deployed application.

Prerequisites
Node.js (>= 14.x)
npm (>= 6.x) or yarn (>= 1.x)
Getting Started
1. Clone the Repository
git clone https://github.com/Vivekkm077/weather.git
cd Weather-App
2. Install Dependencies
Using npm:

npm install
Using yarn:

yarn install
3. Set Up Environment Variables
Create a .env file in the root of the project and add your OpenWeatherMap API key:

VITE_API_KEY=your_openweathermap_api_key
Replace your_openweathermap_api_key with your actual API key from OpenWeatherMap.

4. Start the Development Server
Using npm:

npm run dev
Using yarn:

yarn dev
Open http://localhost:5173 to view it in the browser.

Project Structure
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
Usage
Enter the name of a city in the search box.
Click the "Search" button.
The weather information for the specified city will be displayed.
Acknowledgements
React
Material-UI
OpenWeatherMap API
Vite
By following these steps, your Vite-based React project should be set up correctly with environment variables. When you deploy your project, update the "Live Demo" section with the actual URL.
