export {};

let bmi: (height: number, weight: number) => number = function (height: number, weight: number): number {
  // 戻り値に対する型指定は、引数のカッコの直後。
  return weight / (height * height)
};

console.log(bmi(1.52, 50));