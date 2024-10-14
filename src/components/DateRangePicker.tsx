
import React from 'react';
import { format } from 'date-fns';

interface Props {
    onChange: (startDate: Date, endDate: Date) => void;
}

const DateRangePicker: React.FC<Props> = ({ onChange }) => {
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const startDate = new Date(e.target.value);
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 7); // Default to one week range
        onChange(startDate, endDate);
    };

    return (
        <div>
            <input type="date" onChange={handleDateChange} />
        </div>
    );
};

export default DateRangePicker;