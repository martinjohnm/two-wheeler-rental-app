import { useRecoilValue } from "recoil"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { Steps } from "../components/Steps"
import { userAtom } from "../store/atoms"

export const Home = () => {
   
    const user = useRecoilValue(userAtom)
    console.log(user);
    
    return <div className="bg-slate-100">
    
    <Navbar user={user}/>
    <Hero/>
    <Steps/>
    

</div>
}