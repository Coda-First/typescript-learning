// Currently not knowing the difference between interface and type
// interface User {
//   name: string,
//   age: number
// }

type UserType = {
  name: string,
  age?: number
}

const UserComponent = ({ name, age }: UserType) => {
  return (
    <div>
      <h1>{name}{age && ` : ${age} years old`}</h1>
    </div>
  )
}
export default UserComponent;
