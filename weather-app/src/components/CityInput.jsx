import React from "react";
import { useState } from "react";
import axios from "axios";
import "./CityInput.css";

function CityInput({ setSearchCity }) {
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (city.trim() === "") {
      alert("Lütfen bir şehir giriniz.");
      return;
    }

    console.log(`Aranan şehir: ${city}`);

    const apiKey = "f7ea5f2b6b92efa498e1ea527c7ffb94";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

    try {
      const response = await axios.get(apiUrl);
      setSearchCity(response.data);
      console.log("API yanıtı:", response.data);
    } catch (error) {
      console.error("API isteği başarısız oldu:", error);
      alert("Şehir bulunamadı. Lütfen geçerli bir şehir adı giriniz.");
    }

    setCity("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="citySearch"
          type="text"
          value={city}
          className="input"
          placeholder="Şehir Giriniz..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="btn-submit">
          Ara
        </button>
      </form>
    </div>
  );
}

export default CityInput;
