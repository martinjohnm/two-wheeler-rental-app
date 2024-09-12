import { Link } from "react-router-dom"



export const BikesCard = ({id,title, model ,price, image, company} : {id: number,title : string, price : number, image : string, model : number, company : string}) => {
    return <div className="bg-green-400 h-96 w-auto items-center p-4 justify-center rounded-xl">
        <div className="text-center mt-8 flex justify-between px-2 items-center">
            <p className="text-lg font-semibold font-sans">{company} {title} {model}</p>
            <Link to={`/bike/${id}`}>
                <button className="p-2 bg-red-400 border-b rounded-lg cursor-pointer hover:bg-red-700 text-slate-700 hover:text-white">View</button>
            </Link>
            
        </div>
        <div className="mt-4">
            <img className="h-[250px] w-[100%]" src={image} alt="" />
        </div>
        <p className="text-center pt-2 font-bold">{price}</p>
    </div>
}