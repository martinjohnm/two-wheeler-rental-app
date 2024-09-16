import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import { TimeRange } from '../utils/time/TimeRange';
import Select from 'react-select'

interface StartDatePickerType  {
   placeholder : string,
   onChange : any, 
   minDate : Date, 
   changeEndVisible : any
}
const StartDatePicker = ({placeholder, onChange, minDate, changeEndVisible} : StartDatePickerType) => {

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
      changeEndVisible()
    }
  };

  let dates = TimeRange(0,23)

  if (selectedDate?.getDate() == new Date().getDate()) {
    dates = TimeRange(new Date().getHours() + 1,23)
    if (new Date().getHours() == 23) {
      dates = []
    }
  }


  useEffect(() => {
    
  }, [selectedDate])


  return (
    <div className='flex justify-between items-center'>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleDateChange(date)}
        dateFormat="dd/MM/yyyy"
        className="py-2 mt-4 rounded-md border text-center font-mono text-black shadow-sm outline-none items-center justify-center"
        placeholderText={placeholder}
        minDate={minDate}
      />

      <div className='min-w-48 pt-4 mx-2'>
        <Select className='text-center font-mono' isDisabled={Boolean(disabled)} options={dates} placeholder="select start time" onChange={handleTimeChange}/>
      </div>
      
    </div>
  )
};

export default StartDatePicker;
