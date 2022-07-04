import React from "react";
import * as echarts from 'echarts/core';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import {Radar} from './graphs/Radarcharts.js'; 
import { WordsClouds } from "./graphs/WordsCloud.js";

echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);


class Assist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }    

 /*   makecharts(){
        let chartDom = document.getElementById(this.props.Rdivid);
        let RadarCharts = echarts.init(chartDom,null,{width :150 ,height: 200 });
        let option;
        option = {
            title: {
                text: '答案分布雷达图'
            },
            legend: {
                data: ['答案']
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
                name: '答案分布',
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
*/
    render(){
        //this.makecharts();
        return(
            <div>
                <Radar caps = "答案分布" leg = "答案数量"></Radar>
                <WordsClouds></WordsClouds>
            </div>
        ); 
    }
}

export {Assist};