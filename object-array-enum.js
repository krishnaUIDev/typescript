"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; // string of array
//   role: [number, string]; // tuple
// } = {
//   name: 'krishna',
//   age: 20,
//   hobbies: ['Sports'],
//   role: [2, 'author'],
// };
// person.role.push('admin'); // tuple doesnot identify
// // person.role[1] = 10
// // mixed values
// let fav: any[];
// fav = ['test', 1];
// console.log(person.name);
// for (const hobby of person.hobbies) {
//   console.log(hobby);
// }
// enums
// const ADMIN = 0;
// const READ_ONLY = 1;
// custom type
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["READ_ONLY"] = 3] = "READ_ONLY";
})(Role || (Role = {}));
const person = {
    name: 'krishna',
    role: Role.ADMIN,
    hobbies: ['sports', 'cooking'],
};
if (person.role === Role.ADMIN) {
    console.log('test');
}
