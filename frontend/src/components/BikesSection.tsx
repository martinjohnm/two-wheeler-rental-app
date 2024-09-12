import { useRecoilValue } from "recoil"
import { BikesCard } from "./BikesCard"
import { bikesAtom } from "../store/atoms"
import { useGetBikes } from "../api/hooks/user/bikes/useGetBikes"
import { useEffect } from "react"



export const BikesSection = () => {

    const {loading} = useGetBikes()
    
    const bikes = useRecoilValue(bikesAtom)

    useEffect(() => {
        
        
    },[bikes])
    if (loading) {
        <div>
            Loading....
        </div>
    }
    return <div className="max-w-7xl bg-red-400 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">

        {bikes?.map((data) => (
            <BikesCard key={data.id} id={data.id} title={data.title} model={data.model} price={data.price} image={data.image} company={data.company.title}/>
        ))}

    </div>
}