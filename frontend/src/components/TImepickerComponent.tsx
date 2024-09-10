


import { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css'; // Time picker styles

const TimePickerComponent = () => {
  const [time, setTime] = useState<string>('9:00'); // Default time

  return (
    <div className="flex flex-col">
      <TimePicker
        onChange={() => {
            setTime("9:00")
        }}
        value={time}
        clockIcon={null} // You can customize or remove the clock icon
        className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        
      />
    </div>
  );
};

export default TimePickerComponent;
