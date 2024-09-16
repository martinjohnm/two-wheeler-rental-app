import { Link } from "react-router-dom"

export const Nothing = () => {
    return <div className="h-screen">
    <div className="flex items-center justify-center p-10">
        <div>
            <div className="items-center justify-center flex">
                <p className="font-bold text-4xl"> Nothing to show..</p>
            </div>
            <div className="items-center justify-center flex">
                <p>
                    Go to Home Page <Link className="hover:text-blue-800 hover:underline" to={"/home"}> Here</Link>
                </p>
            </div>
        </div>
        
    </div>
</div>
}