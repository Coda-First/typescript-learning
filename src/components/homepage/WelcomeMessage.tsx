import { useState } from "react";
import { Button } from "../ui/Button"

type WelcomeMessageProps = {
  name?: string,
  age: number,
  items?: string[]
}

const Greeting = (props: WelcomeMessageProps) => {
  const [toggleInfos, setToggleInfos] = useState<boolean>(false);

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
        </div>
      }
      <Button onClick={() => handleToggle()} color="#000FFF">Show user infos</Button>
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