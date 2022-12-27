// Decoraters
// decorator uses
// examples

// factory function for decorators
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log('logString', logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstrctor: T
  ) {
    return class extends originalConstrctor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

@Logger('Logging String')
@WithTemplate('<h1>my person object</h1>', 'app')
class Persons {
  name = 'max';
  constructor() {
    console.log('creatingr');
  }
}

const pers = new Persons();

console.log(pers);
// --

function Log(target: any, propertyName: string | Symbol) {
  console.log('property');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('access decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set Price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error('invalid');
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number): number {
    return this._price * (1 + tax);
  }
}

// binding methods

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = 'this works';
  @AutoBind
  showMessage() {
    console.log('th', this.message);
  }
}

const p = new Printer();
const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

interface validatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registerdValidator: validatorConfig = {};

function RequiredField(target: any, propName: string) {
  registerdValidator[target.constructor.name] = {
    ...registerdValidator[target.constructor.name],
    [propName]: [
      ...(registerdValidator[target.constructor.name]?.[propName] ?? []),
      'required',
    ],
  };
}

function PostiveNumber(target: any, propName: string) {
  registerdValidator[target.constructor.name] = {
    ...registerdValidator[target.constructor.name],
    [propName]: [
      ...(registerdValidator[target.constructor.name]?.[propName] ?? []),
      'positive',
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registerdValidator[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @RequiredField
  title: string;
  @PostiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event: any) => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;
  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert('invalid input');
  }
  console.log(createdCourse);
});
