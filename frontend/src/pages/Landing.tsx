import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { Steps } from "../components/Steps"

export const Landing = () => {

   
    return <div className="bg-slate-100">
    
        <Navbar isLoggedIn={false}/>
        <Hero/>
        <Steps/>
        
    
    </div>

}