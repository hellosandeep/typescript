import { Employee } from './employee';
import { Manager } from './manager';
export { }
let message = "Hello sandeep";
console.log(message);

// class Employee {
//     employeeName: string;
//     constructor(name: string) {
//         this.employeeName = name;
//     }
//     calGross(basic: number, hra: number, all1?: number, all2?: number): number {
//         return basic + hra + (all1 ? all1 : 0) + (all2 ? all2 : 0);
//     }
// }

let empObject = new Employee('Sandeep');
console.log(`Employee: ${empObject.employeeName} drawn Gross: ${empObject.calGross(1000, 500)}`);

// class Manager extends Employee {
//     constructor(managerName: string) {
//         super(managerName);
//     }
// }

let mobj = new Manager('Sagar');
console.log(`Employee: ${mobj.employeeName} drawn Gross: ${mobj.calGross(1000, 500, 200, 600)}`);