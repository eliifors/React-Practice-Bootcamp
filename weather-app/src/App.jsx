import React from "react";
import { useState } from "react";
import "./App.css";
import CityInput from "./components/CityInput";
import WeatherWindow from "./components/WeatherWindow";

function App() {
  const [searchCity, setSearchCity] = useState([]);
  return (
    <div className="App">
      <CityInput setSearchCity={setSearchCity} />
      <WeatherWindow searchCity={searchCity} />
    </div>
  );
}

export default App;
