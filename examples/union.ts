// unions
// custom type alias
type Combine = number | string;

function added(
  num1: Combine,
  num2: Combine,
  resultType: 'as-number' | 'as-text'
) {
  let result: Combine;
  if (
    (typeof num1 === 'number' && typeof num2 === 'number') ||
    resultType === 'as-number'
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

added(1, 2, 'as-number');
added('test', 'test', 'as-text');
