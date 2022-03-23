import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Auth(props){
    const {onCloseModal, setTitleModal} = props
    const [ showLogin, setShowLogin ] = useState(false);     

    const showLoginForm = () => {
        setTitleModal("Inicia sesión");
        setShowLogin(true);
    };
    const showRegisterForm = () => {
        setTitleModal("Crear nuevo usuario")
        setShowLogin(false)
    };

    return showLogin ? (<LoginForm showRegisterForm={showRegisterForm}/>
    ) : (
    <RegisterForm showLoginForm={showLoginForm}/>);
}