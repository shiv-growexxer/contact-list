import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
import "./css/searchComp.css";
import axios from "axios";

//5a178202403a4fa39a4d194a27e08d9a
// 5a178202403a4fa39a4d194a27e08d9a
//api.openweathermap.org/data/2.5/weather?q={navsari}&appid={5a178202403a4fa39a4d194a27e08d9a}

const Weather = () => {
  const [city, setCity] = useState("Navsari");
  const [citysecond, setCitysecond] = useState("navsari");
  const [weather, setWeather] = useState({});
  var [data, setdata] = useState({});
  const change = () => {
    setCitysecond(city);
  };

  useEffect(() => {
    gettingdata();
    // alert("updated");
  }, [citysecond]);

  const gettingdata = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${citysecond}&units=metric&appid=5a178202403a4fa39a4d194a27e08d9a`;
      const fet = await fetch(url);
      data = await fet.json();

      const { temp, feels_like, temp_min, temp_max, humidity, pressure } =
        data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const weatherInfo = {
        temp,
        feels_like,
        temp_max,
        temp_min,
        weathermood,
        name,
        speed,
        country,
        sunset,
        humidity,
        pressure,
      };
      setWeather(weatherInfo);
    } catch (e) {
      console.log("catch err " + e);
    }
  };

  return (
    <div>
      <div className="search">
        <Input
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="primary" onClick={change}>
          Search
        </Button>
      </div>
      <Card city={citysecond} data={weather} />
    </div>
  );
};

export default Weather;
