const getEvenNumbers = (num: number[]): number[] => {
    return num.filter((num) => num % 2 === 0);
  };
  
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(getEvenNumbers(num));