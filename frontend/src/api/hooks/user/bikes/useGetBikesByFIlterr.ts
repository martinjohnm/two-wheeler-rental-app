import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { bikesAtom } from "../../../../store/atoms";
import { GET_ALL_BIKES_BY_FILTER } from "../../../../utils/urls";
import { BikeQueryType } from "../../../../utils/types";


export const useGetBikesByFilter = () => {

    
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const setBikesState = useSetRecoilState(bikesAtom)
    
    const fetchBikesByFilter = async (postInputs : BikeQueryType) => {
        try {

          
            const response = await fetch(GET_ALL_BIKES_BY_FILTER.url,{
                method : GET_ALL_BIKES_BY_FILTER.method,
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(postInputs),
                credentials : "include",
                })
              
              const responseData = await response.json()
              console.log(responseData.data);
              
              if (responseData.success) {
           
                setBikesState(responseData.data)
                setLoading(false);
                
                
              }
              setLoading(false)
        } catch (error) {
            setError('An error occurred while fetching data');
            setLoading(false);
            console.log(GET_ALL_BIKES_BY_FILTER);
            
        }
    };
 

    return { loading, error, fetchBikesByFilter}
    
}