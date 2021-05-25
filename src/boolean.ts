export {};

let name = "TypeScript";

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;これはエラー出るよ。boolean型の変数に、数字は代入できないよ。
console.log({isFinished});