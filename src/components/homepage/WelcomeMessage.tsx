type WelcomeMessageProps = {
  name?: string,
  age: number
}

const Greeting = (props: WelcomeMessageProps) => {
  return (
    <div className="mx-auto py-4">Welcome {props.name ?? 'Anonymous'}!</div>
  )
}

export const WelcomeMessage = () => {
  return (
    <div className="m-auto my-4 max-w-sm px-4">
      <Greeting age={9} name="Toto" />
    </div>
  )
}