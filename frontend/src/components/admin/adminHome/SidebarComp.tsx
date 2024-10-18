import { Link } from "react-router-dom"




export const SidebarComp = ({isSelected, title, to} : {isSelected? : Boolean, title : string, to : string }) => {
    return <Link to={to}> <div className={`w-full h-[50px] p-2 cursor-pointer flex items-center rounded-lg mt-2 ${isSelected ? "bg-[#e9e4f5]" : ""}`}>
                <p>{title}</p>
            </div>
            </Link>
}