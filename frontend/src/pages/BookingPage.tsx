import { useRecoilValue } from "recoil"
import { Navbar } from "../components/Navbar"
import { userAtom } from "../store/atoms"
import { BookingSection } from "../components/Booking/BookingSection"

export const BookingPage = () => {

    const user = useRecoilValue(userAtom)

    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    
    // const navi = useNavigate()

    // const startTimeParam = new Date(String(searchParams.get("startTime")))
    // const endTimeParam   = new Date(String(searchParams.get("endTime")))
    // const companIdParam = Number(searchParams.get("companyId"))
    // const locationIdParam     = Number(searchParams.get("locationId"))

    // useEffect(() => {
    //     if (startTimeParam === undefined  || endTimeParam === undefined) {
    //         navi("/home")
    //     }
    // })

    return <div>
        <Navbar user={user}/>
        <BookingSection/>
    </div>
}