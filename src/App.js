import './App.css';
import {Layout} from 'antd';
import { Divider } from 'antd';
import React from 'react';
import {Control} from './Control';
import { Assist } from './Assist';

const { Header, Footer, Sider, Content } = Layout;
const App = () => (
  <>
    <Layout>
      <Sider breakpoint = "xl">
        <Divider>控制台</Divider>
        <div id = "control">
        <Control></Control>
        </div>
        <Divider>辅助面板</Divider>
        <div id = "Assist">
        <div id = "Radar"></div>
        <div id = "WordsClouds"></div>
        <Assist Rdivid = "Radar" Wdivid = "WordsClouds"></Assist>
        </div>
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