import React from "react";
import "./WeatherCard.css";
import { Card } from "antd";

function WeatherCard({ day, data, active }) {
  const date = new Date(data.list[day * 8].dt_txt);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const min = Math.round(
    (data.list[day * 8].main.temp_min - 273.15) * (9 / 5) + 32
  );
  const max = Math.round(
    (data.list[day * 8].main.temp_max - 273.15) * (9 / 5) + 32
  );
  console.log(data.list[day * 8].main.min_temp);

  return (
    <Card
      className="weather-card"
      title={days[date.getDay()]}
      bordered={false}
      style={{ width: 300 }}
    >
      <p>Low: {min}°F</p>
      <p>High: {max}°F</p>
      <p>{data.list[day * 8].weather[0].description}</p>
      <p>Humidity: {data.list[day * 8].main.humidity}%</p>
      <p>
        Feels like:{" "}
        {Math.round(
          (data.list[day * 8].main.feels_like - 273.15) * (9 / 5) + 32
        )}
        °F
      </p>
    </Card>
  );
}

export default WeatherCard;
