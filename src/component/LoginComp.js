import React, {useState} from 'react'
import DashboardComp from "./DashboardComp"
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default function LoginComp() {
  const [isLoggedIn, toggleLogin] = useState(false)
    if(!isLoggedIn){
    return (
      <div>
        <Box component="span" m={15} display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
        {/* ***********Login and Password text field*************** */}
          <div display="flex" justifyContent="center" alignItems="center" alignContent="flex-end" >
            <AccountCircle /> <TextField  id="input-with-icon-grid" label="Username*" />
            <br />
            <LockIcon /> <TextField id="input-with-icon-grid" label="Password*" />
          </div>
        <br />
        {/* *********Sign in Button************** */}
        <Button variant="contained" onClick={() => toggleLogin(isLoggedIn ? false : true)} color="primary"> Login </Button>
        </Box>
      </div>
    )
  } else {
    return  <DashboardComp />
  }
}





