import { useState } from "react";
import { toast } from "sonner";
import { CANCEL_BOOKING } from "../../../../utils/urls";




export const useCancelBooking = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const cancelBooking = async ({id} : {id : Number}) => {
        try {

            const body = JSON.stringify({id})
            
          
            const response = await fetch(CANCEL_BOOKING.url,{
                method : CANCEL_BOOKING.method,
                headers : {"Content-Type" : "application/json"},
                body,
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {
                
                toast.success(responseData["message"]);
    
              } else {
                toast.error(responseData["message"])
        
              }



              

              setLoading(false)
              
        } catch (error) {
            setError('An error occurred while fetching data');
            setLoading(false);
        
        }
    };




 

    return { loading, error, cancelBooking}
}