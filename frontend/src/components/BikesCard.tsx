import { Link } from "react-router-dom"



export const BikesCard = ({id,title, model ,price, image, company, startTime, endTime, startDate, endDate, duration, startTimeParam, endTimeParam, locationIdParam, companyIdParam} : {id: number,title : String, price : number, image : String, model : number, company : String, startTime? : String, endTime? : String, startDate? : String, endDate ?: String, duration ?: String, startTimeParam ?: String, endTimeParam ?: String, locationIdParam ?: number | undefined, companyIdParam ?: number | undefined}) => {

    
    return <div className="items-center p-4 justify-center rounded-xl shadow-2xl bg-white">
        <div className="text-center flex justify-center px-2 items-center">
            <div className="">
                <p className="text-lg font-semibold font-mono flex">{company} {title} {model}</p>
            </div>
         
            
        </div>
        <div className="mt-4">
            <img className="h-[80%] w-[80%] mx-auto container" src={String(image)} alt="" />
        </div>
        
        <hr className="w-full h-1 mt-2 bg-gray-100 border-0 rounded dark:bg-gray-700" />

        <div className="grid grid-cols-7 mt-2">
            <div className="justify-center items-center p-2 mx-auto col-span-3">
                <div className="">
                    {startTime}
                </div>
                <div>
                    {startDate}
                </div>
            </div>

            <div className="col-span-1 h-full flex items-center justify-center">
                <div className="rounded-full w-6 h-6 flex items-center justify-center bg-black">
                    <p className="text-white font-serif font-bold">to</p>
                </div>
                
            </div>
            <div className="justify-center items-center p-2 mx-auto col-span-3">
                <div className="">
                    {endTime}
                </div>
                <div>
                    {endDate}
                </div>
            </div>

        </div>
        <div className="mx-auto items-center justify-center grid">
            ({duration})
        </div>
        <hr className="w-full h-1 mt-2 bg-gray-100 border-0 rounded dark:bg-gray-700" />
        <div className="grid grid-cols-2 mt-2">

            <div className="col-span-1 items-center justify-center mx-auto">
                <p className='font-bold text-lg'>
                    ₹ {price}
                </p>
                <p>
                    (100 km included)
                </p>
            </div>

            <div className="col-span-1 items-center justify-center mx-auto">
                <Link to={`/book/${id}?startTime=${startTimeParam}&endTime=${endTimeParam}&locationId=${locationIdParam}&companyId=${companyIdParam}`}>
                <button className="bg-yellow-400 h-full w-28 cursor-pointer hover:bg-yellow-500 shadow-lg rounded-2xl py-2 font-mono text-black text-lg">Book</button>
                </Link>
            </div>
        </div>
    </div>
}