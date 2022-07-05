import { render } from "@testing-library/react";
import { Line } from "../graphs/Line";
import { StackedBar } from "../graphs/StackedBar";
import React from "react";
import "../graphs/Line";
import { data } from "jquery";
import { SunburstChart } from "echarts/charts"
import {$,jQuery} from 'jquery';


class QuesPes extends React.Component{
    render(){
        return(
        <Line id = "QuesLine" data = {this.props.data}></Line>
        );
    }
}

class AnsPes extends React.Component{
    render(){
        alert('haha');
        return (
            <StackedBar id = "AnsBar" data = {this.props.data}></StackedBar>
        )
    }
}



export class Overview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isQuesPes : 1,
            isComp: 0
        }
    }

    componentDidMount(){
        setInterval(this.checkQues(),3000);
        setTimeout(() => {this.checkQues()})
    }

    checkQues(){
        window.onload = function () {  
            var Ques = document.getElementById("Ques");
            var Ans = document.getElementById("Ans");
                alert(this.state.isQuesPes);
            Ques.addEventListener("click",function(){
                alert('hear here!')
                this.setState({isQuesPes:1});
            })
            Ans.addEventListener("click",function(){
                this.setState({isQuesPes:0});
            })
        }
    }

    render(){
        this.checkQues();
        return (this.state.isQuesPes == 1 ? 
            <QuesPes></QuesPes>:
            <AnsPes></AnsPes>
       )
    }
}