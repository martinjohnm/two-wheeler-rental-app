import { useEffect, useState } from "react";
import { GET_ALL_BIKES_BY_DATE } from "../../../../utils/urls";
import { useSetRecoilState } from "recoil";
import { FilteredBikesAtom } from "../../../../store/atoms";
import { TimewiseUrlCreater } from "../../../../utils/time/TimewiseUrlCreater";


export const useGetBikesByDate = ({startTimeParam, endTimeParam, locationIdParam, companyIdParam} : {startTimeParam : string, endTimeParam : string, locationIdParam : number | undefined, companyIdParam : number | undefined}) => {

  const urlParam = GET_ALL_BIKES_BY_DATE.url

  const url = TimewiseUrlCreater({startTimeParam, endTimeParam, companyIdParam, locationIdParam, urlParam})
  
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const setFilteredBikes = useSetRecoilState(FilteredBikesAtom)

    const fetchBikesByDate = async () => {
        try {

            
          
            const response = await fetch(url,{
                method : GET_ALL_BIKES_BY_DATE.method,
                headers : {"Content-Type" : "application/json"},
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {
                
                setFilteredBikes(responseData.data)
                     
              }

              setLoading(false)
              
        } catch (error) {
            setError('An error occurred while fetching data');
            setLoading(false);
        
        }
    };

    useEffect(() => {
      fetchBikesByDate()
    },[])
 

    return { loading, error}
    
}