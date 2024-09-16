import { useRecoilValue } from "recoil"
import { Navbar } from "../components/Navbar"
import { userAtom } from "../store/atoms"
import { FilterHeading } from "../components/FilterHeading"
import { BikesByDate } from "../components/BikesByDate"
import { useLocation } from "react-router-dom"



export const AvailableBikes = () => {
    
    const user = useRecoilValue(userAtom)

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    
 
    const startTimeParam = String(searchParams.get("startTime"))
    const endTimeParam   = String(searchParams.get("endTime"))
    const companyIdParam = Number(searchParams.get("companyId"))
    const locationIdParam     = Number(searchParams.get("locationId"))


    return <div className="bg-slate-100">
        <Navbar user={user}/>
        <FilterHeading startTimeParam={startTimeParam} endTimeParam={endTimeParam} companyIdParam={companyIdParam} locationIdParam={locationIdParam}/>
        <BikesByDate startTimeParam={startTimeParam} endTimeParam={endTimeParam} companyIdParam={companyIdParam} locationIdParam={locationIdParam}/>
    </div>
}