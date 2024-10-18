import { useRecoilValue } from "recoil"
import { HomeCard } from "../../components/admin/adminHome/HomeCard"
import { SidebarComp } from "../../components/admin/adminHome/SidebarComp"
import { AdminSideBarOpen } from "../../store/atoms"
import { AdminNavbar } from "../../components/admin/AdminNavBar"






export const Dashboard = () => {
    const sideBar = useRecoilValue(AdminSideBarOpen)

    return <div className="bg-[#f4f4f5] h-screen relative">
        {sideBar ? <div className="top-0 z-11 bg-transparent shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-45 mx-auto container w-96 p-2 h-screen fixed">  
            
            {/* <div className="justify-end items-center flex cursor-pointer">
                <button onClick={handleSideBar}><img src="https://www.svgrepo.com/show/500154/close-tab.svg" className="w-10 h-10"  alt="" /></button>
            </div> */}
            <div className="h-10">

            </div>
            <SidebarComp isSelected={true} title="Dashboard" to="/admin-dashboard"/>
            <SidebarComp title="Bookings" to="/admin-bookings"/>
            <SidebarComp title="Bikes" to="/admin-bikes"/>
            <SidebarComp title="Locations" to="/admin-locations"/>
            <SidebarComp title="Users" to="/admin-users"/>

        </div> : ""}   
        <AdminNavbar title={"Dashboard"}/>  
        <div className="mx-auto container">
            
            <div className="grid grid-cols-4 mx-16 gap-4 mt-6">
                <HomeCard title={"Total Order"} amount={2345}/>
                <HomeCard title={"Total Sale"} amount={2345}/>
                <HomeCard title={"Total Customer"} amount={2345}/>
                <HomeCard title={"Total Balance"} amount={2345}/>
            </div>
        </div>
    </div>
}