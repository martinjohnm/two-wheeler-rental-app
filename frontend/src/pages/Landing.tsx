import { useRecoilValue } from "recoil"
import { userAtom } from "../store/atoms"
import { Link } from "react-router-dom"

export const Landing = () => {

    const user = useRecoilValue(userAtom)
   
    return <div className="bg-[url('bgimage.png')] bg-no-repeat bg-cover h-screen py-40">
{/*     
        <Navbar user={user}/>
        <DateFilterForm/>
     */}

     <div className="mx-auto container flex justify-center items-center">
            <p className="font-bold text-4xl">Welcome to Rebike</p>
     </div>

     <div className="mx-auto container flex justify-center items-center">
        <Link to={"/login"}><button className="p-4 bg-green-500 hover:bg-green-600 text-white font-mono mt-2 rounded-md">Login to continue</button></Link>
     </div>

    </div>

}