export {};

// シグネチャー宣言。これからこういう型の関数を作ります！とあらかじめ宣言しておく。
function double(value: number): number;
function double(value: string): string;

// オーバーロードは、any型で良い。シグネチャーで、型は宣言しているから。
function double(value: any): any {
  // typeofで型を判断して分岐。
  console.log(typeof value);
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value+value; 
  }
}

console.log(double(100));
console.log(double("Go "));
// console.log(double(true)); シグネチャーで宣言した型以外は、実行エラーになる。