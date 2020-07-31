import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo-container">
            <img src="./img/weather-icon.svg" alt="logo" />
            <h1><strong>SimpleWeather</strong></h1>
          </div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>SimpleWeather ©2020 Created by Thomas McGuigan</Footer>
      </Layout>
    </div>
  );
}

export default App;
