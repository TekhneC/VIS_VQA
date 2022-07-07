import { render } from "@testing-library/react";
import { Line } from "../graphs/Line";
import { StackedBar } from "../graphs/StackedBar";
import { SunBurst } from "../graphs/Sunburst";
import React from "react";
import ReactDOM from 'react-dom/client';
import SundataReal from '../Data/SunburstReal.json';
import SundataAbs from '../Data/SunburstAbstract.json';
import './Overview.css';

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
            <StackedBar id = "AnsBar" data = {this.props.data}></StackedBar>
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