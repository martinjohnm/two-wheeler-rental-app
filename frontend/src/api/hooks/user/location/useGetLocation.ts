import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { locationAtom } from "../../../../store/atoms";
import { GET_ALL_LOCATION } from "../../../../utils/urls";



export const useGetLocations = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const setLocationState = useSetRecoilState(locationAtom)
    
    useEffect(() => {
      const get_all_locations = async () => {
        try {
          const response = await fetch(GET_ALL_LOCATION.url,{
            method : GET_ALL_LOCATION.method,
            headers : {"Content-Type" : "application/json"},
            credentials : "include",
            })
          
          const responseData = await response.json()
          if (responseData.success) {
            
            setLocationState(responseData.data)
            setLoading(false);
            setLocationState(responseData.data)
            
          }
          setLoading(false)
        } catch (error) {
          setError('An error occurred while fetching data');
          setLoading(false);
        }
    };
    get_all_locations()
    }, [loading])
        
      
   

    return { loading, error}
    
}