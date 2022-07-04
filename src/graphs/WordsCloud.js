import React from "react";
import * as echarts from 'echarts/core';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { render } from "react-dom";
import 'echarts-wordcloud';

const colorList = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']; //重新制定色系

export class WordsClouds extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            innerWidth:window.innerWidth,
            innerHeight:window.innerHeight
        }
        this.data = [{
            "answer" : "yes",
            "count"  : 4,
        },{
            "answer" :"No",
            "count"  : 2,
        },{
            "answer" :"Sun",
            "count"  : 1
        }]
        //this.onResize = this.onResize.bind(this);
        //this.updateData = this.updateData.bind(this);
       // this.chart;
    }

    componentDidMount(){
        setTimeout(() => {this.getOption()})
    }

    getOption = () => {
        var chartDom = document.getElementById('WordsCloud');
        var RadarCharts = echarts.init(chartDom,null,{width :150 ,height: 200 });
        var option;
        option = {
            title: {
                    text: this.props.caps
                },
                legend: {
                    data: [this.props.leg]
                },
                series: [
                    {
                    name: this.props.caps,
                    type: 'wordCloud',
                    gridSize:26,
                    sizeRange:[24,44],
                    shape:'circle',
                    width:'90%',
                    height:'95%',
                    drawOutOfBound:false,
                    textStyle:{
                        normal:{
                            color:function(){
                                let index = Math.round(Math.random()*colorList.length)
                                return colorList[index]
                            },
                        },

                        emphasis:{
                            shadowBlur:10,
                            shadowColor:'#ffff00'
                        }
                    },
                    data: this.data.map(item => {
                        item.name = '${item.name}(${item.value})'
                        return item
                    })
                }]
            };
            option && RadarCharts.setOption(option);
    }
   
    render(){
        return (
            <div id = "WordsCloud" style={{height: "200px",width: "100%"}}></div>
        )
    }
}
