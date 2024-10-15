import { useEffect, useState } from "react";
import { GET_BOOKINGS_BY_USER } from "../../../../utils/urls";
import { Booking } from "../../../../utils/types";
import { useSetRecoilState } from "recoil";
import { bookingsAtom } from "../../../../store/atoms";


export const useGetBookingsPerUser = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<Booking[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const setBookings = useSetRecoilState(bookingsAtom)

    useEffect(() => {
    const getBookingsByUser = async () => {
        try {

            const response = await fetch(GET_BOOKINGS_BY_USER.url,{
                method : GET_BOOKINGS_BY_USER.method,
                headers : {"Content-Type" : "application/json"},
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {
                setData(responseData.data);
                setBookings(responseData.data)
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




 

    return { loading, error, data}
}