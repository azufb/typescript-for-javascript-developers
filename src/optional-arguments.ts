export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (height: number, weight: number, printable?: boolean): number => {
  const bmi: number = weight / (height*height);
  if (printable) {
    console.log({bmi});
  }
  return bmi;
};

bmi(1.52, 50, false);

// bmi(身長, 体重, console.logで出力するかどうか？)
// console.logで出力するかどうか？を表す引数を渡してみよう！
// bmi(1.52, 50, true) 出力する
// bmi(1.52, 50, false) 出力しない
// bmi(1.52, 50) 出力しない