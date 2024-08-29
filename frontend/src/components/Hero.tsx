


export const Hero = () => {
    return (
    <div className="max-w-7xl mx-auto container grid md:grid-cols-2 grid-cols-1 gap-2 mt-10">
        <div className="items-center justify-center p-6 mt-10">
            <div className="text-orange-600 flex justify-center text-center">
                <p>WELCOME TO REBIKE</p>
            </div>

            <div className="text-6xl font-bold font-serif text-blue-950 flex justify-center text-center mt-7">
                <p>Meet your cycling needs
                every day</p>
            </div>
            <div className="flex justify-center text-center mt-7">
                <button className="p-4 rounded-full bg-orange-600 hover:bg-blue-900 hover:text-white text-blue-950 w-2/5">
                    <p className="">Explore Bike</p>
                </button>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="bg-green-200">
                <img className="w-[600px]" src="hero.png" alt="" />
            </div>
        </div>
    </div>
)
}