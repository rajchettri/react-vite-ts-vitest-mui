import { describe, it, expect } from 'vitest';
import { Employee } from '../types/Employee';



describe('User Model', () => {
    it('should create a User with valid data', () => {
      let emp:  Employee = {
        employeeId:1, 
        firstname:'John', 
        lastname: 'Doe', 
        designation:'john@example.com',
        age:12,
        country: 'india',
        city: 'kolkata'
    };
      expect(emp.employeeId).toBe(1);
      expect(emp.firstname).toBe('John');
      expect(emp.designation).toBe('john@example.com');
      expect(emp.employeeId).toBe(1);
      expect(emp.lastname).toBe('Doe');
      expect(emp.city).toBe('kolkata');
      expect(emp.country).toBe("india");
      expect(emp.age).toBe(12);
    });
  // More tests can be added for create, update, and delete
});
