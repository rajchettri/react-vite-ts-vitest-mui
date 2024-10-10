import { AppBar, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";





const NavBar:React.FunctionComponent = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event :  React.SyntheticEvent, newVal: number) => {
        console.log(newVal);
        console.log(event);
        setValue(newVal);
    };

  return (
    <AppBar position="static" style={{ position: "fixed", top: 0, right: 0 ,left: 0 , backgroundColor: "white"}}>
      <Tabs 
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" tabIndex={0} component={Link} to={"/"} />
        <Tab label="Employees" tabIndex={1} component={Link} to={"/all"} />
        <Tab label="Onboard" tabIndex={2} component={Link} to={"/add"} />
      </Tabs>
    </AppBar>
  );


}


export default NavBar