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
            title: {
              text: this.props.title,
              subtext: this.props.subtext,
              textStyle: {
                fontSize: 16,
                fontFamily:['FZFengYKSJ','monospace','Impact'],
                align: 'center',
                fontWeight: 'bolder' ,
                color: '#416dff',
              },
              subtextStyle: {
                fontFamily:['FZFengYKSJ','monospace','Impact'],
                align: 'center'
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
                data: this.props.xdata,
                axisLabel:{
                  interval:0,
                  rotate: this.props.rotate === undefined ? 0 : this.props.rotate
                }
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
                show: true,
                feature: {
                    mark: { show: true },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            series: this.props.series
              
          };
        option && BarCharts.setOption(option);
    }
   
    render(){
        return (
            <div id = {this.props.id} style={{height: 200,width: 500}}></div>
        )
    }
}
