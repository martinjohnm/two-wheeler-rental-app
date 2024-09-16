


import { useSetRecoilState } from "recoil";
import { BikeQueryType } from "../../../../utils/types";
import { useNavigate } from "react-router-dom";
import { datePickerAtom } from "../../../../store/atoms";

export const useGetBikesByDateRange = () => {

    const navi = useNavigate()

    const setDatefilter = useSetRecoilState(datePickerAtom)


    const fetchBikesByDateRange = async (postInputs : BikeQueryType) => {
        
      setDatefilter(postInputs)

      navi(`/available-bikes?startTime=${postInputs.startTime?.toISOString()}&endTime=${postInputs.endTime?.toISOString()}&locationId=${postInputs.locationId}&companyId=${postInputs.companyId}`)

    };
 

    return { fetchBikesByDateRange}
    
}
















        // try {

          
        //     const response = await fetch(GET_ALL_BIKES_BY_DATE_RANGE.url,{
        //         method : GET_ALL_BIKES_BY_DATE_RANGE.method,
        //         headers : {"Content-Type" : "application/json"},
        //         body : JSON.stringify(postInputs),
        //         credentials : "include",
        //         })
              
        //       const responseData = await response.json()
        //       if (responseData.success) {
           
        //         setQueryDate(postInputs)
        //         setBikesState(responseData.data)
        //         setLoading(false);
        //         navi(`/available-bikes?startTime=${postInputs.startTime}&endTime=${postInputs.endTime}&locationId=${postInputs.locationId}&companyId=${postInputs.companyId}`)
                     
        //       } else {
        //         setLoading(false)
        //         toast.error(responseData.message)
        //       }
              
        // } catch (error) {
        //     setError('An error occurred while fetching data');
        //     setLoading(false);
        
        // }