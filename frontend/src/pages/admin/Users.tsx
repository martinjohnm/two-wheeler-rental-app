import { useRecoilValue } from "recoil"
import { AdminSideBarOpen, userssAdminAtom } from "../../store/atoms"
import { SidebarComp } from "../../components/admin/adminHome/SidebarComp"
import { AdminNavbar } from "../../components/admin/AdminNavBar"
import { useGetAllUsers } from "../../api/hooks/admin/user/useGetAllUsers"
import { AdminSingleUsers } from "../../components/admin/adminUsers/adminSingleUsers"




export const Users = () => {
    const sideBar = useRecoilValue(AdminSideBarOpen)

    const {loading} = useGetAllUsers()
    const users = useRecoilValue(userssAdminAtom)


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
    </div> }

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
       <SidebarComp title="Locations" to="/admin-locations"/>
       <SidebarComp isSelected={true} title="Users" to="/admin-users"/>

</div> : ""}

<AdminNavbar title={"Users"}/>

<div className="mx-auto container">
    
        
        <div className="mx-16">
            <table className="w-full mx-auto container text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 rounded-s-lg">
                            User Id
                        </th>
                      
                        <th scope="col" className="py-3 rounded-s-lg">
                            Email
                        </th> <th scope="col" className="py-3 rounded-s-lg">
                            Full Name
                        </th>
                      
                 
                        
                    </tr>
                </thead>
                <tbody>
                         {users?.map((data) => (
                            <AdminSingleUsers email={data.email} fullName={data.fullName} userId={data.id}/>
                            ))}
                         </tbody>
               
            </table>
        </div>
    </div>
</div>
}
