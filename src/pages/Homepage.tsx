import NavBar from "../components/NavBar";
function Homepage() {
  return (
    <div className="max-w-5xl w-screen h-screen flex flex-col gap-4 mx-auto px-4">
      <NavBar />
      <div className="pt-24 mx-auto">Welcome to the homepage!</div>
    </div>
  )
}

export default Homepage;
