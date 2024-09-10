import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { UserSignupinput } from "@martinjohnm/rebike-common";
import { userAtom } from "../../../../store/atoms";
import { SIGNUP_USER } from "../../../../utils/urls";
import { USER_TOKEN } from "../../../../utils/config";




export const useUserSignup = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()

    const setUserState = useSetRecoilState(userAtom)

   
        const signupUser = async (postInputs : UserSignupinput) => {
            try {
              const response = await fetch(SIGNUP_USER.url,{
                method : SIGNUP_USER.method,
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(postInputs),
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {


                setUserState(responseData.data)
                localStorage.setItem(USER_TOKEN, responseData.data.token)
                toast.success(responseData.message)
                setLoading(false);
                navigate("/home")
                
              }

              setLoading(false)
            } catch (error) {
              setError('An error occurred while fetching data');
              setLoading(false);
            }
        };


    return { loading, error, signupUser}
    
}