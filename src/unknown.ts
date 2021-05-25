export {};

const kansuu = (): number => 43;

let numberAny: any = kansuu();
let numberUnknown: unknown = kansuu();

let sumAny: any = numberAny + 10;
if (typeof numberUnknown === "number") {
  let sumUnknown: unknown = numberUnknown + 10;
}