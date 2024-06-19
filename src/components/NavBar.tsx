import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="flex w-full justify-between py-4 px-6">
      <Link to="/" className="text-2xl">Home</Link>
      <Link to="/about" className="text-2xl">About</Link>
    </nav>
  )
}

export default NavBar