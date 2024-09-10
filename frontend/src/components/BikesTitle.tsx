import { useEffect, useState } from "react"
import { CompanySelector } from "./CompanySelector"
import EndDatePicker from "./EndDatePicker"
import { LocationSelector } from "./LocationSelector"
import StartDatePicker from "./StartDatePicker"
import { useGetBikesByFilter } from "../api/hooks/user/bikes/useGetBikesByFIlterr"


export interface BikeQueryType {
    startDate? : Date
    endDate? : Date
    companyId? : number
    locationId? : number
}


export const BikesTitle = () => {
    const [postInputs, setpostInputs] =  useState<BikeQueryType | null>(null)


    const {fetchBikesByFilter} = useGetBikesByFilter()

    useEffect(() => {
        if (postInputs) {
            fetchBikesByFilter(postInputs)
        }
    }, [postInputs])


    return <div className="bg-green-300 max-w-7xl mx-auto items-center justify-center grid grid-cols-1 lg:grid-cols-4 gap-4 p-6">
            <div >
                <StartDatePicker onChange={(date : Date) => {
                    setpostInputs(c => ({
                        ...c, 
                        startDate : date
                    })) 
                }} placeholder="Select start date"/>
            </div>
            <div >
                <EndDatePicker onChange={(date : Date) => {
                    setpostInputs(c => ({
                        ...c, 
                        endDate : date
                    })) 
                }} placeholder="Select end date"/>
            </div>
            <div >
                <CompanySelector onChange={(companyId : number) => {
                    setpostInputs(c => ({
                        ...c, 
                        companyId
                    })) 
                }}/>
            </div>
            <div >
                <LocationSelector onChange={(locationId : number) => {
                    setpostInputs(c => ({
                        ...c, 
                        locationId 
                    })) 
                }}/>
            </div>
    </div>
}