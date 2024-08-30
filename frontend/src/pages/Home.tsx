import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { Steps } from "../components/Steps"




export const Home = () => {
    return <div className="bg-slate-100">
    
        <Navbar/>
        <Hero/>
        <Steps/>
    
    </div>

}