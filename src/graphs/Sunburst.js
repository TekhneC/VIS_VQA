import React from "react";
import * as echarts from 'echarts/core';
import { DataZoomInsideComponent, VisualMapComponent } from 'echarts/components';
import { SunburstChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

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

    dataInit(){
      var Data = [];
      var Word1 = [];
      var Word2 = [];
      var Word3 = [];
      var Remains = [];
      for(var o in this.props.data){
        if(Word1.indexOf(this.props.data[o].FirstWord === -1)){
          Word1.push(this.props.data[o].FirstWord);
          Word3.push(this.props.data[o].ThirdWord);
          Data.push({word:this.props.data[o].FirstWord,child:[{wird:this.props.data[o].SecondWord,child:Word3}]});
        }
        else if(Word1[Word1.indexOf(this.props.data[o].FirstWord)].indexOf(this.props.data[o].SecondWord) == -1){
          w
        }
      }
    } 

    getOption = () => {
        var chartDom = document.getElementById(this.props.id);
        var SunCharts = echarts.init(chartDom,null,{width :450 ,height: 450 });
        var option;
        var data = [
            {
              name: 'Grandpa',
              children: [
                {
                  name: 'Uncle Leo',
                  value: 15,
                  children: [
                    {
                      name: 'Cousin Jack',
                      value: 2
                    },
                    {
                      name: 'Cousin Mary',
                      value: 5,
                      children: [
                        {
                          name: 'Jackson',
                          value: 2
                        }
                      ]
                    },
                    {
                      name: 'Cousin Ben',
                      value: 4
                    }
                  ]
                },
                {
                  name: 'Aunt Jane',
                  children: [
                    {
                      name: 'Cousin Kate',
                      value: 4
                    }
                  ]
                },
                {
                  name: 'Father',
                  value: 10,
                  children: [
                    {
                      name: 'Me',
                      value: 5,
                      itemStyle: {
                        color: 'red'
                      }
                    },
                    {
                      name: 'Brother Peter',
                      value: 1
                    }
                  ]
                }
              ]
            },
            {
              name: 'Mike',
              children: [
                {
                  name: 'Uncle Dan',
                  children: [
                    {
                      name: 'Cousin Lucy',
                      value: 3
                    },
                    {
                      name: 'Cousin Luck',
                      value: 4,
                      children: [
                        {
                          name: 'Nephew',
                          value: 2
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'Nancy',
              children: [
                {
                  name: 'Uncle Nike',
                  children: [
                    {
                      name: 'Cousin Betty',
                      value: 1
                    },
                    {
                      name: 'Cousin Jenny',
                      value: 2
                    }
                  ]
                }
              ]
            }
          ];
          option = {
            visualMap: {
              type: 'continuous',
              min: 0,
              max: 10,
              inRange: {
                color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
              }
            },
            series: {
              type: 'sunburst',
              data: data,
              radius: [0, '90%'],
              label: {
                rotate: 'radial'
              }
            }
          };
            option && SunCharts.setOption(option);

    }
   
    render(){
        this.dataInit();
        return (
            <div id = {this.props.id} style={{height: "200px",width: "100%"}}></div>
        )
    }
}
