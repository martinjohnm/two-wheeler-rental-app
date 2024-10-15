import { useState } from "react";
import { CREATE_BOOKING } from "../../../../utils/urls";
import { toast } from "sonner";


export const useCreateBooking = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const createBookingByDateRange = async ({startTime, endTime, bikeId, paymentId} : {startTime : String, endTime : String, bikeId : Number, paymentId : String}) => {
        try {

            const body = JSON.stringify({startTime, endTime, bikeId, paymentId})
            
          
            const response = await fetch(CREATE_BOOKING.url,{
                method : CREATE_BOOKING.method,
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




 

    return { loading, error, createBookingByDateRange}
}
