import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { GET_ALL_COMPANIES } from "../../../../utils/urls";
import { companyAtom } from "../../../../store/atoms";




export const useGetCompanies = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const setLocationState = useSetRecoilState(companyAtom)

    useEffect(() => {
      const get_all_companies = async () => {
        try {
          const response = await fetch(GET_ALL_COMPANIES.url,{
            method : GET_ALL_COMPANIES.method,
            headers : {"Content-Type" : "application/json"},
            credentials : "include",
            })
          
          const responseData = await response.json()
          if (responseData.success) {
            
            setLocationState(responseData.data)
            setLoading(false);
            setLocationState(responseData.data)
            
          }
          setLoading(false)
        } catch (error) {
          setError('An error occurred while fetching data');
          setLoading(false);
        }
    };
    get_all_companies()
    }, [])
        
      
   

    return { loading, error}
    
}