import { useEffect, useState } from "react";
import { GET_SINGLE_BIKE_BY_DATE } from "../../../../utils/urls";
import { TimewiseUrlCreater } from "../../../../utils/time/TimewiseUrlCreater";
import { useSetRecoilState } from "recoil";
import { bikeForBooking } from "../../../../store/atoms";


export const useGetSingleBikeByDate = ({startTimeParam, endTimeParam, locationIdParam, companyIdParam, bikeId} : {startTimeParam : string, endTimeParam : string, locationIdParam : number | undefined, companyIdParam : number | undefined, bikeId : number}) => {


    const urlParam = GET_SINGLE_BIKE_BY_DATE.url + `/${String(bikeId)}`

    const url = TimewiseUrlCreater({startTimeParam, endTimeParam, companyIdParam, locationIdParam, urlParam})
  
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const setBikeForBooking = useSetRecoilState(bikeForBooking)

    const fetchBikesByDate = async () => {
        try {

            
          
            const response = await fetch(url,{
                method : GET_SINGLE_BIKE_BY_DATE.method,
                headers : {"Content-Type" : "application/json"},
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {
                
                setBikeForBooking(responseData.data)
                
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