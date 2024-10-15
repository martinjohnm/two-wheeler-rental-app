import { useRecoilValue } from "recoil"
import { userAtom } from "../store/atoms"
import { Navbar } from "../components/Navbar"
import { TotalBookingComp } from "../components/Booking/TotalBookingComp"




export const TotalBooking = () => {


    const user = useRecoilValue(userAtom)

    return <div>
        <Navbar user={user}/>
        <TotalBookingComp/>
    </div>
}