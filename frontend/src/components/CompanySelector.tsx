

import Select from 'react-select'
import { useRecoilValue } from 'recoil'
import { companyAtom } from '../store/atoms'
import { useEffect, useState } from 'react'
import { useGetCompanies } from '../api/hooks/user/bikes/useGetCompanies'

interface Option {
  value : number
  label : string
}

export const CompanySelector = ({onChange} : {onChange : any}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  useGetCompanies()
  const companies = useRecoilValue(companyAtom)

  
  const options : Option[] = []
  companies?.map((comp) => {
    options.push({value : comp.id, label : comp.title})
  })
  const handleChange = (option : any) => {
    setSelectedOption(option);  // Store the selected option in the state
    {option ? onChange(option.value) : null}
    // console.log('Selected option:', option);  // Log the selected option
  };
  
  useEffect(() => {

  }, [selectedOption])
  
  return <div className='w-full items-center justify-center'>
    <Select className='' options={options} onChange={handleChange} placeholder={"Company"}/>
  </div>
  
}