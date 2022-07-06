import React from "react";
import * as echarts from 'echarts/core';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { render } from "react-dom";
import 'echarts-wordcloud';

const colorList = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']; //重新制定色系

var CloudCharts;

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
        if(CloudCharts){
            CloudCharts.resize()
        }
        setTimeout(() => {this.getOption()})
    }

    getOption = () => {
        var chartDom = document.getElementById(this.props.id);
        CloudCharts = echarts.init(chartDom,null,{width :150 ,height: 200 });
        var option;
        option = {
            tooltip: {},
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            series: [ {
                type: 'wordCloud',
                gridSize: 2,
                sizeRange: [12, 50],
                rotationRange: [-90, 90],
                shape: 'pentagon',
                width: 600,
                height: 400,
                drawOutOfBound: true,
                textStyle: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    textStyle: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: [
                    {
                        name: 'Sam S Club',
                        value: 10000,
                        textStyle: {
                            color: 'black'
                        },
                        emphasis: {
                            textStyle: {
                                color: 'red'
                            }
                        }
                    },
                    {
                        name: 'Macys',
                        value: 6181
                    },
                    {
                        name: 'Amy Schumer',
                        value: 4386
                    },
                    {
                        name: 'Jurassic World',
                        value: 4055
                    },
                    {
                        name: 'Charter Communications',
                        value: 2467
                    },
                    {
                        name: 'Chick Fil A',
                        value: 2244
                    },
                    {
                        name: 'Planet Fitness',
                        value: 1898
                    },
                    {
                        name: 'Pitch Perfect',
                        value: 1484
                    },
                    {
                        name: 'Express',
                        value: 1112
                    },
                    {
                        name: 'Home',
                        value: 965
                    },
                    {
                        name: 'Johnny Depp',
                        value: 847
                    },
                    {
                        name: 'Lena Dunham',
                        value: 582
                    },
                    {
                        name: 'Lewis Hamilton',
                        value: 555
                    },
                    {
                        name: 'KXAN',
                        value: 550
                    },
                    {
                        name: 'Mary Ellen Mark',
                        value: 462
                    },
                    {
                        name: 'Farrah Abraham',
                        value: 366
                    },
                    {
                        name: 'Rita Ora',
                        value: 360
                    },
                    {
                        name: 'Serena Williams',
                        value: 282
                    },
                    {
                        name: 'NCAA baseball tournament',
                        value: 273
                    },
                    {
                        name: 'Point Break',
                        value: 265
                    }
                ]
            } ]
        };
            option && CloudCharts.setOption(option);
    }
   
    render(){
        return (
            <div id ={this.props.id} style={{height: "200px",width: "100%"}}></div>
        )
    }
}
