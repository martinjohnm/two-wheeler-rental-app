import { Link } from "react-router-dom"
import { TextInput } from "../components/TextInput"




export const Login = () => {
    return  <div className="flex items-center justify-center bg-[#020817] h-screen">
      
        <div className="items-center justify-center flex w-full mt-20">
                <div className="w-3/12 p-2 rounded-lg h-full">
                    <div className="p-2">
                        <p className="text-xl text-white font-semibold">Login to your Rebike Account</p>
                    </div>
                    <TextInput type="email" label="Email" placeholder="johndoe@gmail.com"/>
                    <TextInput type="password" label="Password" placeholder="*******"/>
                
                    <div className="p-2 flex items-center justify-center">
                        <button className="bg-blue-800 text-white h-full w-full rounded-lg p-2">
                            Login
                        </button>
                    </div>
                    <div className="p-2 text-white">
                        New to Rebike ? 
                        <Link className="text-white hover:text-blue-500" to={"/signup"}>  Signup Here</Link>
                    </div>
                </div>
        </div>
    </div>
}