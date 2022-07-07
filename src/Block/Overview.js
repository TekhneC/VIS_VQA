import { render } from "@testing-library/react";
import { Line } from "../graphs/Line";
import { StackedBar } from "../graphs/StackedBar";
import { SunBurst } from "../graphs/Sunburst";
import React from "react";
import ReactDOM from 'react-dom/client';




export class QuesPes extends React.Component{
    render(){
        return(
        <div>
            <SunBurst id = "QuesSun" data = {this.props.data}></SunBurst>
            <Line id = "QuesLine" data = {this.props.data}></Line>
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
            <StackedBar id = "RealBar" data = {this.props.data}></StackedBar>
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