// src/App.tsx
import React, { useState } from 'react';
import DateRangePicker from './components/DateRangePicker';
import TimeSeriesChart from './components/TimeSeriesChart';
import ColumnChart from './components/ColumnChart';
import SparklineChart from './components/SparklineChart';
import { bookingData } from './api/data';

const App = () => {
    const [filteredData, setFilteredData] = useState(bookingData);

    const handleDateChange = (startDate: Date, endDate: Date) => {
        const filtered = bookingData.filter(item => {
            const arrivalDate = new Date(item.arrival_date);
            return arrivalDate >= startDate && arrivalDate <= endDate;
        });
        setFilteredData(filtered);
    };

    return (
        <div className="App">
            <h1>Hotel Booking Dashboard</h1>
            <DateRangePicker onChange={handleDateChange} />
            <TimeSeriesChart data={filteredData.map(item => item.adults + item.children + item.babies)} />
            <ColumnChart data={filteredData} /> {/* Ensure this is an array */}
            <SparklineChart data={filteredData.map(item => item.adults)} />
            <SparklineChart data={filteredData.map(item => item.children)} />
        </div>
    );
};

export default App;