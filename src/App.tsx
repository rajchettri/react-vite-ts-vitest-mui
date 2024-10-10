import React from 'react';
import EmployeeList from './feature/employeemanagement/components/employee/EmployeeList/EmployeeList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './feature/employeemanagement/components/navbar/NavBar';
import EmployeeForm from './feature/employeemanagement/components/employee/EmployeeForm/EmployeeForm';
import Home from './feature/employeemanagement/components/home/Home';
import Footer from './feature/employeemanagement/components/footer/Footer';


const App: React.FC = () => {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/add' element = {<EmployeeForm initialEmployee={null} onSubmit={EmployeeList}/>}/>
        <Route path='/all' element = {<EmployeeList/>}/>
      </Routes>
      <Footer />
      
    </BrowserRouter>
    </>
  );
};

export default App;