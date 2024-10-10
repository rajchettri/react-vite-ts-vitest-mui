import { describe, it, expect, vi } from 'vitest';
import { EmployeeService } from './EmployeeService';
import axios from 'axios';
import { Employee } from '../types/Employee';

vi.mock('axios');

describe('EmployeeService', () => {
  it('should fetch employees', async () => {
    const employees = [{ id: 1, firstname: 'John', lastname:'Doe', age: 30, city: '123 Main St', designation: 'Developer', country:"India"}];

    (axios.get as jest.Mock).mockResolvedValue({data: employees});
   
    const response = await EmployeeService.getEmployees();
    expect(response).toEqual(employees);
  });

  it('should fetch All employees', async () => {
    const employees = [{ id: 1, firstname: 'John', lastname:'Doe', age: 30, city: '123 Main St', designation: 'Developer', country:"India"},
         { id: 2, firstname: 'Johnny', lastname:'Dodge', age: 36, city: '123 Main St', designation: 'Developer', country:"India"}];

    (axios.get as jest.Mock).mockResolvedValue({data: employees});
   
    const response = await EmployeeService.getEmployees();
    expect(response).toEqual(employees);
  });

  it('should create employees', async () => {
    let employee: Omit<Employee, 'employeeId'> = { firstname: 'John', lastname:'Doe', age: 30, city: '123 Main St', designation: 'Developer', country:"India"};

    (axios.post as jest.Mock).mockResolvedValue({data: employee});
   
    const response = await EmployeeService.createEmployee(employee);
    expect(response).toEqual(employee);
  });

  it('should update employees', async () => {
    let employee: Employee = {employeeId:999, firstname: 'John', lastname:'Doe', age: 30, city: '123 Main St', designation: 'Developer', country:"India"};

    (axios.put as jest.Mock).mockResolvedValue({data: employee});
   
    const response = await EmployeeService.updateEmployee(employee);
    expect(response).toEqual(employee);
  });

  it('should delete employees', async () => {

    let employeeId = 999;

    (axios.delete as jest.Mock).mockResolvedValue({data: employeeId});
   
    const response = await EmployeeService.deleteEmployee(employeeId);
    expect(response).toBeNull;
  });

  // More tests can be added for create, update, and delete
});
