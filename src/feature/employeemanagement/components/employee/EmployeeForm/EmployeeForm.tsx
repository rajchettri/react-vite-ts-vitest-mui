import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControl, Paper, Typography } from '@mui/material';
import { Employee } from '../../../types/Employee';


interface EmployeeFormProps {
  onSubmit: (employee: Omit<Employee, 'employeeId'>) => void;
  initialEmployee?: Employee | null;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit, initialEmployee }) => {
  const [formData, setFormData] = useState<Omit<Employee, 'employeeId'>>({
    firstname: '',
      lastname: '',
      age: 0,
      designation: '',
      city: '',
      country: '',
     
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      firstname: '',
      lastname: '',
      age: 0,
      designation: '',
      city: '',
      country: '',
      
    });
  };

  useEffect(() => {
    if (initialEmployee) {
      setFormData(initialEmployee);
    }
  }, [initialEmployee]);

  return (
    <Paper elevation={12}   style={{ width: 600, height: 500 , pageBreakAfter: 'always', paddingTop:100, paddingInline:30 }} >
        <Typography variant={"h4"} fontStyle={"consolus"}>Add Employee to Organization</Typography>
        <FormControl>
            <form onSubmit={handleSubmit}>
                <TextField name="firstname" label="Firstname" value={formData.firstname} onChange={handleChange} fullWidth required />
                <TextField name="lastname" label="Lastname" value={formData.lastname} onChange={handleChange} fullWidth required />
                <TextField name="age" type="number" label="Age" value={formData.age} onChange={handleChange} fullWidth required />
                <TextField name="city" label="City" value={formData.city} onChange={handleChange} fullWidth required />
                <TextField name="country" label="Country" value={formData.country} onChange={handleChange} fullWidth required />
                <TextField name="designation" label="Designation" value={formData.designation} onChange={handleChange} fullWidth  required />
                <Button type="submit" variant="contained" color="primary">
                    {initialEmployee ? 'Update User' : 'Add User'}
                </Button>
            </form>
        </FormControl>
    </Paper>
    
  );
};

export default EmployeeForm;