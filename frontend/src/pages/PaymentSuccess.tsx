import { useRecoilValue } from "recoil"
import { userAtom } from "../store/atoms"
import { Navbar } from "../components/Navbar"
import { PaymentSuccessComp } from "../components/Booking/PaymentSuccessComp"



export const PaymentSuccess = () => {
    const user = useRecoilValue(userAtom)

    return <div>
        <Navbar user={user}/>
        <PaymentSuccessComp/>
    </div>
}