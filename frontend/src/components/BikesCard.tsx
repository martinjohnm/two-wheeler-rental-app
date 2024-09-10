


export const BikesCard = ({title, model ,price, image, company} : {title : string, price : number, image : string, model : number, company : string}) => {
    return <div className="bg-green-400 h-96 w-auto items-center p-4 justify-center rounded-xl">
        <div className="text-center mt-8">
            <p className="text-lg font-semibold font-sans">{company} {title} {model}</p>
        </div>
        <div className="mt-4">
            <img className="h-[250px] w-[100%]" src={image} alt="" />
        </div>
        <p className="text-center pt-2 font-bold">{price}</p>
    </div>
}