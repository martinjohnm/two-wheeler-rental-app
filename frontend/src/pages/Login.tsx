import { Link } from "react-router-dom"
import { TextInput } from "../components/TextInput"
import { useState } from "react"
import { UserLoginInput } from "@martinjohnm/rebike-common"
import { useUserLogin } from "../hooks/user/useUserLogin"




export const Login = () => {

    const {loginUser} = useUserLogin()
    const [postInputs, setpostInputs] =  useState<UserLoginInput>({
        email : "",
        password : ""
    })

    const login = () => {
        loginUser(postInputs)
    }

    return  <div className="flex items-center justify-center bg-[#020817] h-screen">
      
        <div className="items-center justify-center flex w-full mt-20">
                <div className=" p-2 rounded-lg h-full w-96">
                    <div className="p-2">
                        <p className="text-xl text-white font-semibold">Login to your Rebike Account</p>
                    </div>
                    <TextInput type="email" label="Email" placeholder="johndoe@gmail.com" onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            email : e.target.value
                        })) 
                    }}/>
                    <TextInput type="password" label="Password" placeholder="*******" onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            password : e.target.value
                        })) 
                    }}/>
                
                    <div className="p-2 flex items-center justify-center">
                        <button onClick={login} className="bg-blue-800 text-white h-full w-full rounded-lg p-2">
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