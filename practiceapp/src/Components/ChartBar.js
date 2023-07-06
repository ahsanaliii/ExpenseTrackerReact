import React from "react";
import './ChartBar.css'

export default function ChartBar(props) {
    let BarFillHeight = '20%'
    if(props.maxValue > 0){
        BarFillHeight = Math.round(((props.value / props.maxValue) * 100) + '%')
        console.log(BarFillHeight)
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height : BarFillHeight}}></div>
      </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
