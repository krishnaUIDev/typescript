function addd(num1: number, num2: number, num3: boolean, num4: string) {
  let result = num1 + num2;
  if (num3) {
    console.log(num4 + result);
  } else {
    return result;
  }
}

const number = 1;
const number2 = 5.2;

addd(number, number2, true, 'test');
