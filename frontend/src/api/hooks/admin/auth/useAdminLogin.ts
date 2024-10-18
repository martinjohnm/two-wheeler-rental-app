import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { LOGIN_ADMIN } from "../../../../utils/urls";
import { ADMIN_TOKEN } from "../../../../utils/config";
import { toast } from "sonner";
import { adminAtom } from "../../../../store/atoms";




export const useAdminLogin = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()

    const setAdminState = useSetRecoilState(adminAtom)

   
        const loginAdmin = async (postInputs : {email : String, password : String}) => {
            try {
              const response = await fetch(LOGIN_ADMIN.url,{
                method : LOGIN_ADMIN.method,
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(postInputs),
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {


                setAdminState(responseData.data)
                localStorage.setItem(ADMIN_TOKEN, responseData.data.token)
                toast.success(responseData.message)
                setLoading(false);
                navigate("/admin-dashboard")
                
              }

              setLoading(false)
            } catch (error) {
              setError('An error occurred while fetching data');
              setLoading(false);
            }
        };


    return { loading, error, loginAdmin}
}