import './App.css';
import {Layout} from 'antd';
import { Divider } from 'antd';
import React from 'react';
import './Control.js'



const { Header, Footer, Sider, Content } = Layout;
const App = () => (
  <>
    <Layout>
      <Sider>
        <Divider>控制台</Divider>
        <div id = "control"></div>
        <Divider>辅助面板</Divider>
        <div id = "Assist"></div>
      </Sider>
      <Layout>
        <Header><span>VQA数据可视化分析</span></Header>
        <Content><div id = "Overview"></div>Content</Content>
        <Footer><div id = "Details"></div></Footer>
      </Layout>
    </Layout>
  </>
);



export default App;

<style>
</style>