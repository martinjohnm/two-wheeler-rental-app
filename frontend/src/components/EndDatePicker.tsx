


import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

const endDatePicker = ({placeholder, onChange} : {placeholder : string, onChange : any}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (date : any) => {
    setSelectedDate(date)
    onChange(date)
  }
 
  return (
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleChange(date)}
        dateFormat="yyyy/MM/dd"
        className="px-2 py-2 mt-4 rounded-md shadow-sm outline-none min-w-48 items-center justify-center"
        placeholderText={placeholder}
        minDate={new Date()}
      />
  )
};

export default endDatePicker;
