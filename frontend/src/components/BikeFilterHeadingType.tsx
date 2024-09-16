import { useRecoilValue } from "recoil"
import { companyAtom, locationAtom } from "../store/atoms"




export const BikeFilterHeadingType = ({start, end, locationId, companyId} :{start? : String[], end? : String[], locationId? : Number, companyId? : Number}) => {

    const locations = useRecoilValue(locationAtom)

    const comapnies = useRecoilValue(companyAtom)

    const locationValue = locations?.find((location) => {
        
        if (location.id == locationId) {
            return location
        }
        
    })

    const companyValue = comapnies?.find((company) => {
        
        if (company.id == companyId) {
            return company
        }
        
    })

    if (!start && !end && !locationId && !companyId){
        return <p className="p-8 font-mono text-xl">No Bikes Available..</p>
    }

    if (start && !end && !locationId && !companyId) {
        return <p className="p-8 font-mono text-xl">Bikes available on {start[0]} {start[1]} </p>
    }
    if (!start && end && !locationId && !companyId) {
        return <p className="p-8 font-mono text-xl">Bikes available on {end[0]} {end[1]} </p>
    }
    if (!start && !end && locationId && !companyId) {
        return <p className="p-8 font-mono text-xl">Bikes available at  {locationValue?.title}</p>
    }
    if (!start && !end && !locationId && companyId) {
        return <p className="p-8 font-mono text-xl">{companyValue?.title} bikes available </p>
    }
    if (start && end && !locationId && !companyId){
        return <p className="p-8 font-mono text-xl">Bikes available between <span className="font-bold">{start[0]}</span> <span className="font-bold">{start[1]}</span> and <span className="font-bold">{end[0]}</span> <span className="font-bold">{end[1]}</span></p>
    }

    if (start && end && locationId && !companyId){
        return <p className="p-8 font-mono text-xl">Bikes available at <span className="font-bold">{locationValue?.title}</span> between {start[0]} {start[1]} and {end[0]} {end[1]}</p>
    }

    if (start && end && !locationId && companyId){
        return <p className="p-8 font-mono text-xl"><span className="font-bold">{companyValue?.title}</span> bikes available between <span className="font-bold">{locationValue?.title}</span> between <span className="font-bold">{start[0]} {start[1]}</span> and <span className="font-bold">{end[0]} {end[1]}</span> </p>
    }

    if (start && end && locationId && companyId){
        return <p className="p-8 font-mono text-xl"><span className="font-bold">{companyValue?.title}</span> bikes available at <span className="font-bold">{locationValue?.title}</span> between <span className="font-bold">{start[0]} {start[1]}</span> and <span className="font-bold">{end[0]} {end[1]}</span></p>
    }

}