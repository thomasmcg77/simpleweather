import React from 'react';
import './WeatherCard.css';
import { Card } from 'antd';

function WeatherCard({day, data}) {
    console.log(data);
    console.log(data['list'][0]['dt']);

    return (
        <Card className="weather-card" title={"Title"} bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}

export default WeatherCard
