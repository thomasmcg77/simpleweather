import React from 'react';
import './App.css';
import { Card, Col, Row, Layout, Button, Menu, Typography } from 'antd';
import { FacebookOutlined, PlusOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import WeatherCard from './WeatherCard';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="header-left">
            <div className="logo-container">
              <img src="./img/weather-icon.svg" alt="logo" />
              <h1><strong>SimpleWeather</strong></h1>
            </div>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            <div className="button-container">
              <Button className="add" shape="circle" icon={<PlusOutlined />} />
            </div>
          </div>
          <div className="header-right">
            <FacebookOutlined />
            <InstagramOutlined />
            <TwitterOutlined />
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <div className="site-card-wrapper">
              <Row gutter={18}>
                <Col span={4.5}>
                  <WeatherCard></WeatherCard>
                </Col>
                <Col span={4.5}>
                  <WeatherCard></WeatherCard>
                </Col>
                <Col span={4.5}>
                  <WeatherCard></WeatherCard>
                </Col>
                <Col span={4.5}>
                  <WeatherCard></WeatherCard>
                </Col>
                <Col span={4.5}>
                  <WeatherCard></WeatherCard>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>SimpleWeather ©2020 Created by Thomas McGuigan</Footer>
      </Layout>
    </div>
  );
}

export default App;
