function add(n1: number, n2: number): number {
  return n1 + n2;
}
// void types
function printResult(n1: number): void {
  console.log(n1);
  return;
}
// call back types
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result, 'result');
});

printResult(add(5, 12));
// Function type
// let combineValues: Function;
// describe function
let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(8, 8));
