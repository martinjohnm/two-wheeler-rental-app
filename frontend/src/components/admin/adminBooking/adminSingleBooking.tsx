import { useEffect } from "react"
import { useCancelBooking } from "../../../api/hooks/user/booking/useCancelBooking"





export const AdminSingleBooking = ({status, amountPaid, id, dateCreated} : {status : String, amountPaid : Number, id : Number, dateCreated : Date}) => {


    const cancel_booking = useCancelBooking()

    const handleCancel = () => {
        cancel_booking.cancelBooking({id})
        
    }

    useEffect(() => {

    },[cancel_booking.loading])

    const d = new Date(dateCreated)
 
    return <tr className="dark:bg-gray-800">
            <td scope="row" className="py-4  whitespace-nowrap dark:text-white">
                {Number(id)}
            </td>
            <td className="py-4">
                <p>{d.getDate()}-{d.getMonth()}-{d.getFullYear()},  {d.getHours()}:{d.getMinutes()}</p>
            </td>
            <td className="py-4">
                $ {Number(amountPaid)}
            </td>
            <td className="py-4">
                {status}
            </td>
            <td className="py-4">
                {status === "CANCELLED" ? "Already cancelled" : (
                    <button onClick={handleCancel} className="p-2 bg-red-600 text-white rounded-md hover:bg-red-800">
                        Cancel
                    </button>
                )}
                
            </td>
        </tr>
        
}