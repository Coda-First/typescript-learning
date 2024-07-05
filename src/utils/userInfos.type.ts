export type UserProps = {
  name?: string,
  age: number,
  items?: string[],
  country: Countries
}

export enum Countries {
  France = 'France',
  Belgium = 'Belgium',
  Germany = 'Germany',
  Italy = 'Italy',
  Spain = 'Spain',
  USA = 'USA'
}