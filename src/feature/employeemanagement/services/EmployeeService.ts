import axios from 'axios';
import { Employee } from '../types/Employee';


const apiUrl = 'http://localhost:8088/emp'; // Replace with your API

export const EmployeeService = {
  getEmployees: async () => {
    const response = await axios.get<Employee[]>(apiUrl);
    return response.data;
  },
  createEmployee: async (employee: Omit<Employee, 'employeeId'>) => {
    const response = await axios.post<Employee>(apiUrl, employee);
    return response.data;
  },
  updateEmployee: async (employee: Employee) => {
    const response = await axios.put<Employee>(`${apiUrl}/${employee.employeeId}`, employee);
    return response.data;
  },
  deleteEmployee: async (id: number) => {
    await axios.delete(`${apiUrl}/${id}`);
  },
  getEmployee: async (id: number) => {
    const response = await axios.get<Employee[]>(`${apiUrl}/${id}}`);
    return response.data;
  },
};
