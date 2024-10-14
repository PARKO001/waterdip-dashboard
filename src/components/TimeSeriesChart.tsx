
import React from 'react';
import Chart from 'react-apexcharts';

const TimeSeriesChart = ({ data }: { data: any }) => {
    const series = [{ name: "Visitors", data }];
    
    return (
        <Chart options={{ xaxis: { type: 'datetime' } }} series={series} type="line" height={350} />
    );
};

export default TimeSeriesChart;