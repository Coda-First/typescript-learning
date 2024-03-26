import {
  Link
} from "@nextui-org/react";

const NavBar = () => {
  return (
    <nav className="flex justify-center w-full gap-3">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}

export default NavBar