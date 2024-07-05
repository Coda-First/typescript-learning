import { useState } from "react";
import { Button } from "../ui/Button"

import { Countries, UserProps } from "../../utils/userInfos.type";

const Greeting = (props: UserProps) => {
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
          <p>You live in {props.country}.</p>
          {props.items && <>
            <p>Here are your items :</p>
            <ul className="list-disc list-inside">
              {props.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </>}
          <p>Bio : {userBio ? userBio : 'No bio yet'}</p>
          <label className="block text-gray-700 text-sm font-bold mb-2">Change your bio :</label>
          <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" type="text" value={userBio} onChange={(e) => setUserBio(e.target.value)} />
        </div>
      }
      <Button onClick={() => handleToggle()} color="#000FFF">{toggleInfos ? 'Hide user infos' : 'Show user infos'}</Button>
    </>
  )
}

export const WelcomeMessage = () => {
  return (
    <div className="flex flex-col my-4 max-w-sm px-4 space-y-12">
      <Greeting age={9} name="Toto" items={['Bike', 'Pencil']} country={Countries.France} />
      <Greeting age={19} name="Raphaël" country={Countries.Belgium} />
      <Button onClick={() => {
        alert('Added user');
      }} color="#000FFF">Add a user</Button>
    </div>
  )
}