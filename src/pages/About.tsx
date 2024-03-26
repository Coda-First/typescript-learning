import NavBar from "../components/NavBar"
import { MdiLanguageTypescript } from "../components/TypeScript"

const About = () => {
  return (
    <div className="max-w-5xl w-full flex flex-col gap-4 mx-auto px-4">
      <NavBar />
      <div className="h-8" />
      <MdiLanguageTypescript />
    </div>
  )
}

export default About