//cusom interface
// type AddFn = (a: number, b: number) => number;
// alternative way for custom time for AddFn
interface AddFn {
  (a: number, b: number): number;
}

let adddd: AddFn;

adddd = (n1: number, n2: number) => n1 + n2;
interface Named {
  readonly name: string;
  outputName?: string; // method as optional
}
interface Greet extends Named {
  greet(phrase: string): void;
}

// using interface to class
class Person implements Greet {
  name: string;
  age: number;
  constructor(n: string, age: number) {
    this.name = n;
    this.age = age;
  }
  greet(phrase: string) {
    console.log(phrase);
  }
}

// const p = new Person('Krishna', 28);
// const tesst = p.greet('kk');
// console.log(tesst);

// interface PersonalDetails extends Greet {
//   address: string;
// }

// let username: PersonalDetails;

// username = {
//   name: 'test',
//   address: '',
//   greet(pharse: string) {
//     console.log(pharse);
//   },
// };
