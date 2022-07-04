import React from "react";
import * as echarts from 'echarts/core';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { render } from "react-dom";

export class Radar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        setTimeout(() => {this.getOption()})
    }

    getOption = () => {
        var chartDom = document.getElementById('Radar');
        var RadarCharts = echarts.init(chartDom,null,{width :150 ,height: 200 });
        var option;
        option = {
            title: {
                    text: this.props.caps
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
                    { name: 'Marketing', max: 25000 }
                    ]
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
            <div id = "Radar" style={{height: "200px",width: "100%"}}></div>
        )
    }
}
