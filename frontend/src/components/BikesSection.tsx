import { BikesCard } from "./BikesCard"





export const BikesSection = () => {
    return <div className="max-w-7xl bg-red-400 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        <BikesCard/>
        <BikesCard/>
        <BikesCard/>
        <BikesCard/>
        <BikesCard/>
        <BikesCard/>
    </div>
}