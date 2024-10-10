import { it, describe, expect } from "vitest";
import { render, screen } from '@testing-library/react'
import EmployeeForm from "./EmployeeForm";





describe('EmployeeList', () => { 
    it('should return the employee components with data', () => { 

        const save = () => {
            //do nothing on form submit
            console.log('test executed');
        }
        const wrapper = render(<EmployeeForm initialEmployee = {null} onSubmit={save}/>);
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