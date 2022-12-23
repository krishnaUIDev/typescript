//create sample classes
class Department {
  name: string;
  employees: string[] = [];
  constructor(n: string) {
    this.name = n;
  }
  // function methods
  describe(this: Department) {
    console.log(this.name);
  }
  addEmployee(emp: string) {
    this.employees.push(emp);
  }
  printEmp() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const account = new Department('test');
// console.log(account.describe());
account.addEmployee('krishna');
account.addEmployee('hey');

account.describe();
account.printEmp();
