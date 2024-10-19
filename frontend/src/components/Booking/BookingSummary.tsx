import { useRecoilValue } from "recoil"
import { bikeForBooking } from "../../store/atoms"
import { useLocation } from "react-router-dom";
import { DateObjConverrer } from "../../utils/time/TimeRange";
import { TimeDiff } from "../../utils/time/Timediff";



export const BookingSummary = () => {
    const bike = useRecoilValue(bikeForBooking)

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    
    
 
    const startTimeParam = String(searchParams.get("startTime"))
    const endTimeParam   = String(searchParams.get("endTime"))


    const startTime = new Date( String(startTimeParam))
    const endTime = new Date( String(endTimeParam))
    const start = DateObjConverrer(startTime)
    const end = DateObjConverrer(endTime)
    
    const TimeDffnce = TimeDiff(endTime, startTime)


    return <div className="w-full grid lg:grid-cols-3 shadow-stone-600 shadow rounded-2xl bg-[#ffffff]">
            <div className="lg:col-span-1 p-4">
                <div>
                    <p className="font-semibold font-mono text-2xl">SUMMARY</p>
                </div>
                <div className="mt-10">
                    <img src={bike?.image} alt="" />
                </div>
                <div className="mt-4 items-center justify-center font-semibold text-xl font-mono">
                    <div className="flex justify-center items-center">
                        <p className="">{bike?.company.title} {bike?.title}</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p>{bike?.model}</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 p-4">
                <div className="justify-between flex text-lg  mt-12">

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
                        <p>{bike?.price} per hour for {TimeDffnce.totalHours} Hours</p>
                    </div>
                    <div>
                        <p>$ {Number(bike?.price) * TimeDffnce.totalHours }</p>
                    </div>
                </div>
                <div className="flex justify-between mt-2 font-bold text-xl">
                    <div>
                        <p>Total :</p>
                    </div>
                    <div>
                        <p>$ {Number(bike?.price) * TimeDffnce.totalHours }</p>
                    </div>
                </div>

                {/* <div className="flex justify-between mt-2 text-sm">
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
    </div>

}



