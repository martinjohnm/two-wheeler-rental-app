import { useEffect, useState } from "react";
import { CURRENT_USER } from "../utils/urls";
import { User, userAtom } from "../store/atoms";
import { useSetRecoilState } from "recoil";




export const useCurrentUser = () => {

    const [data, setData] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const usersetState = useSetRecoilState(userAtom)

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
                usersetState(responseData.data)
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