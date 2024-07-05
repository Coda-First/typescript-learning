import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="flex w-full justify-between pt-2 px-6">
      <Link to="/" className="text-xl">Home</Link>
      <Link to="/about" className="text-xl">About</Link>
    </nav>
  )
}

export default NavBar