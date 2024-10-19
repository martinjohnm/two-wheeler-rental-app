import { useEffect, useState } from "react"
import { CompanySelector } from "./CompanySelector"
import { LocationSelector } from "./LocationSelector"
import { useGetBikesByFilter } from "../api/hooks/user/bikes/useGetBikesByFIlterr"
import { BikeQueryType } from "../utils/types"





export const BikesTitle = () => {
    const [postInputs, setpostInputs] =  useState<BikeQueryType | null>(null)


    const {fetchBikesByFilter} = useGetBikesByFilter()

    useEffect(() => {
        if (postInputs) {
            fetchBikesByFilter(postInputs)
        }
    }, [postInputs])

    // console.log(postInputs);
    

    return <div className="mx-auto container mt-4 flex p-6 gap-5">
          
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