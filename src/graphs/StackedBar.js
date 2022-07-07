import React from 'react';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  ToolboxComponent
} from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    MarkLineComponent,
    BarChart,
    LineChart,
    CanvasRenderer,
    UniversalTransition
]);

var BarCharts;

export class StackedBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        window.addEventListener("resize",() => {
            if(BarCharts){
                var len = document.getElementById("Details").style.height;
                document.getElementById(this.props.id).style.height = (len / 2) + 'px';
                BarCharts.resize()
            }
        })
        setTimeout(() => {this.getOption()})
    }

    getOption = () => {
        var chartDom = document.getElementById(this.props.id);
        BarCharts = echarts.init(chartDom);
        var option;
        option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {},
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7','0.8','0.9','1.0']
              }
            ],
            yAxis: [
              {
                type: 'value'
              },
              {
                type:'value'
              }
            ],
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            series: 
              [
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
          };
        option && BarCharts.setOption(option);
    }
   
    render(){
        return (
            <div id = {this.props.id} style={{height: 200,width: 400}}></div>
        )
    }
}
