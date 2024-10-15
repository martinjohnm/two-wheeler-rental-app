
import { loadStripe } from "@stripe/stripe-js";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms";
import { Navbar } from "../components/Navbar";
import { CheckOutComp } from "../components/Booking/CheckOutComp";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripPromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)




export const CheckOutPage = () => {
  const user = useRecoilValue(userAtom)

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount_to_pay = String(searchParams.get("amount"))
  

  return <div className="">
      <Navbar user={user}/>
      <div className="mx-auto container mt-10 p-10">
        <div className="flex justify-center items-center">
          <div className="items-center justify-center p-4">
            <span className="text-3xl font-bold">Rebike</span>
            <p className="text-xl font-semibold">has requested <span>{Number(amount_to_pay)} $</span></p>
          </div>
        </div>
        <Elements stripe={stripPromise}
        options={{
            mode : "payment",
            amount : Number(amount_to_pay),
            currency : "usd"
        }}>
            <CheckOutComp amount={Number(amount_to_pay)}/>

        </Elements>
      </div>
      
  </div>
}
