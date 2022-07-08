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
        CloudCharts = echarts.init(chartDom,null,{width :550 ,height: 400 });
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
                gridSize: 5,
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
                        name: "table",
                        value: 1036
                    },
                    {
                        name: "plant",
                        value: 1105
                    },
                    {
                        name: "soccer",
                        value: 1194
                    },
                    {
                        name: "football",
                        value: 1195
                    },
                    {
                        name: "wine",
                        value: 1272
                    },
                    {
                        name: "sitting",
                        value: 1283
                    },
                    {
                        name: "kite",
                        value: 3156
                    },
                    {
                        name: "skateboarding",
                        value: 3245
                    },
                    {
                        name: "surfing",
                        value: 3257
                    },
                    {
                        name: "horse",
                        value: 3380
                    },
                    {
                        name: "silver",
                        value: 3483
                    },
                    {
                        name: "10",
                        value: 3661
                    },
                    {
                        name: "water",
                        value: 3720
                    },
                    {
                        name: "skiing",
                        value: 3723
                    },
                    {
                        name: "grass",
                        value: 3982
                    },
                    {
                        name: "none",
                        value: 4187
                    },
                    {
                        name: "pink",
                        value: 4631
                    },
                    {
                        name: "man",
                        value: 4711
                    },
                    {
                        name: "7",
                        value: 4724
                    },
                    {
                        name: "8",
                        value: 4846
                    },
                    {
                        name: "kitchen",
                        value: 4985
                    },
                    {
                        name: "wood",
                        value: 5626
                    },
                    {
                        name: "bathroom",
                        value: 5753
                    },
                    {
                        name: "cat",
                        value: 6094
                    },
                    {
                        name: "pizza",
                        value: 6385
                    },
                    {
                        name: 'dog',
                        value: 6514
                    },
                    {
                        name: "baseball",
                        value: 6672
                    },
                    {
                        name: "frisbee",
                        value: 6930
                    },
                    {
                        name: "nothing",
                        value: 7366
                    },
                    {
                        name: "tennis",
                        value: 7487
                    },
                    {
                        name: 'right',
                        value: 7534
                    },
                    {
                        name: "left",
                        value: 7690,
                        textStyle: {
                            color: 'black'
                        },
                        emphasis: {
                            textStyle: {
                                color: 'red'
                            }
                        }
                    },
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
