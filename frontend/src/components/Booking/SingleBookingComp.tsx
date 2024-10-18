import { useEffect } from "react"
import { TimeDiff } from "../../utils/time/Timediff"
import { DateObjConverrer } from "../../utils/time/TimeRange"
import { useCancelBooking } from "../../api/hooks/user/booking/useCancelBooking"



export const SingleBookingComp = ({image, title, model, startTimee, endTimee, price, status, amountPaid, id } : {image : string, title : string, model : number, startTimee : Date, endTimee : Date, price : number, status : String, amountPaid : Number, id : Number}) => {


    const startTimeParam = String(startTimee)
    const endTimeParam   = String(endTimee)
    const startTime = new Date( String(startTimeParam))
    const endTime = new Date( String(endTimeParam))
    const start = DateObjConverrer(startTime)
    const end = DateObjConverrer(endTime)
    //const [loading, setLoading] = useState(false)

    
    const TimeDffnce = TimeDiff(endTime, startTime)

    const cancel_booking = useCancelBooking()

    const handleCancel = () => {
        cancel_booking.cancelBooking({id})
        
    }

    useEffect(() => {

    },[cancel_booking.loading])

    return <div className=" p-6 px-10 border-t-2 flex items-center justify-center">
        
           
            <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-4 shadow-stone-600 shadow rounded-2xl bg-[#ffffff] p-6">
                <div className="col-span-1">
                    <div className="flex gap-4 items-center justify-center">
                        <p className="font-bold text-lg"> {title}</p>
                        <p className="font-semibold">{model}</p>
                    </div>
                    <img src={image} alt="" className=" bg-red-200 h-40 w-60 items-center justify-center"/>
                </div>
                <div className=" col-span-2">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="text-lg">{start[1]} </p>
                            <p className="">{start[0]}</p>
                        </div>
                        <div>
                            to
                        </div>
                        <div>
                            <p>{end[1]} </p>
                            <p>{end[0]}</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <hr className="w-ful h-[1px] bg-slate-500 border-0 rounded dark:bg-gray-700 mx-auto container" />
                    </div>
                    <div className="mt-2">
                        <div>
                            <p>Hebbal(Presidency college)</p>
                        </div>
                        <div>
                            <p>#68, Chiranjeevi layout, Kemapura, Hebbal, Bangalore - 560024</p>
                        </div>
                    </div>
                    <div className="mt-2">
                            <hr className="w-ful h-[1px] bg-slate-500 border-0 rounded dark:bg-gray-700 mx-auto container" />
                    </div>

                    <div className="flex justify-between mt-2 text-sm">
                        <div>
                            <p>{price} per hour for {TimeDffnce.totalHours} Hours</p>
                        </div>
                        <div>
                            <p>$ {Number(price) * TimeDffnce.totalHours }</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2 font-bold text-xl">
                        <div>
                            <p>Total :</p>
                        </div>
                        <div>
                            <p>$ {Number(price) * TimeDffnce.totalHours } </p>
                            
                        </div>
                    </div>
                    <div className="flex justify-between mt-2">
                        <div >
                            <p className="font-bold text-xl">Total Paid :</p>
                            <span className="text-sm">({Number(price) * TimeDffnce.totalHours } + {Math.round(Number(price) * TimeDffnce.totalHours * 0.14)} (CGST) + {Math.round(Number(price) * TimeDffnce.totalHours * 0.14)}) (SGST)</span>
                        </div>
                        <div>
                            <p className="font-bold text-xl">$ {Number(amountPaid)} </p>
                            
                        </div>
                    </div>

                    {/* <div className="flex justify-between mt-2 text-sm pb-2">
                        <div>
                            <div>
                                <p>Km Limit (?)</p>
                            </div>
                            <div>
                                <p>Excess Km Charges</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>196 Km</p>
                            </div>
                            <div>
                                <p>$ 10/Km</p>
                            </div>

                        </div>
                    </div> */}



                </div>
                <div className="col-span-1">
                    
                    <div className="justify-between flex">
                        <div className="">
                            Status
                        </div>
                       
                        <div>
                            {status}
                        </div>
                    </div>

                    <div className="justify-between flex">
                        <div className="">
                            Total Paid
                        </div>
                       
                        <div >
                            <p className="font-bold text-xl">$ {Number(amountPaid)}</p>
                        </div>
                    </div>
                    
                    {status === "CANCELLED" ? ("") : (
                        <div className="items-center justify-center flex mt-4">
                        <button onClick={handleCancel} className="bg-red-600 p-2 rounded-md border-2 w-full hover:bg-red-800">
                            <p className="text-white font-bold">Cancel Booking</p>
                        </button>
                        </div>
                        )}
                    
                    
                </div>
            </div>
        
    </div>
}