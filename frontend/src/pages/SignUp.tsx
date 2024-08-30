import { Link } from "react-router-dom"
import { TextInput } from "../components/TextInput"




export const SignUp = () => {
    return  <div className="flex items-center justify-center bg-[#020817] h-screen">
      
        <div className="items-center justify-center flex w-full mt-20">
                <div className=" rounded-lg h-full">
                    <div className="p-2 w-96">
                        <p className="text-xl text-white font-semibold">Create Your Rebike Account</p>
                    </div>
                    
                    <TextInput type="text" label="Full Name" placeholder="John Doe"/>
                    <TextInput type="email" label="Email" placeholder="johndoe@gmail.com"/>
                    <TextInput type="password" label="Password" placeholder="*******"/>
                    <TextInput type="password" label="Retype Password" placeholder="*******"/>
                    
                    <div className="p-2 flex items-center justify-center">
                        <button className="bg-blue-800 text-white h-full w-full rounded-lg p-2">
                            Sign Up
                        </button>
                    </div>
                    <div className="p-2 text-white">
                        Already have an account ? 
                        <Link className="text-white hover:text-blue-500" to={"/login"}> Login Here</Link>
                    </div>
                </div>
        </div>
    </div>
}