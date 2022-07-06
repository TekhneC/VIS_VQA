import './App.css';
import {Layout,Divider,Button,Input,Space} from 'antd';
import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Assist } from './Block/Assist';
import { AnsPes,QuesPes,AnsComp,QuesComp } from './Block/Overview';
import{ Detail } from './Block/Detail';
import { WordsClouds } from './graphs/WordsCloud';
import { StackedBar } from './graphs/StackedBar';
import * as echarts from 'echarts/core';
import {$,jQuery} from 'jquery';
import data from "./Data/Abstract.json";

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);


export class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      dataGet: 0,
      totalData:data,
      overviewRender:'',
      isQuesPes:1
    }
  }
  
  ShowComponent(block){
      this.setState({
        overviewRender:block
      })
  }  

  PesSet = (i) => {
    this.setState({
      isQuesPes: i
    })
  }

  renderComponent = ()=>{
    switch(this.state.overviewRender){
      case 'QuesPes': return <QuesPes data = {this.state.totalData}/>
      case 'AnsPes' :return <AnsPes data = {this.state.totalData}/>
      case 'QuesComp' : return <QuesComp data = {this.state.totalData}/>
      case 'AnsComp' : return <AnsComp data = {this.state.totalData}/>
      default : return <QuesPes data = {this.state.props}/>
    }
  }

  render(){
    //if(this.state.dataGet === 0) this.getData(); 
    return (
      <div id = "Apps">
        <Layout>
          <Sider  collapsedWidth = "300" width="300">
            <Divider>控制台</Divider>
            <div id = "control">
              <Search id = "search" placeholder="输入以搜索数据~" onSearch={onSearch} enterButton />
              <Button id = "Ques" block = "True" onClick={() => {this.PesSet(1);this.ShowComponent('QuesPes')}}>问题视角</Button>
              <Button id = "Ans" block = "True" onClick={() => {this.PesSet(0);this.ShowComponent('AnsPes')}}>答案视角</Button>
              <Button id = "Comp" block = "True" onClick={() => {this.state.isQuesPes ? this.ShowComponent('QuesComp'):this.ShowComponent('AnsComp')}}>对比数据</Button>
            </div>
            <Divider>辅助面板</Divider>
            <div id = "Assist">
            <Assist Data = {this.state.totalData}></Assist>
            </div>
          </Sider>
          <Layout>
            <Header><span>VQA数据可视化分析</span></Header>
            <Content id = "Overview">
              {this.renderComponent()}
            </Content>
            <Content id = "Detail">
              <Detail Data = {this.state.totalData}></Detail></Content>
            <Footer ><div id = "footer"></div></Footer>
          </Layout>
        </Layout>
      </div>
    );
    }
}

<style>
</style>