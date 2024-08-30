import { Link } from "react-router-dom"



export const Navbar = () => {
    return (
         
<nav className="sticky top-0 z-10 bg-emerald-700 backdrop-filter backdrop-blur-lg bg-opacity-45">
<div className="max-w-5xl mx-auto px-4">
  <div className="flex items-center justify-between h-16">
    <span className="text-2xl text-gray-900 font-semibold">Rebike</span>
    <div className="flex space-x-4 text-gray-900 gap-4">
      <Link className="font-mono hover:font-semibold hover:text-blue-700 hover:underline" to={"/"}>Home</Link>
      <Link className="font-mono hover:font-semibold hover:text-blue-700 hover:underline" to={"/bikes"}>Bikes</Link>
      <Link className="font-mono hover:font-semibold hover:text-blue-700 hover:underline" to={"/book"}>Book-Now</Link>
      <Link className="font-mono hover:font-semibold hover:text-blue-700 hover:underline" to={"/login"}>Login</Link>
    </div>
  </div>
</div>
</nav>
       
)
}