const numbers = [1,2,3,4,5]

const [num1, num2, num3, ...rest] = numbers;

console.log(num1);
console.log(rest);

const copy_of_numbers = [...numbers];

console.log(copy_of_numbers);