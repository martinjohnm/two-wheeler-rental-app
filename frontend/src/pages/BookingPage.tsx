import { useRecoilValue } from "recoil"
import { Navbar } from "../components/Navbar"
import { userAtom } from "../store/atoms"
import { BookingSection } from "../components/Booking/BookingSection"
export const BookingPage = () => {

    const user = useRecoilValue(userAtom)

    return <div className="">
        <Navbar user={user}/>
        <BookingSection/>
    
    </div>
}