import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="flex justify-center w-full gap-3 py-4">
      <Link to="/" className="text-2xl">Home</Link>
      <Link to="/about" className="text-2xl">About</Link>
    </nav>
  )
}

export default NavBar