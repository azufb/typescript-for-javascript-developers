export {};

// 関数に返り値がないケースは、void型。
function returnNothing(): void {
  console.log("I don't return nothing.");
}

console.log(returnNothing());