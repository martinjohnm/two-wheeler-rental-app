import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { adminAtom } from "../../../../store/atoms";
import { LOGOUT_ADMIN } from "../../../../utils/urls";
import { ADMIN_TOKEN } from "../../../../utils/config";
import { toast } from "sonner";




export const useAdminLogout = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()

    const setAdminState = useSetRecoilState(adminAtom)

   
        const logoutadmin = async () => {
            try {
              const response = await fetch(LOGOUT_ADMIN.url,{
                method : LOGOUT_ADMIN.method,
                headers : {"Content-Type" : "application/json"},
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {


                setAdminState(responseData.data)
                localStorage.removeItem(ADMIN_TOKEN)
                toast.success(responseData.message)
                setLoading(false);
                navigate("/")
                
              }

              setLoading(false)
            } catch (error) {
              setError('An error occurred while fetching data');
              setLoading(false);
            }
        };


    return { loading, error, logoutadmin}
}