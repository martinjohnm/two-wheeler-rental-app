import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { LOGOUT_USER } from "../../utils/urls";
import { userAtom } from "../../store/atoms";
import { USER_TOKEN } from "../../utils/config";
import { useNavigate } from "react-router-dom";




export const useUserLogout = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()

    const setUserState = useSetRecoilState(userAtom)

    
        const logoutUser = async () => {
            try {
              const response = await fetch(LOGOUT_USER.url,{
                method : LOGOUT_USER.method,
                headers : {"Content-Type" : "application/json"},
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {

                setUserState(null)
                localStorage.removeItem(USER_TOKEN)
                setLoading(false);
                navigate("/")
                
              }

              setLoading(false)
            } catch (error) {
              setError('An error occurred while fetching data');
              setLoading(false);
            }
        };
  

    return { loading, error, logoutUser}
    
}