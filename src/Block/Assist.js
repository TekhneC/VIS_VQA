import React from "react";
import * as echarts from 'echarts/core';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import {Radar} from '../graphs/Radarcharts.js'; 
import { Line } from "../graphs/Line.js";
import "./Assist.css";

echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);

class Assist extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }    
    render(){
        return(
            <div id>
                <Radar id = "radar" caps = "答案分布" leg = "答案数量"></Radar>
                <Line id = "line" data = {this.props.Data}></Line>
            </div>
        ); 
    }
}

export {Assist};