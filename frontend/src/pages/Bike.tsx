import { useRecoilValue } from "recoil"
import { userAtom } from "../store/atoms"
import { Navbar } from "../components/Navbar"
import { SingleProductView } from "../components/SingleBikeView"
import { useParams } from "react-router-dom"




export const Bike = () => {

    const {id} = useParams()

    const user = useRecoilValue(userAtom)

    return <div>
        <Navbar user={user}/>
        <SingleProductView/>
    </div>
}