import React, { useState, useEffect } from "react";
import "./App.css";
import { Col, Row, Layout, Button, Menu, Typography, Input } from "antd";
import {
  FacebookOutlined,
  PlusOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import WeatherCard from "./WeatherCard";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

// Key for weather API
const API_key = "5875ebc8307f0e80738e6efaa0cc494d";

function App() {
  const [data, setData] = useState();
  const [country, setCountry] = useState("US");
  const [state, setState] = useState("Illinois");
  const [city, setCity] = useState("Chicago");

  // Fetch the data from the API
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state}${country}&appid=${API_key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [city, state, country]);

  // Get the input value from the text field
  function getInputValue() {
    setCity(document.getElementById("city-value").value);
    setCountry(document.getElementById("country-value").value);
    const newState = document.getElementById("country-value").value;
    if (newState) {
      setState(newState.concat(","));
    } else {
      setState("");
    }
  }

  console.log(data);

  return !data ? null : (
    <div className="app-container">
      <Header>
        <div className="header-left">
          <div className="logo-container">
            <img src="./img/weather-icon.svg" alt="logo" />
            <h1>
              <strong>SimpleWeather</strong>
            </h1>
          </div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" className="tab">
              {city.charAt(0).toUpperCase() + city.substr(1, city.length)}
            </Menu.Item>
          </Menu>
          <div className="button-container">
            <Button className="add" shape="circle" icon={<PlusOutlined />} />
          </div>
        </div>
        <div className="header-right">
          <FacebookOutlined className="social-icon" />
          <InstagramOutlined className="social-icon" />
          <TwitterOutlined className="social-icon" />
        </div>
      </Header>
      <div className="content-wrapper">
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Title className="location-header">
              {city.charAt(0).toUpperCase() + city.substr(1, city.length)}
            </Title>
            <Input.Group compact className="input">
              <Input
                id="city-value"
                style={{ width: "33.3%" }}
                placeholder="city"
              />
              <Input
                id="state-value"
                style={{ width: "33.3%" }}
                placeholder="state (if needed)"
              />
              <Input.Search
                id="country-value"
                style={{ width: "33.3%" }}
                placeholder="country"
                onSearch={getInputValue}
              />
            </Input.Group>
            <div className="site-card-wrapper">
              <Row gutter={18}>
                <Col span={4.5}>
                  <WeatherCard
                    day="0"
                    data={data}
                    className="current-day"
                  ></WeatherCard>
                </Col>
                <Col span={4.5}>
                  <WeatherCard day="1" data={data}></WeatherCard>
                </Col>
                <Col span={4.5}>
                  <WeatherCard day="2" data={data}></WeatherCard>
                </Col>
                <Col span={4.5}>
                  <WeatherCard day="3" data={data}></WeatherCard>
                </Col>
                <Col span={4.5}>
                  <WeatherCard day="4" data={data}></WeatherCard>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
      </div>
      <div className="footer" style={{ textAlign: "center" }}>
        SimpleWeather ©2020 Created by Thomas McGuigan
      </div>
    </div>
  );
}

export default App;
