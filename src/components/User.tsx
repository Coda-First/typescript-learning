import { Avatar } from "@nextui-org/react";

// Currently not knowing the difference between interface and type
// interface User {
//   name: string,
//   age: number
// }

type UserType = {
  name: string,
  age?: number,
  avatarUrl?: string,
  linkedinUrl?: string
}

const UserComponent = ({ name, age, avatarUrl, linkedinUrl }: UserType) => {
  return (
    <div className="flex justify-center items-center w-80 gap-3">
      <a href={linkedinUrl} className="text-xl">{name}{age && ` : ${age} years old`}</a>
      <Avatar src={avatarUrl} size="lg" />
    </div>
  )
}
export default UserComponent;
