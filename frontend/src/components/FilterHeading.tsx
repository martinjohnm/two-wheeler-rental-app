
import { DateObjConverrer } from "../utils/time/TimeRange";
import { Link } from "react-router-dom";
import { BikeFilterHeadingType } from "./BikeFilterHeadingType";


export const FilterHeading = ({startTimeParam, endTimeParam, locationIdParam, companyIdParam} : {startTimeParam : string, endTimeParam : string, locationIdParam : number | undefined, companyIdParam : number | undefined}) => {
  
    const startTime = new Date( String(startTimeParam))
    const endTime = new Date( String(endTimeParam))
    const start = DateObjConverrer(startTime)
    const end = DateObjConverrer(endTime)
    
    const locationId = locationIdParam
    const companyId = companyIdParam


    return <div className="h-24 mx-auto container justify-between flex">
        <div className="flex items-center justify-center">
            <div>
                <BikeFilterHeadingType start={start} end={end} locationId={locationId} companyId={companyId}/>
                
            </div>
            <div className="justify-end">
                <Link to={'/'}>
                    <button className="bg-yellow-400 text-black hover:text-white text-md hover:bg-yellow-600 px-4 rounded-md py-2">Change Filters</button>
                </Link>
            </div>
        </div>
    </div>
}