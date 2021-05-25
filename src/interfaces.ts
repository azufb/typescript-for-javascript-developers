export {};

let object: ObjectType = { name: "azu", age: 23 };

type ObjectType = {
  name: string,
  age: number
}

interface ObjectInterface {
  name: string,
  age: number
}

let object2: ObjectInterface = {
  name: "azu",
  age: 23
}