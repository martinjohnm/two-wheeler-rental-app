import { Link } from "react-router-dom"



export const PaymentSuccessComp = () => {
    return <div className="mx-auto container max-w-7xl p-8">
        <div className="justify-center items-center max-w-[700px] mx-auto p-10 shadow-stone-600 shadow rounded-2xl bg-[#ffffff]">
            <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6 items-center justify-center flex">
                <path fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                </path>
            </svg>
            <div className="items-center justify-center flex"> 
                <p className="font-bold text-3xl">Payment done!</p>
            </div>
            <div className="flex justify-center items-center mt-4 font-mono">
                <p>Thank you for completing your secure online payment.</p>
            </div>
            <div className="flex justify-center items-center mt-4 font-mono">
                <p>Have a great day!</p>
            </div>
            <div className="flex justify-center items-center mt-4">
                <Link to={"/"}>
                    <button className="p-4 bg-blue-700 rounded-lg shadow-md text-white hover:bg-blue-900 font-mono">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    </div>
}