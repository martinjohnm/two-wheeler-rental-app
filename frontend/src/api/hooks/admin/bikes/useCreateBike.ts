import { useState } from "react";
import { NewBike } from "../../../../utils/types";
import { CREATE_BIKE } from "../../../../utils/urls";
import { toast } from "sonner";




export const useCreateBike = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // const navigate = useNavigate()

    const createBike = async (postInputs : NewBike) => {
        try {

            console.log("Hai");
            
          const response = await fetch(CREATE_BIKE.url,{
            method : CREATE_BIKE.method,
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(postInputs),
            credentials : "include",
            })
          
          const responseData = await response.json()
          if (responseData.success) {

            console.log(responseData.data);
            
            toast.success(responseData.message)

            // setUserState(responseData.data)
            // localStorage.setItem(USER_TOKEN, responseData.data.token)
            // toast.success(responseData.message)
            // setLoading(false);
            // navigate("/home")
            
          } else {
            toast.error(responseData.message)
          }

        //   setLoading(false)
        } catch (error) {
          setError('An error occurred while fetching data');
          setLoading(false);
        }
    };

    return {loading, error, createBike}
}