export {};

// デフォルト引数は、引数が渡されない場合などに、デフォルト値で代入。

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));