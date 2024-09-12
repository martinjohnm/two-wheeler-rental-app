import { useRecoilValue } from "recoil"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { Steps } from "../components/Steps"
import { userAtom } from "../store/atoms"

export const Home = () => {
   
    const user = useRecoilValue(userAtom)
    return <div className="">
    
    <Navbar user={user}/>
    <Hero/>
    <Steps/>
    

</div>
}