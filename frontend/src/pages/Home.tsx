import { useRecoilValue } from "recoil"
import { DateFilterForm } from "../components/DateFilterForm"
import { Navbar } from "../components/Navbar"
import { userAtom } from "../store/atoms"
export const Home = () => {
   
    const user = useRecoilValue(userAtom)

    
    return <div className="bg-[url('bgimage.png')] bg-no-repeat bg-cover h-screen">
    
    <Navbar user={user}/>
    <DateFilterForm />
    {/* <Steps/> */}
    

</div>
}