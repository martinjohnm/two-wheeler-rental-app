import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { GET_USERS_ADMIN_BULK } from "../../../../utils/urls";
import { User } from "../../../../utils/types";
import { userssAdminAtom } from "../../../../store/atoms";



export const useGetAllUsers = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<User[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const setUsers = useSetRecoilState(userssAdminAtom)

    useEffect(() => {
    const getBookingsByUser = async () => {
        try {

            const response = await fetch(GET_USERS_ADMIN_BULK.url,{
                method : GET_USERS_ADMIN_BULK.method,
                headers : {"Content-Type" : "application/json"},
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {
                setData(responseData.data);
                setUsers(responseData.data)
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




 

    return { loading, error, data}
}