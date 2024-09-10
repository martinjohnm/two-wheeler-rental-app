import { Link } from "react-router-dom"
import { TextInput } from "../components/TextInput"
import { useState } from "react"
import { UserSignupinput } from "@martinjohnm/rebike-common"
import { useUserSignup } from "../api/hooks/user/auth/useUserSignUp"



export const SignUp = () => {
    const [postInputs, setpostInputs] =  useState<UserSignupinput>({
        email : "",
        password : "",
        fullName : "",
        confirmPassword : ""
    })

    const {signupUser} = useUserSignup()

    const signup = () => {
        signupUser(postInputs)
    }

    return  <div className="flex items-center justify-center bg-[#020817] h-screen">
      
        <div className="items-center justify-center flex w-full mt-20">
                <div className=" rounded-lg h-full">
                    <div className="p-2 w-96">
                        <p className="text-xl text-white font-semibold">Create Your Rebike Account</p>
                    </div>
                    
                    <TextInput type="text" label="Full Name" placeholder="John Doe" onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            fullName : e.target.value
                        })) 
                    }}/>
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
                    <TextInput type="password" label="Retype Password" placeholder="*******" onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            confirmPassword : e.target.value
                        })) 
                    }}/>
                    
                    <div className="p-2 flex items-center justify-center">
                        <button onClick={signup} className="bg-blue-800 text-white h-full w-full rounded-lg p-2">
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