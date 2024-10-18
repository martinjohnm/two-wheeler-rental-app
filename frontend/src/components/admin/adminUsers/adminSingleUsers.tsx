import { useEffect } from "react"
import { useCancelBooking } from "../../../api/hooks/user/booking/useCancelBooking"





export const AdminSingleUsers = ({userId, email, fullName} : {userId : Number, email : String, fullName : String}) => {




    useEffect(() => {

    },[])

    return <tr className="dark:bg-gray-800">
            <td scope="row" className="py-4  whitespace-nowrap dark:text-white">
                {Number(userId)}
            </td>
            <td className="py-4">
                <p>{email}</p>
            </td>
            <td className="py-4">
                {fullName}
            </td>
        
            
        </tr>
        
}