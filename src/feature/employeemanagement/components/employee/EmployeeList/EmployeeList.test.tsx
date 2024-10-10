import { it, describe, expect } from "vitest";
import { render, screen } from '@testing-library/react'
import EmployeeList from "./EmployeeList";




describe('EmployeeList', () => { 
    it('should return the employee components with data', () => { 
        const wrapper = render(<EmployeeList />);
        expect(wrapper).toBeTruthy();


        const h1 = wrapper.container.querySelector('h4')
        expect(h1?.textContent).toBe('Add Employee to Organization')


         // Get by text using the React testing library
      const text = screen.getByText(
        /Add User/i
      );
      expect(text.textContent).toBeTruthy()
    });

    
});