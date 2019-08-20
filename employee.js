"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.calGross = function (basic, hra, all1, all2) {
        return basic + hra + (all1 ? all1 : 0) + (all2 ? all2 : 0);
    };
    return Employee;
}());
exports.Employee = Employee;
