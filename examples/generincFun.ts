//Generic funcitons and classes
// constraints
// special typescript types

// const names: {
//   name: string;
// }[] = [
//   {
//     name: 'test',
//   },
// ];

// generic types
// const names: Array<string> = []; // string[]

// // promise type
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is promise');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

// Generic fn <T, U>
// generic constrains <T extends object>

function mergeObj<T extends object, U extends object>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

const mergeData = mergeObj({ name: 'max' }, { age: 20 });
// console.log(mergeData);
mergeData.age;

interface Lengthy {
  length: number;
}

function count<T extends Lengthy>(element: T): [T, string] {
  let des = 'go no value';
  if (element.length === 1) {
    des = 'Got 1 element';
  } else if (element.length > 1) {
    des = 'GOT' + element.length + ' elements';
  }
  return [element, des];
}

// console.log(count('Hello'));

function exract<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value' + obj[key];
}

exract({ name: 'key' }, 'name');

// generic classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// generic utility type

interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}
// Partial is build in type

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.date = date;
  return courseGoal as CourseGoal;
}

//ReadOnly

const names: Readonly<string[]> = ['Max'];
// names.push('Manu');
