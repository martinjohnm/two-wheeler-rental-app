import { useRecoilValue } from "recoil";
import { useGetBookingsPerUser } from "../../api/hooks/user/booking/useGetBookingsPerUser"
import { SingleBookingComp } from "./SingleBookingComp"
import { bookingsAtom } from "../../store/atoms";



export const TotalBookingComp = () => {

    const {loading} = useGetBookingsPerUser()
    const bookings = useRecoilValue(bookingsAtom)

    console.log(bookings);
    

    if (loading) {
        return <div className="mx-auto container items-center justify-center">
            <div className="flex items-center justify-center mt-10">
                Loading...
            </div>
            
    </div>
    }

    return <div className="mx-auto container items-center justify-center">
        <div className="pt-4">
            <p className="text-3xl font-bold">
                Bookings
            </p>
        </div>
      
        <div className="items-center justify-center pt-4">
            
            {bookings?.map((data) => (
                <SingleBookingComp status={data.status} price={data.bike.price} image={data.bike.image} title={data.bike.title} startTimee={data.startTime} endTimee={data.endTime} model={data.bike.model} amountPaid={data.amount} id={data.id} key={data.id}/>
            ))}

        </div>
    </div>
    }
