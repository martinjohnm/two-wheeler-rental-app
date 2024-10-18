import { useState } from "react";
import { CREATE_LOCATION } from "../../../../utils/urls";
import { toast } from "sonner";




export const useCreateLocation = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // const navigate = useNavigate()

    const createLocation = async (postInputs : {title : String}) => {
        try {

          const response = await fetch(CREATE_LOCATION.url,{
            method : CREATE_LOCATION.method,
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(postInputs),
            credentials : "include",
            })
          
          const responseData = await response.json()
          if (responseData.success) {

            toast.success(responseData.message)

   
          } else {
            toast.error(responseData.message)
          }

        //   setLoading(false)
        } catch (error) {
          setError('An error occurred while fetching data');
          setLoading(false);
        }
    };

    return {loading, error, createLocation}
}