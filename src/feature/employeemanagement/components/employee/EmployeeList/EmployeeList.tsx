import React, { useEffect, useState } from 'react';


import { List, ListItem, ListItemText, Button, Paper } from '@mui/material';
import { Employee } from '../../../types/Employee';
import { EmployeeService } from '../../../services/EmployeeService';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import EmployeeForm from '../EmployeeForm/EmployeeForm';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editEmployee, setEditEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      const empList = await EmployeeService.getEmployees();
      setEmployees(empList);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id: number) => {
    await EmployeeService.deleteEmployee(id);
    setEmployees(employees.filter(emp => emp.employeeId !== id));
  };

  const handleEdit = (emp: Employee) => {
    setEditEmployee(emp);
  };

  const handleSubmit = async (emp: Omit<Employee, 'employeeId'>) => {
    if (editEmployee) {
      const updatedEmp = await EmployeeService.updateEmployee({ ...editEmployee, ...emp });
      setEmployees(employees.map(e => (e.employeeId === updatedEmp.employeeId ? updatedEmp : e)));
      setEditEmployee(null);
    } else {
      const newEmployee = await EmployeeService.createEmployee(emp);
      setEmployees([...employees, newEmployee]);
    }
  };

  const paginationModel = { page: 0, pageSize: 5 };

  const columns: GridColDef[] = [
    { field: 'employeeId', headerName: 'Employee Id', width: 130 },
    { field: 'firstname', headerName: 'First name', width: 130 },
    { field: 'lastname', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 130, },
    { field: 'city', headerName: 'City', width: 130 },
    { field: 'country', headerName: 'Country', width: 130 },
    { field: 'designation', headerName: 'Designation', width: 130 },
    { field: '_action', headerName: 'Action', width: 195 }
  ];

  // employees.map(emp => 
  //                   emp._action = <div>
  //                   <Button onClick={() => handleEdit(emp)}>Edit</Button>
  //                   <Button onClick={() => handleDelete(emp.employeeId)}>Delete</Button>
  //           </div>
  //           );

  return (
    <div>
      <EmployeeForm onSubmit={handleSubmit} initialEmployee={editEmployee} />
      {/* <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        getRowId={(emp) => emp.employeeId}
        rows={employees}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
        checkboxSelection 
        //onRowClick={}
      />
    </Paper>
    {/* <Button variant="contained" color="primary" onClick={handleEdit}>
        Edit
    </Button>
    <Button variant="contained" color="primary" onClick={handleDelete}>
        Delete
    </Button> */} 

      <List>
        {employees.map(emp => (
          <ListItem key={emp.employeeId}>
            <ListItemText primary={emp.firstname} secondary={`Designation: ${emp.designation}`}/>
            <Button onClick={() => handleEdit(emp)}>Edit</Button>
            <Button onClick={() => handleDelete(emp.employeeId)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EmployeeList;
