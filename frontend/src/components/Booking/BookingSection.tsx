import { useLocation, useNavigate, useParams } from "react-router-dom"
import { BookingSummary } from "./BookingSummary"
import { CheckOutBox } from "./CheckOutBox"
import { useGetSingleBikeByDate } from "../../api/hooks/user/bikes/useGetSingleBikeByDate"
import { useEffect } from "react"






export const BookingSection = () => {


    const {id} = useParams()
    const bikeId = Number(id)
    const navi = useNavigate()

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    

    const startTimeParam = String(searchParams.get("startTime"))
    const endTimeParam   = String(searchParams.get("endTime"))
    const companyIdParam = Number(searchParams.get("companyId"))
    const locationIdParam     = Number(searchParams.get("locationId"))

    useEffect(() => {
        if (startTimeParam === undefined  || endTimeParam === undefined) {
            navi("/home")
        }
    })

    useGetSingleBikeByDate({startTimeParam, endTimeParam, companyIdParam, locationIdParam, bikeId})
    

    return <div className="mx-auto container grid lg:grid-cols-3 sm:grid-cols-2 py-16 gap-2">

        <div className="lg:col-span-2 sm:col-span-1">
            <BookingSummary/>
        </div>
        <div className="lg:col-span-1 sm:col-span-1">
            <CheckOutBox/>
        </div>
        
    
    </div>
}