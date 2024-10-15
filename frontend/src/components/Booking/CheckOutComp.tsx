import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { FormEvent, useEffect, useState } from "react"
import { CREATE_BOOKING_INTENT } from "../../utils/urls"
import { useLocation, useNavigate } from "react-router-dom"
import { useCreateBooking } from "../../api/hooks/user/booking/useCreateBooking"
import { toast } from "sonner"




export const CheckOutComp = ({amount} : {amount : number}) => {

    const stripe = useStripe()
    const elements = useElements()
    const [errorMessage, setErrorMessage] = useState<string>()
    const [clientSecret,setClientSecret] = useState("")
    const [loading, setLoading] = useState(false)

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const startTimeParam = String(searchParams.get("startTime"))
    const endTimeParam   = String(searchParams.get("endTime"))
    const bikeId = Number(searchParams.get("bikeId"))
    

    const fe_url = import.meta.env.VITE_FRONTEND_URL || ""

    const navi = useNavigate()
  
    useEffect(() => {
        const d = async () => {
        try {

      
          
            const response = await fetch(CREATE_BOOKING_INTENT.url,{
                method : CREATE_BOOKING_INTENT.method,
                body : JSON.stringify({startTime : startTimeParam, endTime : endTimeParam, bikeId}),
                headers : {"Content-Type" : "application/json"},
                credentials : "include",
                })
              
              const responseData = await response.json()
              if (responseData.success) {
                setClientSecret(responseData.data)
              } else {
                setErrorMessage(responseData.message);
                toast.error(responseData.message)
                navi("/")
              }

              setLoading(false)
              
        } catch (error) {
            
        }
       
    }
    d()
    }, [])

    const create_booking = useCreateBooking()

    const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
   
        event.preventDefault()
        setLoading(true)
        if (!stripe || !elements) {
            return 
        }

        const {error : submitError} = await elements.submit();

        if (submitError) {
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }
        create_booking.createBookingByDateRange({startTime : startTimeParam, endTime : endTimeParam, bikeId, paymentId : clientSecret})
        
        const {error} = await stripe.confirmPayment({
            
            elements,
            clientSecret,
            confirmParams : {
                return_url : `${fe_url}/payment-success`
            }
            
        })

        
        if (error) {
            setErrorMessage(error.message)
        } else {
           
        }

        setLoading(false)
    }

    if (!clientSecret || !stripe || !elements) {
        return (
          <div className="flex items-center justify-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        );
      }
    return <div className="flex items-center justify-center max-w-xl mx-auto shadow-stone-600 shadow rounded-2xl bg-[#ffffff]">
        <form onSubmit={handleSubmit} className="w-full p-10">
            {clientSecret && <PaymentElement/>}
            {errorMessage && <div>{errorMessage}</div>}
            <button
                disabled={!stripe || loading}
                className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
                >
                {!loading ? `Pay $${amount}` : "Processing..."}
            </button>
        </form>
    </div>
}