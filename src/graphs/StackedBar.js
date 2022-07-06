import React from 'react';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  ToolboxComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    MarkLineComponent,
    BarChart,
    CanvasRenderer
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
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            series: [
              {
                name: 'Direct',
                type: 'bar',
                emphasis: {
                  focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                name: 'Email',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                  focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: 'Union Ads',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                  focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: 'Video Ads',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                  focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                name: 'Search Engine',
                type: 'bar',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                emphasis: {
                  focus: 'series'
                }
              },
              {
                name: 'Baidu',
                type: 'bar',
                barWidth: 5,
                stack: 'Search Engine',
                emphasis: {
                  focus: 'series'
                },
                data: [620, 732, 701, 734, 1090, 1130, 1120]
              },
              {
                name: 'Google',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                  focus: 'series'
                },
                data: [120, 132, 101, 134, 290, 230, 220]
              },
              {
                name: 'Bing',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                  focus: 'series'
                },
                data: [60, 72, 71, 74, 190, 130, 110]
              },
              {
                name: 'Others',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                  focus: 'series'
                },
                data: [62, 82, 91, 84, 109, 110, 120]
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
