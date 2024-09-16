import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { TimeDiff } from "../../utils/time/Timediff";
import { bikeForBooking } from "../../store/atoms";





export const CheckOutBox = () => {
    const bike = useRecoilValue(bikeForBooking)

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

 
    const startTimeParam = String(searchParams.get("startTime"))
    const endTimeParam   = String(searchParams.get("endTime"))
    const startTime = new Date( String(startTimeParam))
    const endTime = new Date( String(endTimeParam))
    const TimeDffnce = TimeDiff(endTime, startTime)

    const Total_amount_to_pay = (Math.round(Number(bike?.price) * TimeDffnce.totalHours * 0.14)*2) + (Number(bike?.price) * TimeDffnce.totalHours)

    return <div className="w-full shadow-stone-600 shadow rounded-2xl bg-[#ffffff]">
        <div className="lg:col-span-1 p-4">
            <p className="font-semibold font-mono text-2xl">CHECKOUT</p>
        </div>
        <Fee_Amount_btween text={"Booking Fee"} amount={Number(bike?.price) * TimeDffnce.totalHours } />
        <Fee_Amount_btween text={"CGST (14%)"} amount={Math.round(Number(bike?.price) * TimeDffnce.totalHours * 0.14) } />
        <Fee_Amount_btween text={"SGST (14%)"} amount={Math.round(Number(bike?.price) * TimeDffnce.totalHours * 0.14) } />
        <Fee_Amount_btween text={"Refundable Deposite"} amount={0} />
        <div className="flex justify-between p-4 font-bold text-xl">
            <div>
                <p>Total Payable Amount</p>
            </div>
            <div>
                <p>₹ {Total_amount_to_pay}</p>
            </div>
        </div>
        <div className="w-full p-4">
            <button className="w-full p-3 rounded-2xl bg-yellow-400 hover:shadow hover:shadow-stone-600 cursor-pointer">Make Payment</button>
        </div>
    </div>
}




const Fee_Amount_btween = ({text, amount} : {text: string, amount: number}) => {


    return <div className="flex justify-between p-4">
            <div>
                <p>{text}</p>
            </div>
            <div>
                <p>₹ {amount}</p>
            </div>
        </div>
}