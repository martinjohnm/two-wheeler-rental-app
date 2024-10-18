import { useEffect, useState } from "react";
import { CREATE_LOCATION, GET_ADMIN_LOCATIONS, GET_ALL_LOCATION } from "../../../../utils/urls";
import { toast } from "sonner";
import { useSetRecoilState } from "recoil";
import { locationsAdmin } from "../../../../store/atoms";




export const useGetLocationsAdmin = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
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
                    console.log(responseData.data);
                    
                  } else {
                    setError(responseData.message)
                  }
    
                  setLoading(false)
                  
            } catch (error) {
                setError('An error occurred while fetching data');
                setLoading(false);
            
            }
        };
            getBookingsByUser()
        },[])
}