import './App.css';
import {Layout,Divider,Button,Input,Space, Dropdown, Menu} from 'antd';
import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Assist } from './Block/Assist';
import { AnsPes,QuesPes,AnsComp,QuesComp1,QuesComp2 } from './Block/Overview';
import{ Detail } from './Block/Detail';
import data from "./Data/Abstract.json";

import QuesAbsData from './Data/SunburstAbstract.json';
import QuesRealData from './Data/SunburstReal.json';
import QuesTotalData from './Data/SunburstTot.json';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);
const Pes = ['QuesComp1','QuesComp2','AnsComp'];

export class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      menu:(
        <Menu
          onClick={(e) => {
            this.setState({
              overviewRender:Pes[e.key]
            });
            }
          }
          items={[
            {
              key: '0',
              label: '首三词分布对比',
            },
            {
              key: '1',
              label: '问题长度与词云对比',
            },
            {
              key: '2',
              label: '答案数据对比',
            },
          ]}
        />
      ),
      dataGet: 0,
      totalData: data,
      totalQuesData: QuesTotalData,
      absQuesData: QuesAbsData,
      realQuesData: QuesRealData,
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
      case 'QuesPes': return <QuesPes SunburstData = {this.state.totalQuesData}/>
      case 'AnsPes' :return <AnsPes data = {this.state.totalData}/>
      case 'QuesComp1' : return <QuesComp1 data = {this.state.QuesRealData}/>
      case 'QuesComp2' : return <QuesComp2 data/>
      case 'AnsComp' : return <AnsComp data = {this.state.totalData}/>
      default : return <QuesPes data = {this.state.totalData}/>
    }
  }

  render(){
    //if(this.state.dataGet === 0) this.getData(); 
    console.log(this.state.totalData);
    return (
      <div id = "Apps">
        <Layout>
          <Sider  collapsedWidth = "300" width="300">
            <Divider>控制台</Divider>
            <div id = "control">
              <Search id = "search" placeholder="输入以搜索数据~" onSearch={onSearch} enterButton />
              <Button id = "Ques" block = "True" onClick={() => {this.PesSet(1);this.ShowComponent('QuesPes')}}>问题视角</Button>
              <Button id = "Ans" block = "True" onClick={() => {this.PesSet(0);this.ShowComponent('AnsPes')}}>答案视角</Button>
              <Dropdown.Button overlay={this.state.menu}>Real & AbstractImages对比</Dropdown.Button>
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