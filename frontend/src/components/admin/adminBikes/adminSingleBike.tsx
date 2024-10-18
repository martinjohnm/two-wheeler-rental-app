


export const AdminSingleBike = ({id, title, companyName, locationName } : {id : Number, title : String, companyName : String, locationName : String}) => {
    return <tr className="">
    <td scope="row" className="">
       {Number(id)}
    </td>
    <td className="py-4">
        {title}
    </td>
    <td className="py-4">
        {companyName}
    </td>
    <td className="py-4">
       {locationName}
    </td>
    <td className="py-4">
        <button className="p-1 bg-green-500 rounded-md text-white text-sm hover:bg-green-800 cursor-pointer">Edit</button>
        <button className="p-1 mx-1 bg-red-500 rounded-md text-white text-sm hover:bg-red-800 cursor-pointer">Delete</button>
    </td>
</tr>
}