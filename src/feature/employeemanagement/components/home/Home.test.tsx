import { it, describe, expect } from "vitest";
import { render, screen } from '@testing-library/react'
import Home from "./Home";







describe('Home', () => { 
    it('should return the  Home components with data', () => { 
    
        render(<Home/>);
       
        expect(screen.findByText('Welcome Employee Management Page'));
    });
});