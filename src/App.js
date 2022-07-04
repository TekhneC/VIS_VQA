import './App.css';
import {Layout} from 'antd';
import { Divider } from 'antd';
import React from 'react';
import {Control} from './Control';
import { Assist } from './Assist';
import { WordsClouds } from './graphs/WordsCloud';
import { StackedBar } from './graphs/StackedBar';

const { Header, Footer, Sider, Content } = Layout;
const App = () => (
  <>
    <Layout>
      <Sider  collapsedWidth = "300" width="300">
        <Divider>控制台</Divider>
        <div id = "control">
        <Control></Control>
        </div>
        <Divider>辅助面板</Divider>
        <div id = "Assist">
        <Assist Rdivid = "Radar" Wdivid = "WordsClouds"></Assist>
        </div>
      </Sider>
      <Layout>
        <Header><span>VQA数据可视化分析</span></Header>
        <Content id = "Overview"><div id = "Overviews"></div>Content</Content>
        <Content id = "Detail">
        <StackedBar id = "hrer"></StackedBar></Content>
        <Footer ><div id = "footer"></div></Footer>
      </Layout>
    </Layout>
  </>
);



export default App;

<style>
</style>