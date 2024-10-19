import { useRecoilValue } from "recoil"
import { userAtom } from "../store/atoms"
import { Navbar } from "../components/Navbar"
import { SingleProductView } from "../components/SingleBikeView"



export const Bike = () => {

    const user = useRecoilValue(userAtom)

    return <div>
        <Navbar user={user}/>
        <SingleProductView/>
    </div>
}