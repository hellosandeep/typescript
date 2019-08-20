export class Employee {
    employeeName: string;
    constructor(name: string) {
        this.employeeName = name;
    }
    calGross(basic: number, hra: number, all1?: number, all2?: number): number {
        return basic + hra + (all1 ? all1 : 0) + (all2 ? all2 : 0);
    }
}