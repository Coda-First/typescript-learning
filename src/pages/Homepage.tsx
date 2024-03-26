import NavBar from "../components/NavBar";
import UserComponent from "../components/User"
function Homepage() {
  return (
    <div className="max-w-5xl w-full flex flex-col gap-4 mx-auto px-4">
      <NavBar />
      <div className="h-8" />
      <UserComponent name="Meutmeut" avatarUrl="https://media.licdn.com/dms/image/D4E35AQGUDmjbZ_LodQ/profile-framedphoto-shrink_400_400/0/1703173726629?e=1712070000&v=beta&t=RSrRYIk7D5cbxRvKGAXXv6gahLj29HFsmeVeWf4PIYg" linkedinUrl="https://www.linkedin.com/in/mat%C3%A9o-grange/" />
      <UserComponent name="Benoît" age={19} avatarUrl="https://media.licdn.com/dms/image/D4E03AQEYPY-o1LUHcg/profile-displayphoto-shrink_400_400/0/1696341096913?e=1717027200&v=beta&t=q_4cTLIXbYwiZfEHwbjJFVt589jhry_D376vJgCOScs" linkedinUrl="https://www.linkedin.com/in/benoit-parmentier/" />
    </div>
  )
}

export default Homepage;
