import React, { useState, useEffect } from "react";
import "./WeatherWindow.css";

function WeatherWindow({ searchCity }) {
  const [zaman, setZaman] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setZaman(new Date());
    }, 1000);

    return () => clearInterval(interval); // component unmount olursa temizle
  }, []);

  if (!searchCity || !searchCity.main || !searchCity.weather) {
    return <p>Şehir bilgisi bulunamadı. Lütfen bir şehir arayın.</p>;
  }

  const iconCode = searchCity.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="main-window">
      <h3> {zaman.toLocaleDateString("tr-TR")}</h3>
      <h3> {zaman.toLocaleTimeString("tr-TR")}</h3>

      <h1>{searchCity.name}</h1>

      <div className="weather-description">
        <img src={iconUrl} alt={searchCity.weather[0].description} />
        <p>Sıcaklık : {searchCity.main.temp}°C</p>
        <p>Hissedilen Sıcaklık : {searchCity.main.feels_like}</p>
        <p>Hava Durumu : {searchCity.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherWindow;
