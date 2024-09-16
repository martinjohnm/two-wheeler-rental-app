import { useRecoilValue } from "recoil"
import { BikesCard } from "./BikesCard"
import { FilteredBikesAtom } from "../store/atoms"
import { useNavigate } from "react-router-dom"
import { Nothing } from "./Nothing"
import { DateObjConverrer } from "../utils/time/TimeRange"
import { useEffect } from "react"
import { TimeDiff } from "../utils/time/Timediff"
import { useGetBikesByDate } from "../api/hooks/user/bikes/useGetBikesByDate"
import { BikesLoading } from "./BikesLoading"



export const BikesByDate = ({startTimeParam, endTimeParam, locationIdParam, companyIdParam} : {startTimeParam : string, endTimeParam : string, locationIdParam : number | undefined, companyIdParam : number | undefined}) => {

 
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!startTimeParam || !endTimeParam) {
            navigate("/home")
        }
    },[])
    
    const startTime = new Date( String(startTimeParam))
    const endTime = new Date( String(endTimeParam))
    const start = DateObjConverrer(startTime)
    const end = DateObjConverrer(endTime)
    
    const TimeDffnce = TimeDiff(endTime, startTime)

    
    const {loading}  = useGetBikesByDate({startTimeParam, endTimeParam, locationIdParam, companyIdParam})
    
    const bikes = useRecoilValue(FilteredBikesAtom)


    if (!bikes && !startTimeParam) {
        <Nothing/>
    }
    

    if (loading) {
        return <div className="mx-auto container gap-10 py-6 h-[500px] shadow-2xl bg-white flex justify-center items-center rounded-3xl">
            <BikesLoading/>
        </div>
    }


    return <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto container gap-10 py-6">

            {bikes?.map((data) => (
                <BikesCard key={data.id} id={data.id} title={data.title} model={data.model} price={data.price} image={data.image} company={data.company.title} startTime={start[1]} endTime={String(end[1])} endDate={end[0]} startDate={start[0]} duration={TimeDffnce.DiffString}
                startTimeParam={startTimeParam} endTimeParam={endTimeParam} locationIdParam={locationIdParam} companyIdParam={companyIdParam}/>
            ))}
            

    </div>}
