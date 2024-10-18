import StartDatePicker from "./StartDatePicker"
import EndDatePicker from "./EndDatePicker"
import { useEffect, useState } from "react"
import { BikeQueryType } from "../utils/types"
import { useGetBikesByDateRange } from "../api/hooks/user/bikes/useGetBikesByDateRange"
import { LocationSelector } from "./LocationSelector"
export const DateFilterForm = () => {

    const [postInputs, setpostInputs] =  useState<BikeQueryType | null>(null)
    const [endVisible, setEndVisible] = useState(false)
    const {fetchBikesByDateRange} = useGetBikesByDateRange()
    useEffect(() => {
       
    }, [postInputs])


    const submitInputs = () => {
        
        if (postInputs) {
            fetchBikesByDateRange(postInputs)
        }
        
        
    }

    const buttonenabled = () => {
        if (postInputs?.startTime && postInputs.endTime && postInputs.locationId) {
            if ((new Date(postInputs.startTime) < new Date(postInputs.endTime)) && new Date(postInputs.startTime) > new Date()) {
                return true 
            }
        } 
        return false
    }

    

    return (
    <div className="max-w-7xl mx-auto container">
        <div className="flex items-start justify-start mt-16">
            <div className="w-auto h-auto p-2 bg-transparent">
                <div className="">
                    <p className="mt-6 font-bold text-2xl text-black justify-center items-center flex">Search Your Next Ride</p>
                </div>
                
                
                <div className="px-8">
                    <StartDatePicker changeEndVisible={() => setEndVisible(true)} onChange={(date : Date) => {
                        setpostInputs(c => ({
                            ...c, 
                            startTime : date
                        }))
                        
                    }} placeholder="Select start date"
                    minDate={new Date()}/>
                </div>

                {endVisible ? (
                    <div className={`px-8`}>
                    
                    <EndDatePicker startDate={postInputs?.startTime} minDate={postInputs?.startTime} onChange={(date : Date) => {
                        setpostInputs(c => ({
                            ...c, 
                            endTime : date
                        })) 
                    }} placeholder="Select end date"/>
                </div>
                ) : null}
                
                <div className="px-8 mt-4">
                    <LocationSelector onChange={(locationId : number) => {
                        setpostInputs(c => ({
                            ...c, 
                            locationId 
                        })) 
                    }}/>
                </div>
                {/* <div className="px-8 mt-4">
                    <CompanySelector onChange={(companyId : number) => {
                        setpostInputs(c => ({
                            ...c, 
                            companyId
                        })) 
                    }}/>
                </div> */}
                
                <div className={`mt-2 flex items-center justify-center ${buttonenabled() ? "" : "hidden"}`}>
                    <button onClick={submitInputs} className={`bg-blue-600 hover:bg-blue-700 text-black w-1/2 font-bold p-2 rounded-lg`}>Search</button>
                </div>
                
               
            </div>
        </div>
    
    </div>
)
}


