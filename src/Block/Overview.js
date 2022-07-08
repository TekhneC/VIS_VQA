import { render } from "@testing-library/react";
import { Line } from "../graphs/Line";
import { StackedBar } from "../graphs/StackedBar";
import { SunBurst } from "../graphs/Sunburst";
import React from "react";
import ReactDOM from 'react-dom/client';
import SundataReal from '../Data/SunburstReal.json';
import SundataAbs from '../Data/SunburstAbstract.json';

import './Overview.css';
import { WordsClouds } from "../graphs/WordsCloud";

export class QuesPes extends React.Component{
    render(){
        return(
        <div>
            <SunBurst id = "SunQues" data = {this.props.SunburstData} max = {97846} title = "问题首三词分布"></SunBurst>
        </div>
        );
    }
}

export class AnsPes extends React.Component{
    render(){
        return (
            <div>
            <StackedBar id = "AnsBar" series = {BarLineRealSeries} subtext="出于显示效果和性能考虑，\n占比低于0.05%的词语不予以显示。" xname={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7','0.8','0.9','1.0']}></StackedBar>
            
            <WordsClouds id='wordsclouds' style='position:absolute'>
            </WordsClouds>
            
            </div>
        )
    }
}

export class QuesComp extends React.Component{
    render(){
        return (
            <div id = "QuesComp">
            <SunBurst id = "SunQuesCompReal" data = {SundataReal} max = {87868} title = "Real Image 首三词"></SunBurst>
            <SunBurst id = "SunQuesCompAbs" data = {SundataAbs} max = {11691}  title = "Abstract Image 首三词"></SunBurst>
            </div>
        )
    }
}

export class AnsComp extends React.Component{
    render(){
        return (
            <Line id = "RealLine" data = {this.props.data}></Line>
            )
    }
}

//const element = document.getElementById('Overview');
//ReactDOM.render(element,document.getElementById('root'));



const BarLineRealSeries=[
    {
        name: '<3',
        type: 'bar',
        stack:'x',
        emphasis: {
          focus: 'series'
        },
        data: [0.15,0.68125,  0.6360601,0.5198188,0.435185185,0.332647877,0.220175439,0.125931738,0.064718759,0.022431544]
      },
      {
        name: '3~7',
        type: 'bar',
        stack:'x',
        emphasis: {
          focus: 'series'
        },
        data: [0.85,0.31875,0.358931553,0.469988675,0.542292292,0.599491956,0.641102757,0.620831699,0.498889629,0.264051125]
      },
    
    {
    name: '>7',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [0,0,0.005008347,0.010192525,0.022522523,0.067860167,0.138721805,0.253236563,0.436391612,0.713517331]
  },
  {
    name: 'Question Quantity',
    type: 'line',
    yAxisIndex: 1,
    data: [
      20,160,599,1766,3996,8267,15960,30588,63042,147248]
  }
]