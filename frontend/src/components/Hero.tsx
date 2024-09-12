import StartDatePicker from "./StartDatePicker"
import EndDatePicker from "./EndDatePicker"
import { useEffect, useState } from "react"
import { BikeQueryType } from "../utils/types"
import { useGetBikesByDateRange } from "../api/hooks/user/bikes/useGetBikesByDateRange"



export const Hero = () => {

    const [postInputs, setpostInputs] =  useState<BikeQueryType | null>(null)
    const [endVisible, setEndVisible] = useState(false)
    const {fetchBikesByDateRange} = useGetBikesByDateRange()
    useEffect(() => {
       
    }, [postInputs])

    const submitInputs = () => {
        if (postInputs){
        fetchBikesByDateRange(postInputs)}
    }


    console.log(postInputs);
    

    return (
    <div className="max-w-7xl mx-auto container grid md:grid-cols-2 grid-cols-1 p-8">
        <div className="flex items-center justify-center mt-6">
            <div className="bg-black w-[450px] h-[450px]">
                <p className="px-8 mt-6 font-bold text-2xl text-white">Search Your Next Ride</p>
                <p className="px-8 mt-2 font-bold text-lg text-white">Pickup</p>
                <div className="px-8">
                    <StartDatePicker changeEndVisible={() => setEndVisible(true)} onChange={(date : Date) => {
                        setpostInputs(c => ({
                            ...c, 
                            startTime : date
                        }))
                        
                    }} placeholder="Select start date"
                    minDate={new Date()}/>
                </div>

                <p className="px-8 mt-12 font-bold text-lg text-white">Dropoff</p>
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
                
                <div className="px-8 mt-12">
                    <button onClick={submitInputs} className="bg-yellow-500 hover:bg-yellow-700 text-blue-800 w-full font-bold p-4 rounded-lg">Search</button>
                </div>
                
               
            </div>
        </div>
        <div className="items-center justify-center p-6 mt-10">
            <div className="text-orange-600 flex justify-center text-center">
                <p>WELCOME TO REBIKE</p>
            </div>

            <div className="text-6xl font-bold font-serif text-blue-950 flex justify-center text-center mt-7">
                <p>Meet your cycling needs
                every day</p>
            </div>
            <div className="flex justify-center text-center mt-7">
                <button className="p-4 rounded-full bg-orange-600 hover:bg-blue-900 hover:text-white text-blue-950 w-2/5">
                    <p className="">Explore Bike</p>
                </button>
            </div>
        </div>
        
    </div>
)
}


