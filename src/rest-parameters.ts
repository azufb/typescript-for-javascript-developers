export {};

const reducer = (accumulator: number, currentValue: number) =>{
  console.log({accumulator, currentValue});
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  // いくつの引数が渡ってくるかわからない場合、残余引数を用いる。(ここでは、...valuesの部分。)
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));