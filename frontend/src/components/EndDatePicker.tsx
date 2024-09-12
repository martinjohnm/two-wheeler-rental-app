import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import { TimeRange } from '../utils/TimeRange';
import Select from 'react-select'
const EndDatePicker = ({placeholder, onChange, minDate, startDate} : {placeholder : string, onChange : any,minDate : Date | undefined, startDate : Date | undefined}) => {

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [disabled, setDisabled] = useState<Boolean>(true)

  const handleDateChange = (date : any) => {
    setSelectedDate(date)
    onChange(date)
    setDisabled(false)
  }

  const handleTimeChange = (option : any) => {
    
    if (selectedDate){
      selectedDate.setHours(option.value)
      onChange(selectedDate)
    }
  };

  
  let dates = TimeRange(Number(0),23)

  if (selectedDate?.getDate() == startDate?.getDate()) {

    dates = TimeRange(Number(startDate?.getHours()) + 1,23)

    if (Number(startDate?.getHours()) == 23) {
      dates = []
    }

  }


  useEffect(() => {
    
  }, [selectedDate])


  return (
    <div className='flex justify-center items-center'>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleDateChange(date)}
        dateFormat="dd/MM/yyyy;"
        className="py-2 mt-4 rounded-md font-bold bg-black border text-center text-white shadow-sm outline-none items-center justify-center"
        placeholderText={placeholder}
        minDate={minDate}
      />

      <div className='min-w-48 pt-4 mx-2'>
        <Select isDisabled={Boolean(disabled)} options={dates} placeholder="select date" onChange={handleTimeChange}/>
      </div>
      
    </div>
  )
};

export default EndDatePicker;
