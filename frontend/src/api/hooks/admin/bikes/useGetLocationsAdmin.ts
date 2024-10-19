import { useEffect } from "react";
import { GET_ADMIN_LOCATIONS } from "../../../../utils/urls";

import { useSetRecoilState } from "recoil";
import { locationsAdmin } from "../../../../store/atoms";




export const useGetLocationsAdmin = () => {

    // const navigate = useNavigate()


    const setLocations = useSetRecoilState(locationsAdmin)

    useEffect(() => {
        const getBookingsByUser = async () => {
            try {
    
                const response = await fetch(GET_ADMIN_LOCATIONS.url,{
                    method : GET_ADMIN_LOCATIONS.method,
                    headers : {"Content-Type" : "application/json"},
                    credentials : "include",
                    })
                  
                  const responseData = await response.json()
                  if (responseData.success) {
                   
                    setLocations(responseData.data)
     
                    
                  } else {

                  }
                      
            } catch (error) {
     
            }
        };
            getBookingsByUser()
        },[])
}