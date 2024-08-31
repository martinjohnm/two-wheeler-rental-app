import { BikesSection } from "../components/BikesSection"
import { BikesTitle } from "../components/BikesTitle"
import { Navbar } from "../components/Navbar"




export const Bikes = ( ) => {
    return (
    <div className="bg-slate-100">
    
        <Navbar/>
        <BikesTitle/>
        <BikesSection/>
        
    
    </div>)
}