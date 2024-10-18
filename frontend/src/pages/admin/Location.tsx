import { useRecoilValue, useSetRecoilState } from "recoil"
import { SidebarComp } from "../../components/admin/adminHome/SidebarComp"
import { AdminNavbar } from "../../components/admin/AdminNavBar"
import { AddLocationBoolean, AdminSideBarOpen, locationsAdmin } from "../../store/atoms"
import { BikeTextInput } from "../../components/admin/adminBikes/BikeTextInput"
import { useState } from "react"
import { useCreateLocation } from "../../api/hooks/admin/bikes/useCreateLocaion"
import { toast } from "sonner"
import { useGetLocationsAdmin } from "../../api/hooks/admin/bikes/useGetLocationsAdmin"

export const Location = () => {

    const [postInputs, setpostInputs] =  useState<{title : String} | null>(null)

    const createLocationn = useCreateLocation()

    useGetLocationsAdmin()

    const locations = useRecoilValue(locationsAdmin)

    const createLocation = (event : any) => {
        event.preventDefault()
        if (postInputs) {
            createLocationn.createLocation(postInputs)
        } else {
            toast.message("Invalid Data")
        }
        
    }

    const sideBar = useRecoilValue(AdminSideBarOpen)
    const setAddBikeVisible = useSetRecoilState(AddLocationBoolean)

    const addLocation = useRecoilValue(AddLocationBoolean)
    const handleAddnew = () => {

        setAddBikeVisible(c => !c)

    }
  
    return <div className="bg-[#f4f4f5] h-screen relative">

        {sideBar ? <div className="top-0 z-11 bg-transparent shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-45 mx-auto container w-96 p-2 h-screen fixed">  
         
            {/* <div className="justify-end items-center flex cursor-pointer">
                <button onClick={handleSideBar}><img src="https://www.svgrepo.com/show/500154/close-tab.svg" className="w-10 h-10"  alt="" /></button>
            </div> */}
            <div className="h-10">

            </div>
            <SidebarComp title="Dashboard" to="/admin-dashboard"/>
           <SidebarComp title="Bookings" to="/admin-bookings"/>
           <SidebarComp title="Bikes" to="/admin-bikes"/>
           <SidebarComp isSelected={true} title="Locations" to="/admin-locations"/>
           <SidebarComp title="Users" to="/admin-users"/>

    </div> : ""}
    
    <AdminNavbar title={"Locations"}/>

    <div className="mx-auto container">
                
        <div className="justify-between flex">
            <p className="text-2xl mx-16">{!addLocation ? "Locations" : "Add New Location"}</p>
            <div className="mx-16">
                {!addLocation ? <button onClick={handleAddnew} className="bg-green-500 p-2 rounded-md text-white">Add New</button> : 
                <button onClick={handleAddnew} className="bg-green-500 p-2 rounded-md text-white">View All Bikes</button>}
            </div>
        </div>


        {addLocation ? (
            
            <form className="mx-auto max-w-xl container justify-center items-center px-10">
                
               <BikeTextInput title={"Location Name"} placeHolder={"CBR 150"} onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            title : e.target.value
                        })) 
                    }}/>
               
       
                <button onClick={createLocation} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        ) : (
            <div className="mx-16 overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                   
                        <th scope="col" className="py-3 rounded-s-lg">
                            id
                        </th>
                        <th scope="col" className="py-3 rounded-s-lg">
                            Title
                        </th>
                      
                    </tr>
                </thead>
                <tbody>
                {locations?.map((data) => (
                    <tr className="dark:bg-gray-800">
                    <td scope="row" className="py-4  whitespace-nowrap dark:text-white">
                        {data.id}
                    </td>
                    <td className="py-4">
                        {data.title}
                    </td>
                    
                </tr>
                ))}
                </tbody>
               
            </table>
        </div>
        )}
    </div>
</div>
}