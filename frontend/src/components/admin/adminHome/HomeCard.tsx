



export const HomeCard = ({title, amount} : {title : string, amount : number}) => {
    return <div className="border rounded-md p-4">
        <p className="font-mono text-lg font-bold">{title}</p>
        <p className="font-mono text-md font-medium">{amount}</p>
    </div>
}