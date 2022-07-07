import React from "react";
import * as echarts from 'echarts/core';
import { DataZoomInsideComponent, VisualMapComponent } from 'echarts/components';
import { SunburstChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { color } from "echarts";

echarts.use([VisualMapComponent, SunburstChart, CanvasRenderer]);


export class SunBurst extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        setTimeout(() => {this.getOption()})
    }

    getOption = () => {
        var chartDom = document.getElementById(this.props.id);
        var SunCharts = echarts.init(chartDom);
        var option;
        option = {
          visualMap: {
            type: 'continuous',
            min: 0,
            max: this.props.max,
            text: [this.props.max.toString(),'0'],
            inRange: {
              color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
            }
          },
          title: {
            text: this.props.title,
            subtext: "出于显示效果和性能考虑，\n占比低于0.05%的词语不予以显示。",
            textStyle: {
              fontSize: 16,
              fontFamily:['STZhongsong','monospace','Impact'],
              align: 'center',
              fontWeight: 'bolder' ,
              color: '#416dff',
            },
            subtextStyle: {
              fontFamily:['STZhongsong','monospace','Impact'],
              align: 'center'
            }
          },
          series: {
            type: 'sunburst',
            data: this.props.data,
            emphasis: {
            focus: 'ancestor'
            },
            radius: [0, '90%'],
            levels: [
              {},
              {
                r0: '20%',
                r: '35%',
                itemStyle: {
                  borderWidth: 2
                },
                label: {
                  rotate: 'tangential'
                }
              },
              {
                r0: '35%',
                r: '70%',
              },
              {
                r0: '70%',
                r: '90%',
                label: {
                  position: 'outside',
                  padding: 1,
                  silent: false
                },
                itemStyle: {
                  borderWidth: 1
                }
              }]
          }
        };
        option && SunCharts.setOption(option);

    }
   
    render(){
        return (
            <div id = {this.props.id} style={{height: 375,width: "47%"}}></div>
        )
    }
}
