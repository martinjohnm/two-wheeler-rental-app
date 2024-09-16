

import Select from 'react-select'
import { useGetLocations } from '../api/hooks/user/location/useGetLocation'
import { useRecoilValue } from 'recoil'
import { locationAtom } from '../store/atoms'
import { useEffect, useState } from 'react'

interface Option {
  value : number
  label : string
}

export const LocationSelector = ({onChange} : {onChange : any}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  useGetLocations()

  const locations = useRecoilValue(locationAtom)
  const options : Option[] = []
  locations?.map((loc) => {
    options.push({value : loc.id, label : loc.title})
  })

  const handleChange = (option : any) => {
    setSelectedOption(option);  // Store the selected option in the state
    {option ? onChange(option.value) : null}
    // console.log('Selected option:', option);  // Log the selected option
  };

  useEffect(() => {

  }, [selectedOption])
  
  
  return <div className="w-full items-center justify-center">
    <Select className='' options={options} onChange={handleChange} placeholder={"Location"}/>
  </div>
  
}