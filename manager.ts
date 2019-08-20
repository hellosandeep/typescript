import { Employee } from './employee'

export class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
}