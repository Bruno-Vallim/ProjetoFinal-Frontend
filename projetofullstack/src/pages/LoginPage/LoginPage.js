import React from "react";
import { ScreenContainer, LogoImage, SignUpButtonContainer} from "./styled";
import logo from '../../assets/logo.jpg'
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import {useHistory} from "react-router-dom"
import {goToSingUp} from "../../routes/coordinator"


const LoginPage = () => {
    const history = useHistory()

  return (
    <ScreenContainer>

        <LogoImage src={logo}/>
        <LoginForm/>
        <SignUpButtonContainer>
            <Button
            onClick={() => goToSingUp(history)}
            type={"submit"}
            fullWidth
            variant={"text"}
            color={"primary"}
            >
            Não possui conta? Cadastre-se aqui !
            </Button>
        </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
