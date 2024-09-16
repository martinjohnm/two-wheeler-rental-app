import { useRecoilValue } from "recoil"
import { DateFilterForm } from "../components/DateFilterForm"
import { Navbar } from "../components/Navbar"
import { Steps } from "../components/Steps"
import { userAtom } from "../store/atoms"

export const Landing = () => {

    const user = useRecoilValue(userAtom)
   
    return <div className="bg-slate-100">
    
        <Navbar user={user}/>
        <DateFilterForm/>
        <Steps/>
        
    
    </div>

}