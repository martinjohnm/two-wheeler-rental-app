
import { MdDirectionsBike } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaBicycle } from "react-icons/fa";


export const Steps = () => {
    return (
        <div className="max-w-7xl mx-auto container ">
            
            <div className="justify-center items-center mt-6">
                <div className="text-orange-600 flex justify-center items-center">
                    HOW IT WORKS
                </div>

                <div className="font-bold text-4xl font-serif text-blue-950 flex justify-center items-center">
                    <p>Follow these 3 steps</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-2 mt-6">

                <div className="items-center justify-center">
                    <div className="text-orange-600 flex justify-center text-center">
                        <div className="h-[70px] w-[70px] rounded-lg bg-orange-600 items-center flex justify-center">
                            <FaBicycle className="w-[40px] h-[40px] text-white"/>
                        </div>
                    </div>

                    <div className=" font-semibold text-2xl font-serif text-blue-950 flex justify-center text-center mt-4">
                        <p>Select a bike</p>
                    </div>
                    
                    <div className="font-serif flex justify-center text-center mt-2">
                            hai
                    </div>
                
                </div>
                <div className="items-center justify-center">
                    <div className="text-orange-600 flex justify-center text-center">
                        <div className="h-[70px] w-[70px] rounded-lg bg-orange-600 items-center flex justify-center">
                            <SlCalender className="w-[40px] h-[40px] text-white"/>
                        </div>
                    </div>

                    <div className=" font-semibold text-2xl font-serif text-blue-950 flex justify-center text-center mt-4">
                        <p>Set a date</p>
                    </div>
                    
                    <div className="font-serif flex justify-center text-center mt-2">
                            hai
                    </div>
                
                </div>
                <div className="items-center justify-center">
                    <div className="text-orange-600 flex justify-center text-center">
                        <div className="h-[70px] w-[70px] rounded-lg bg-orange-600 items-center flex justify-center">
                            <MdDirectionsBike className="w-[40px] h-[40px] text-white"/>
                        </div>
                    </div>

                    <div className=" font-semibold text-2xl font-serif text-blue-950 flex justify-center text-center mt-4">
                        <p>Pick up the product</p>
                    </div>
                    
                    <div className="font-serif flex justify-center text-center mt-2">
                            hai
                    </div>
                
                </div>
            </div>

          
     
        </div>
        

    )

}