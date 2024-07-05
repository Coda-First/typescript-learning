import { useState } from "react";
import { Button } from "../ui/Button"

type WelcomeMessageProps = {
  name?: string,
  age: number,
  items?: string[]
}

const Greeting = (props: WelcomeMessageProps) => {
  const [toggleInfos, setToggleInfos] = useState<boolean>(false);
  const [userBio, setUserBio] = useState<string>('');

  const handleToggle = () => {
    setToggleInfos(() => !toggleInfos);
  }
  return (
    <>
      {toggleInfos &&
        <div className="space-y-2">
          <p>Welcome {props.name ?? 'Anonymous'}!</p>
          <p>You are {props.age} years old.</p>
          {props.items && <>
            <p>Here are your items :</p>
            <ul className="list-disc list-inside">
              {props.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </>}
          <p>Bio : {userBio ? userBio : 'No bio yet'}</p>
          <label className="block text-gray-700 text-sm font-bold mb-2">Change your bio :</label>
          <input className="w-full bg-gray-100 p-2 rounded-md border-2 border-gray-200" type="text" value={userBio} onChange={(e) => setUserBio(e.target.value)} />
        </div>
      }
      <Button onClick={() => handleToggle()} color="#000FFF">{toggleInfos ? 'Hide user infos' : 'Show user infos'}</Button>
    </>
  )
}

export const WelcomeMessage = () => {
  return (
    <div className="flex flex-col my-4 max-w-sm px-4 space-y-24">
      <Greeting age={9} name="Toto" items={['Bike', 'Pencil']} />
      <Greeting age={19} name="Raphaël" />
      <Button onClick={() => {
        alert('Added user');
      }} color="#000FFF">Add a user</Button>
    </div>
  )
}