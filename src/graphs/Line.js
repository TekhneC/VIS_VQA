import React from 'react';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { ToolboxComponent } from 'echarts/components';


echarts.use([GridComponent,ToolboxComponent, LineChart, CanvasRenderer, UniversalTransition]);

var LineCharts;
var names = [];
var series = [];

export class Line extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            xAxisName:"question_id",
            yAxisName:"question_len"
        }
    }

    componentDidMount(){
        if(LineCharts){
            LineCharts.resize()
        }
        setTimeout(() => {
          this.initData();  
          this.getOption();
        })
    }

    initData = () => {      
      for(var o in this.props.data){
        names.push(this.props.data[o].question_id);
        series.push(this.props.data[o].question_len);
      }
    }

    getOption = () => {
        var chartDom = document.getElementById(this.props.id);
        LineCharts = echarts.init(chartDom,null,{width :250 ,height: 200 });
        var option;

//        names.push(data.question_id);
  //      series.push(data.question_len);

        option = {
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
          textStyle:{
            fontFamily:['STZhongsong','monospace','Impact'],
            fontWeight: 'bolder' ,
            color: '#1C5ABE'
          },
          dataZoom: [
            {   
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                start: 10,      // 左边在 10% 的位置。
                end: 60         // 右边在 60% 的位置。
            }
        ],
            tooltip: {
              trigger: 'axis'
            },

            legend: {
              data: ['Len']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            }, 
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19']
            },
            yAxis: {
              type: 'value'
            },
            series:[
              {
                name: 'length',
                type: 'line',
                stack: 'Total',
                data: [1,1498,5366,8289,6336,5760,3562,2001,1179,625,315,193,81,55,40,11,9,7
                  ]//abstarct
              }]
          };
        option && LineCharts.setOption(option);
    }
   
    render(){
        return (
            <div id = {this.props.id}></div>
        )
    }
}
