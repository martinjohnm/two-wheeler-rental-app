import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { bikesAtom } from "../../../../store/atoms";
import { GET_ALL_BIKES } from "../../../../utils/urls";


export const useGetBikes = () => {

    
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const setBikesState = useSetRecoilState(bikesAtom)

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(GET_ALL_BIKES.url,{
                method : GET_ALL_BIKES.method,
                headers : {"Content-Type" : "application/json"},
                credentials : "include",
                })
              
              const responseData = await response.json()
              
              if (responseData.success) {

                setBikesState(responseData.data)
                setLoading(false);
            
                
              }
              setLoading(false)
            } catch (error) {
              setError('An error occurred while fetching data');
              setLoading(false);
            }
        };
      
          fetchData();
    }, [])   

    return { loading, error}
    
}