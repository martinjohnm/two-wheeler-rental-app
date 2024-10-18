import { useRecoilValue } from "recoil"
import { SidebarComp } from "../../components/admin/adminHome/SidebarComp"
import { AdminSideBarOpen, bookingsAdminAtom } from "../../store/atoms"
import { useGetAllBookingForAdmin } from "../../api/hooks/admin/booking/useGetAllBookingForAdmin"
import { AdminSingleBooking } from "../../components/admin/adminBooking/adminSingleBooking"
import { AdminNavbar } from "../../components/admin/AdminNavBar"




export const Bookings = () => {
    const sideBar = useRecoilValue(AdminSideBarOpen)
    
    const {loading} = useGetAllBookingForAdmin()
    const bookings = useRecoilValue(bookingsAdminAtom)


    if (loading) {
        return <div className="bg-[#f4f4f5] h-screen relative">

        {sideBar ? <div className="top-0 z-11 bg-transparent shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-45 mx-auto container w-96 p-2 h-screen fixed">  
                
                {/* <div className="justify-end items-center flex cursor-pointer">
                    <button onClick={handleSideBar}><img src="https://www.svgrepo.com/show/500154/close-tab.svg" className="w-10 h-10"  alt="" /></button>
                </div> */}
                <div className="h-10">
    
                </div>
                <SidebarComp title="Dashboard" to="/admin-dashboard"/>
                <SidebarComp isSelected={true} title="Bookings" to="/admin-bookings"/>
                <SidebarComp title="Bikes" to="/admin-bikes"/>
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
            
            {/* <div className="justify-end items-center flex cursor-pointer">
                <button onClick={handleSideBar}><img src="https://www.svgrepo.com/show/500154/close-tab.svg" className="w-10 h-10"  alt="" /></button>
            </div> */}
            <div className="h-10">

            </div>
            <SidebarComp title="Dashboard" to="/admin-dashboard"/>
            <SidebarComp isSelected={true} title="Bookings" to="/admin-bookings"/>
            <SidebarComp title="Bikes" to="/admin-bikes"/>
            <SidebarComp title="Locations" to="/admin-locations"/>
            <SidebarComp title="Users" to="/admin-users"/>
    </div> : ""}   
    <AdminNavbar title={"Bookings"}/>                                                                                                    
    <div className="mx-auto container">
    
        
        <div className="mx-16">
            <table className="w-full mx-auto container text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 rounded-s-lg">
                            Order Id
                        </th>
                      
                        <th scope="col" className="py-3 rounded-s-lg">
                            Date
                        </th> <th scope="col" className="py-3 rounded-s-lg">
                            Amount
                        </th>
                      
                        <th scope="col" className="py-3">
                            Status
                        </th>
                        <th scope="col" className="py-3">
                            Action
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                {bookings?.map((data) => (
                    <AdminSingleBooking dateCreated={data.createdAt}  status={data.status} amountPaid={data.amount} id={data.id} key={data.id}/>
                ))}
                </tbody>
        
            </table>
        </div>
    </div>
</div>
}