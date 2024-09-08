import { Link, useNavigate } from "react-router-dom"
import { TextInput } from "../components/TextInput"
import { useState } from "react"
import { UserLoginInput } from "@martinjohnm/rebike-common"
import { LOGIN_USER } from "../utils/urls"
import { USER_TOKEN } from "../utils/config"
import { toast } from "sonner"




export const Login = () => {


    const navigate = useNavigate()
    const [postInputs, setpostInputs] =  useState<UserLoginInput>({
        email : "",
        password : ""
    })
    async function login() {
        try {
            const response = await fetch(LOGIN_USER.url,{
                    method : LOGIN_USER.method,
                    headers : {"Content-Type" : "application/json"},
                    body : JSON.stringify(postInputs),
                    credentials : "include",
            })
            
            const data = await response.json()
            
            if (!data.success) {
                toast.error(data.message)
            }

            toast.success(data.message)

            localStorage.setItem(USER_TOKEN, data.data.token)
            navigate("/home")
            
              
        } catch(error) {
            let message
            if (error instanceof Error) message = error.message
            else message = String(error)
            console.log("Error during login",  message); 
        }
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