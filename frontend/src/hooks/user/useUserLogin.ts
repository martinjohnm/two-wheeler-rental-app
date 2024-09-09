import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { LOGIN_USER } from "../../utils/urls";
import { userAtom } from "../../store/atoms";
import { USER_TOKEN } from "../../utils/config";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { UserLoginInput } from "@martinjohnm/rebike-common";




export const useUserLogin = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()

    const setUserState = useSetRecoilState(userAtom)

   
        const loginUser = async (postInputs : UserLoginInput) => {
            try {
              const response = await fetch(LOGIN_USER.url,{
                method : LOGIN_USER.method,
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


    return { loading, error, loginUser}
    
}