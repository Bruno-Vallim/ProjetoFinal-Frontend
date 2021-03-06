import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import {StyledToolbar} from './styled'
import { goToHome, goToLogin } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'


const Header = () => {
    const history = useHistory()

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToHome(history)} color="inherit">Home</Button>
          <Button onClick={() => goToLogin(history)}color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header