import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { CURRENT_USER } from "../../../../utils/urls";
import { userAtom } from "../../../../store/atoms";
import { User } from "../../../../utils/types";



export const useCurrentUser = () => {

    const [data, setData] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const setUserState = useSetRecoilState(userAtom)

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(CURRENT_USER.url,{
                method : CURRENT_USER.method,
                headers : {"Content-Type" : "application/json"},
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {

                setData(responseData.data);
                setUserState(responseData.data)
                setLoading(false);
                
              }
              setData(null)
              setLoading(false)
            } catch (error) {
              setError('An error occurred while fetching data');
              setLoading(false);
            }
        };
      
          fetchData();
    }, [])   

    return { data, loading, error}
    
}