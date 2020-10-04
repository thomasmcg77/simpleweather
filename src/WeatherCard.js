import React from 'react';
import './WeatherCard.css';
import { Card } from 'antd';

function WeatherCard({day, data}) {
    const date = new Date(data.list[day*8].dt_txt);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(date);

    return (
        <Card className="weather-card" title={days[date.getDay()]} bordered={false} style={{ width: 300 }}>
            <p>Temperature: {Math.round((data.list[day*8].main.temp - 273.15) * (9 / 5) + 32)}°F</p>
            <p>{data.list[day*8].weather[0].description}</p>
            <p>Humidity: {data.list[day*8].main.humidity}%</p>
            <p>Feels like: {Math.round((data.list[day*8].main.feels_like - 273.15) * (9 / 5) + 32)}°F</p>
        </Card>
    )
}

export default WeatherCard
