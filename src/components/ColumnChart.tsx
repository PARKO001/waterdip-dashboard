// src/components/ColumnChart.tsx
import React from 'react';
import Chart from 'react-apexcharts';
import { Booking } from '../types/Booking'; // Adjust the import path as necessary

interface Props {
    data: Booking[];
}

const ColumnChart: React.FC<Props> = ({ data }) => {
    // Debugging: Check if data is an array
    console.log('Data passed to ColumnChart:', data);
    
    if (!Array.isArray(data)) {
        console.error('Expected data to be an array, but got:', typeof data);
        return null; // Return null or a fallback UI if data is not an array
    }

    const countryCounts = data.reduce((acc: { [key: string]: number }, curr) => {
        acc[curr.country] = (acc[curr.country] || 0) + 1;
        return acc;
    }, {});

    return (
        <Chart 
            options={{ 
                xaxis: { categories: Object.keys(countryCounts) } 
            }} 
            series={[{ name: "Visitors", data: Object.values(countryCounts) }]} 
            type="bar" 
            height={350} 
        />
    );
};

export default ColumnChart;