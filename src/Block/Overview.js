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
            <Line id = "LineQues" xdata = {LengthX} series = {LengthRealSeries} title = "答案长度分布"></Line>
        </div>
        );
    }
}

export class AnsPes extends React.Component{
    render(){
        return (
            <div>
            <StackedBar id = "AnsConfiBar" ></StackedBar>
            <StackedBar id = "AnsColor" title = "颜色类回答分布" xdata = {TypeAnsColorX} series = {TypeAnsColorSeries}></StackedBar>
            <StackedBar id = "AnsNum" title = "数字类回答分布" xdata = {TypeAnsNumX} series = {TypeAnsNumSeries}></StackedBar>
            </div>
        )
    }
}

export class QuesComp1 extends React.Component{
    render(){
        return (
            <div id = "QuesComp1">
            <SunBurst id = "SunQuesCompReal" data = {SundataReal} max = {87868} title = "Real Image 首三词"></SunBurst>
            <SunBurst id = "SunQuesCompAbs" data = {SundataAbs} max = {11691}  title = "Abstract Image 首三词"></SunBurst>
            </div>
        )
    }
}

export class QuesComp2 extends React.Component{
    render(){
        return (
            <div id = "QuesComp2">
                <StackedBar id = "BarQuesComp"></StackedBar>
            </div>
        )
    }
}

export class AnsComp extends React.Component{
    render(){
        return (
            <div>
            <StackedBar id = "TypeRealConfi" xdata = {ConfiAnsRealX} series = {ConfiAnsRealSeries}></StackedBar>
            
            </div>    
        )
    }
}


const TypeAnsColorX = ['white','red','blue','black','green',
                        'brown','yellow','gray','orange','tan','other colors'];
const TypeAnsColorSeries = [  
    {
    name: 'Abstract',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [3335,6021,3133,1443,
        1161,2714,2688,1344,833,940,3388
        ]
    },{
    name: 'Real',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [34632,20742,21157,21037,16253,14316,
        11152,8908,5424,2542,43257]
    }
]

const TypeAnsNumX = ['2','1','3','4','5','6','other nums'];
const TypeAnsNumSeries = [  
    {
    name: 'Abstract',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [17279,9522,6070,2323,3294,1729,347,2463]
    },{
    name: 'Real',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [57332,58326,29295,21331,20445,10831,8468,75712]
    }
]

const ConfiAnsRealX = ['0.1','0.2','0.3','0.4','0.5','0.6','0.7','0.8','0.9','1.0']
const ConfiAnsRealSeries = [
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
const ConfiAnsAbsSeries = [
    {
    name: '<3',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [0,0,0,0.363636364,0.352459016,0.274314214,0.136436597,0.072524827,0.037471783,0.015570874]
  },
  {
    name: '3~7',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [0,0,0,0.575757576,0.540983607,0.581047382,0.612359551,0.551008125,0.416252822,0.219286889]
  },{
    name: '>7',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [
        0,0,0,0.060606061,0.106557377,0.144638404,0.251203852,0.376467048,0.546275395,0.765142237]
  },
  {
    name: 'Question Quantity',
    type: 'line',
    yAxisIndex: 1,
    data: [0,0,0,33,122,401,1246,3323,8860,28579]
  }
]
const ConfiAnsSeries = [
    {
        name: '<3',
        type: 'bar',
        stack:'x',
        emphasis: {
          focus: 'series'
        },
        data: [
            0.15
            ,0.68125
            ,0.6360601
            ,0.516953863
            ,0.432734337
            ,0.329949239
            ,0.214111357
            ,0.120698298
            ,0.061361297
            ,0.021316408]
      },
      {
        name: '3~7',
        type: 'bar',
        stack:'x',
        emphasis: {
          focus: 'series'
        },
        data: [
            0.85,
            0.31875,
            0.358931553,
            0.471928849,
            0.542253521,
            0.598638671,
            0.639021272,
            0.613989561,
            0.488706851,
            0.256775126]
      },
    
    {
    name: '>7',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [
        0,
        0,
        0.005008347,
        0.011117287,
        0.025012142,
        0.07141209,
        0.146867372,
        0.265312141,
        0.449931852,
        0.721908467]
  },
  {
    name: 'Question Quantity',
    type: 'line',
    yAxisIndex: 1,
    data: [
      
20,
160,
599,
1799,
4118,
8668,
17206,
33911,
71902,
175827]
  }
]



//length
//real
const LengthX = ['2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
const LengthRealSeries=[
    {
        name:'Real',
        type:'line',
        data:[8,6008,29089,56321,45791,32303,22083, 10387,5525,3196,1564,900,506,312,180,91,38,33,6,1,2,1]
    },{
        name:'Abstract',
        type:'line',
        data:[1,1498,5366,8289,6336,5760,3562,2001,1179,625,315,193,81,55,40,11,9,7,0,0,0,0]
    },{
        name:'Total',
        type:'line',
        data:[9,7506,34455,64610,52127,38063,25645,12388,6704,3511,1757,981,561,351,191,100,45,6,1,2,1]
    }
]

//丑陋堆叠
//real

/*data: ['real number', 'abstract number']


[
    {
    name: '0',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [0.084918060,0.055969160]
  },
  {
    name: '1',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [0.231730804 ,0.229466329 ]
  },
  {
    name: '2',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [0.227767828,0.416311288 ]
  },
  {
    name: '3',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [0.116423316,0.146247440 ]
  },
  {
    name: '4',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [0.079664537,0.079363932]
  },
  {
    name: '5',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [0.043048711,0.041657632 ]
  },
  {
    name: '6',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [0.033645580,0]
  },
  {
    name: 'other',
    type: 'bar',
    stack:'x',
    emphasis: {
      focus: 'series'
    },
    data: [0.182801164,0.030984219]
  },
]
*/