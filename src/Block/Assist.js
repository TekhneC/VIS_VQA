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
            <div>
                <div id = "title">答案分布情况</div>
                <Radar id = "radar" ></Radar>
            </div>
        ); 
    }
}

export {Assist};