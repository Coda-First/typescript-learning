import NavBar from "../components/Header";
import { WelcomeMessage } from "../components/homepage/WelcomeMessage";
function Homepage() {
  return (
    <div className="mx-auto flex h-screen w-screen max-w-5xl flex-col gap-4 px-4">
      <NavBar />
      <div className="border-t pt-2">
        <WelcomeMessage />
      </div>
    </div>
  )
}

export default Homepage;
