import { useRecoilValue } from "recoil"
import { userAtom } from "../store/atoms"
import { Navbar } from "../components/Navbar"
import { OrderSummaryComp } from "../components/OrderSummaryComp"



export const OrderSummry = () => {

    const user = useRecoilValue(userAtom)

    return <div>
        <Navbar user={user}/>
        <OrderSummaryComp/>
    </div>
}