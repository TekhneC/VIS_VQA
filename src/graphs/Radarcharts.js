import React from "react";
import * as echarts from 'echarts/core';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import {
    TooltipComponent,
    GridComponent,
    ToolboxComponent 
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

var RadarCharts;

echarts.use([
    TooltipComponent,
    ToolboxComponent,
    GridComponent,
    LegendComponent,
    CanvasRenderer
  ]);

export class Radar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        window.addEventListener("resize",() => {
            if(RadarCharts){
                RadarCharts.resize()
            }
        })
        setTimeout(() => {this.getOption()})
    }

    getOption = () => {
        var chartDom = document.getElementById(this.props.id);
        RadarCharts = echarts.init(chartDom,null,{width :200 ,height: 200});
        var option;
        option = {  
            title: {
                text: this.props.title,
                subtext: "",
                textStyle: {
                fontSize: 16,
                    fontFamily:['STZhongsong','monospace','Impact'],
                    align: 'center',
                    fontWeight: 'bolder' ,
                    color: '#416dff',
                },
                subtextStyle: {
                    fontFamily:['STZhongsong','monospace','Impact'],
                    align: 'center'
                }
            },
            textStyle:{
                fontFamily:['STZhongsong','monospace','Impact'],
                fontWeight: 'bolder' ,
                color: '#1C5ABE'
            },
                legend: {
                    data: [this.props.leg]
                },
                radar: {
                    // shape: 'circle', 需要读入和处理json文件
                    indicator: [
                    { name: 'Sales', max: 6500 },
                    { name: 'Administration', max: 16000 },
                    { name: 'Information Technology', max: 30000 },
                    { name: 'Customer Support', max: 38000 },
                    { name: 'Development', max: 52000 },
                    { name: 'M', max: 25000 },
                    { name: 'Ma' }
                    ]
                },
                toolbox: {
                  feature: {
                    saveAsImage: {}
                  }
                },
                series: [
                    {
                    name: this.props.caps,
                    type: 'radar',
                    data: [
                        {
                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                        name: '答案'
                        }
                    ]
                    }
                ]
                };
            option && RadarCharts.setOption(option);

    }
   
    render(){
        return (
            <div id = {this.props.id}></div>
        )
    }
}
