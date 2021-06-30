import { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
  location: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number, location: string }>>
]
