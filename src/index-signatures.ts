export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {name: "azuzu", underTwenty: false};

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = "Azu";
profile.age = 23;
profile.nationality = "Japan";