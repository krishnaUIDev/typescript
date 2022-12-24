// module content
// intersectin types
// type guards
// discriminated unions
// type definitions
// function overloads

// intersection types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin,Employee {}

type ElevatedEmployee = Admin & Employee;

const el1 = {
  name: 'Max',
  privileges: [''],
  startDate: new Date(),
};

// universal intersection union type
type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function overloading
function added(a: number, b: number): number;
function added(a: string, b: string): string;
function added(a: string, b: number): string;
function added(a: number, b: string): string;
function added(n1: Combinable, b: Combinable) {
  if (typeof n1 === 'string' || typeof b === 'string') {
    return n1.toString() + b.toString();
  }
  return n1 + b;
}

const result = added('1', '5');
result.split(' ');

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log(emp.name);
  if ('privileges' in emp) {
    console.log(emp.privileges);
  }
  if ('startDate' in emp) {
    console.log(emp.startDate);
  }
}

printEmployeeInfo(el1);

class Car {
  drive() {
    console.log('driving');
  }
}

class Truck {
  drive() {
    console.log('driving truck');
  }
  loadCargo(n1: number) {
    console.log(`driving loadCargo ${n1}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);

//discriminated unions

interface Bird {
  type: 'bird'; //discriminated unions
  flyingSpeed: number;
}

interface Hourse {
  type: 'hourse'; //discriminated unions
  runningSpeed: number;
}

type Animal = Bird | Hourse;

function moveAnimal(animal: Animal) {
  //   if ('flyingSpeed' in animal) {
  //     console.log(animal.flyingSpeed);
  //   }
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'hourse':
      speed = animal.runningSpeed;
  }
  console.log(speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 100 });

// type costing
// one way
//const userInputVal = <HTMLInputElement>document.getElementById('user-input')!;

const userInputVal = document.getElementById('user-input')! as HTMLInputElement;
userInputVal.value = 'Hello';

// index properties
interface ErrorContainer {
  // { email: 'not a valid email', username: '' }
  [prop: string | number]: string;
}

const errorBag: ErrorContainer = {
  1: '',
  email: '',
};

// optional chaining

const fetchUserData = {
  id: 'u1',
  name: 'max',
  job: {
    title: 'ceo',
    description: 'my own jonb',
  },
};

// console.log(fetchUserData?.job?.title);

// nullish collision

const userInputvalue = '';
const stored = userInputvalue ?? 'Default';
console.log(stored);
