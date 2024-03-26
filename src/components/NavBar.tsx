import {
  Link
} from "@nextui-org/react";

const NavBar = () => {
  return (
    <nav className="flex justify-center w-full gap-3">
      <Link href="/" className="text-4xl font-bold">Home</Link>
      <Link href="/about" className="text-4xl font-bold">About</Link>
    </nav>
  )
}

export default NavBar