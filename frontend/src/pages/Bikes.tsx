import { useRecoilValue } from "recoil"
import { BikesSection } from "../components/BikesSection"
import { BikesTitle } from "../components/BikesTitle"
import { Navbar } from "../components/Navbar"
import { userAtom } from "../store/atoms"




export const Bikes = ( ) => {
    const user = useRecoilValue(userAtom)
    console.log(user);
    
    return (
    <div className="bg-slate-100">

        <Navbar isLoggedIn={true}/>
        <BikesTitle/>
        <BikesSection/>        

    </div>)
}