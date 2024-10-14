
import React from 'react';
import Chart from 'react-apexcharts';

const SparklineChart = ({ data }: { data: any }) => {
    return (
        <Chart options={{ chart: { sparkline: { enabled: true } } }} series={[{ name: "Total Adults", data }]} type="line" height={100} />
    );
};

export default SparklineChart;