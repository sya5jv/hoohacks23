import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import SetupPage from "./Components/Setup.js";
import HomePage from "./Components/Home.js";
import SchedulePage from "./Components/Schedule.js";
import TrafficPage from "./Components/Traffic.js";
import WeatherPage from "./Components/Weather.js";

export default function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/traffic" element={<TrafficPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
