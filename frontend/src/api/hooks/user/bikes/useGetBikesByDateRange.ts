import { useState } from "react";
import { GET_ALL_BIKES_BY_DATE_RANGE, GET_ALL_BIKES_BY_FILTER } from "../../../../utils/urls";
import { BikeQueryType } from "../../../../utils/types";


export const useGetBikesByDateRange = () => {

    
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBikesByDateRange = async (postInputs : BikeQueryType) => {
        try {

          
            const response = await fetch(GET_ALL_BIKES_BY_DATE_RANGE.url,{
                method : GET_ALL_BIKES_BY_DATE_RANGE.method,
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(postInputs),
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {
           
                setLoading(false);
                     
              }
              setLoading(false)
        } catch (error) {
            setError('An error occurred while fetching data');
            setLoading(false);
            console.log(GET_ALL_BIKES_BY_FILTER);
            
        }
    };
 

    return { loading, error, fetchBikesByDateRange}
    
}