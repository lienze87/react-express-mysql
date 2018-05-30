import React from 'react';
import './style.css';
import echarts from 'echarts';

export default class VisitStatistics extends React.Component{
  componentDidMount(){
    const myChart=echarts.init(document.getElementById('admin_home'));
    
const data = [
["2018-05-01",89],["2018-05-02",105],["2018-05-03",186],["2018-05-04",173],["2018-05-05",116],
["2018-05-06",129],["2018-05-07",135],["2018-05-08",86],["2018-05-09",73],["2018-05-10",85],
["2018-05-11",73],["2018-05-12",68],["2018-05-13",92],["2018-05-14",130],["2018-05-15",245],
["2018-05-16",139],["2018-05-17",115],["2018-05-18",111],["2018-05-19",309],["2018-05-20",206],
["2018-05-21",137],["2018-05-22",128],["2018-05-23",85],["2018-05-24",94],["2018-05-25",71],
["2018-05-26",106],["2018-05-27",84],["2018-05-28",93],["2018-05-29",85],["2018-05-30",73],
];


const dateList = data.map(function (item) {
    return item[0];
});
const valueList = data.map(function (item) {
    return item[1];
});

const option = {

    // Make gradient line here
    visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400
    }],
    title: [{
        left: 'center',
        text: '近30天网站访问量'
    }],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        data: dateList
    }],
    yAxis: [{
        splitLine: {show: false}
    }],
    grid: [{
        bottom: '20%'
    }],
    series: [{
        type: 'line',
        showSymbol: false,
        data: valueList
    }]
};
    myChart.setOption(option);
  }
  render(){
    return (
      <div id="admin_home">
      </div>
    )
  }
}