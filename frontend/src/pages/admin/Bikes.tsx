import { useRecoilValue, useSetRecoilState } from "recoil"
import { SidebarComp } from "../../components/admin/adminHome/SidebarComp"
import { useGetBikes } from "../../api/hooks/user/bikes/useGetBike"
import { AddBikeBoolean, AdminSideBarOpen, bikesAtom } from "../../store/atoms"
import { AdminSingleBike } from "../../components/admin/adminBikes/adminSingleBike"
import { useState } from "react"
import { BikeTextInput } from "../../components/admin/adminBikes/BikeTextInput"
import { LocationSelector } from "../../components/LocationSelector"
import { CompanySelector } from "../../components/CompanySelector"
import { NewBike } from "../../utils/types"
import { useCreateBike } from "../../api/hooks/admin/bikes/useCreateBike"
import { toast } from "sonner"
import { AdminNavbar } from "../../components/admin/AdminNavBar"





export const Bikes = () => {
    const sideBar = useRecoilValue(AdminSideBarOpen)
 
    const [postInputs, setpostInputs] =  useState<NewBike | null>(null)

    const createBikeee = useCreateBike()

    const createBike = (event : any) => {
        event.preventDefault()
        if (postInputs) {
            createBikeee.createBike(postInputs)
        } else {
            toast.message("Invalid Data")
        }
        
    }


    const {loading} = useGetBikes()
    const bikes = useRecoilValue(bikesAtom)


    const addBikeVisible = useRecoilValue(AddBikeBoolean)

    const setAddBikeVisible = useSetRecoilState(AddBikeBoolean)


    const handleAddnew = () => {

        setAddBikeVisible(c => !c)

    }

    if (loading) {
        return <div className="bg-[#f4f4f5] h-screen relative">

        {sideBar ? <div className="top-0 z-11 bg-transparent shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-45 mx-auto container w-96 p-2 h-screen fixed">  
                
                {/* <div className="justify-end items-center flex cursor-pointer">
                    <button onClick={handleSideBar}><img src="https://www.svgrepo.com/show/500154/close-tab.svg" className="w-10 h-10"  alt="" /></button>
                </div> */}
                <div className="h-10">
    
                </div>
                <SidebarComp title="Dashboard" to="/admin-dashboard"/>
                <SidebarComp title="Bookings" to="/admin-bookings"/>
                <SidebarComp isSelected={true} title="Bikes" to="/admin-bikes"/>
                <SidebarComp title="Locations" to="/admin-locations"/>
                <SidebarComp title="Users" to="/admin-users"/>
        </div> : ""}   
        <AdminNavbar title={"Bikes"}/>  
        <div className="mx-auto container">
        <div className="flex items-center justify-center">
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
        </div>
        </div>
    </div>
    }

    return <div className="bg-[#f4f4f5] h-screen relative">

    {sideBar ? <div className="top-0 z-11 bg-transparent shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-45 mx-auto container w-96 p-2 h-screen fixed">  
       
            <div className="h-10">
            </div>
            <SidebarComp title="Dashboard" to="/admin-dashboard"/>
            <SidebarComp title="Bookings" to="/admin-bookings"/>
            <SidebarComp isSelected={true} title="Bikes" to="/admin-bikes"/>
            <SidebarComp title="Locations" to="/admin-locations"/>
            <SidebarComp title="Users" to="/admin-users"/>
    </div> : ""}   
    <AdminNavbar title={"Bikes"}/>  
    <div className="mx-auto container">
        <div className="justify-between flex">
            <p className="text-2xl mx-16">{!addBikeVisible ? "Bikes" : "Add New Bike"}</p>
            <div className="mx-16">
                {!addBikeVisible ? <button onClick={handleAddnew} className="bg-green-500 p-2 rounded-md text-white">Add New</button> : 
                <button onClick={handleAddnew} className="bg-green-500 p-2 rounded-md text-white">View All Bikes</button>}
            </div>
        </div>

        {addBikeVisible ? (
            
            <form className="mx-auto max-w-xl container justify-center items-center px-10">
                
               <BikeTextInput title={"Title"} placeHolder={"CBR 150"} onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            title : e.target.value
                        })) 
                    }}/>
               <BikeTextInput title={"Image Link"} placeHolder={"5e7t7r8hfuhfblsflha"} onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            image : e.target.value
                        })) 
                    }}/>
               <BikeTextInput type={"number"} title={"Price Per Hour"} placeHolder={"40"} onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            price : Number(e.target.value)
                        })) 
                    }}/>

                <BikeTextInput type={"number"} title={"Model"} placeHolder={"2000"} onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            model : Number(e.target.value)
                        })) 
                    }}/>
               
               <div className="mb-8">
                    <LocationSelector onChange={(locationId : number) => {
                        setpostInputs(c => ({
                            ...c, 
                            locationId 
                        })) 
                    }}/>
               </div>
               <div className="mb-8">
                    <CompanySelector onChange={(companyId : number) => {
                        setpostInputs(c => ({
                            ...c, 
                            companyId
                        })) 
                    }}/>
               </div>
               
                <button onClick={createBike} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        ) : (
            <div className="mx-16 overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 rounded-s-lg">
                            Bike Id
                        </th>
                      
                        <th scope="col" className="py-3 rounded-s-lg">
                            Title
                        </th>
                      
                        <th scope="col" className="py-3 rounded-s-lg">
                            Company
                        </th>
                      
                        <th scope="col" className="py-3">
                            Location
                        </th>
                        <th scope="col" className="py-3">
                            Action
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                {bikes?.map((data) => (
                    <AdminSingleBike key={data.id} id={data.id} title={data.title} companyName={data.company.title} locationName={data.location.title}/>
                ))}
                
                </tbody>
                {/* <tfoot>
                    <tr className="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" className="px-6 py-3 text-base">Total</th>
                        <td className="px-6 py-3">3</td>
                        <td className="px-6 py-3">21,000</td>
                    </tr>
                </tfoot> */}
            </table>
        </div>
        )}
        
    </div>
</div>
}