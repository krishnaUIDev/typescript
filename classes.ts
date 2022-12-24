//create sample classes
// abstract
class Department {
  static fisicalYear: string;
  // private can't access outside of class scope
  //   private name: string;
  // readonly can initialization only once cant update again
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}
  // function methods

  // we can directly acces if we add static method Department.createEmployee with out using new key word
  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {}

  addEmployee(emp: string) {
    // this.id = '2'
    this.employees.push(emp);
  }
  printEmp() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// inheritance classes

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  //   describe() {
  //     console.log(this.id);
  //   }
}
class AcountDepartment extends Department {
  private lastReport: string;
  // singleton pattern
  private static instace: AcountDepartment;
  // getter method
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('no report found');
  }

  //setter metod
  set mostRecentReport(val: string) {
    if (!val) {
      throw new Error('Please add value');
    }
    this.addReport(val);
  }
  private constructor(id: string, private reports: string[]) {
    super(id, 'Account');
    this.lastReport = reports[0];
  }

  static getInstace() {
    if (AcountDepartment.instace) {
      return this.instace;
    }
    this.instace = new AcountDepartment('d2', []);
    return this.instace;
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  addEmployee(emp: string) {
    this.employees.push(emp);
  }
  printReport() {
    console.log(this.reports, 'reports');
  }
  describe() {
    console.log(this.id);
  }
}

// const test = new ITDepartment('id1', ['superclass']);

const account = new Department('123', 'test');
// // console.log(account.describe());
// test.addEmployee('krishna');
// test.addEmployee('hey');
// // account.employees[1] = 'krishna';

// test.describe();
// test.printEmp();
// console.log(test, 'test');

// const accountDep = new AcountDepartment('id2', []);
const accountDep = AcountDepartment.getInstace();

console.log(accountDep, 'accountDep');
accountDep.mostRecentReport = 'heyhye';
accountDep.addReport('somethig wrong0');
console.log(accountDep.mostRecentReport);
accountDep.printReport();
accountDep.describe();

const employe1 = Department.createEmployee('MAXXX');
console.log({ employe1 });
