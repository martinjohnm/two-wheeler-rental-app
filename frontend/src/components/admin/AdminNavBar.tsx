import { useRecoilValue, useSetRecoilState } from "recoil"
import { AdminSideBarOpen } from "../../store/atoms"
import { useAdminLogout } from "../../api/hooks/admin/auth/useAdminLogout"
// import { User } from "../utils/types"

export const AdminNavbar = ({title}:{title : String}) => {


    const sideBar = useRecoilValue(AdminSideBarOpen)
    const setSideBar = useSetRecoilState(AdminSideBarOpen)

    const handleSideBar = () => {
        setSideBar(c => !c)
    }

    const l = useAdminLogout()
    
    const handleAdminLogout = () => {
        l.logoutadmin()
    }

    return (
         
<nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-transparent bg-opacity-45">
<div className="">
  <div className="items-center h-16 grid grid-cols-3 mx-10">
    <div className="col-span-1 flex items-center">
        <button onClick={handleSideBar} className="justify-center items-center flex cursor-pointer rounded-full w-10 h-10">
            {!sideBar ? <img src="https://www.svgrepo.com/show/506800/burger-menu.svg" className="w-5 h-5" alt="" /> : <p><img src="https://www.svgrepo.com/show/500154/close-tab.svg" className="w-5 h-5" alt="" /></p>}
        </button>
        
    </div>
    
    <div className="flex space-x-4 text-gray-900 items-center justify-center col-span-1 text-2xl font-semibold">
        <div>
            {title}
        </div>
    </div>
    <div className="col-span-1 justify-center items-center flex">
        <button onClick={handleAdminLogout} className="cursor-pointer flex justify-center items-center w-5 h-5">
            <img src="https://www.svgrepo.com/show/21304/logout.svg" className="" alt="" />
        </button>
    </div>
      
  
  </div>
</div>
</nav>
       
)
}