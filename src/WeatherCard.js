import React from 'react';
import './WeatherCard.css';
import { Card } from 'antd';

function WeatherCard() {
    return (
        <Card className="weather-card" title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}

export default WeatherCard
