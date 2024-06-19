import NavBar from "../components/NavBar";
import { WelcomeMessage } from "../components/homepage/WelcomeMessage";
function Homepage() {
  return (
    <div className="mx-auto flex h-screen w-screen max-w-5xl flex-col gap-4 px-4">
      <NavBar />
      <WelcomeMessage />
    </div>
  )
}

export default Homepage;
