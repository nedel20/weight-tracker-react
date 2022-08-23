import React, { useState, useEffect } from 'react';

import { Chart } from "react-google-charts";


const EntriesChartTracker = (props) => {

    // console.log(props.parentEntries);

    // convert data into data that the chart can use
    const [chartData, setChartData] = useState([]); 

    // used everything chart component is bought to the screen 
    // and everytime a compnent is updated
    useEffect(() => {
        // console.log('Running use effect');

        let tempChartData = props.parentEntries.map((entry) => {
            return [entry.date, entry.weight]; 
        } , [props.parentEntries]); // when props.parentEntries updates, rerun

        // Update data using setChartData
        setChartData(tempChartData); 
    })
    return (  
        <Chart
        chartType="LineChart"
        // data={[["Date", "Weight"], ['2022-01-01', 177] , ['2022-01-02', 176]]}
        // instead of hard coding use chartData
        data={[["Date", "Weight"], ...chartData]}
        width="100%"
        height="400px"
        legendToggle
        />
    );
}
 
export default EntriesChartTracker;