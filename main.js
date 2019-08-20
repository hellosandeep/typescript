"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var employee_1 = require("./employee");
var message = "Hello sandeep";
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
var empObject = new employee_1.Employee('Sandeep');
console.log("Employee: " + empObject.employeeName + " drawn Gross: " + empObject.calGross(1000, 500));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    return Manager;
}(employee_1.Employee));
var mobj = new Manager('Sagar');
console.log("Employee: " + mobj.employeeName + " drawn Gross: " + mobj.calGross(1000, 500, 200, 600));
