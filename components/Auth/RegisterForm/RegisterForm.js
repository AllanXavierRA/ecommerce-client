import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerApi } from "../../../api/user";

export default function LoginForm(props){
    const{showLoginForm} = props;

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchema()), 
        onSubmit: (formData) => {
            registerApi(formData);
        }
    })
    return(
        <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Form.Input name="name" type="text" placeholder="Nombre" onChange={formik.handleChange} error={formik.errors.name}/>
            <Form.Input name="lastname" type="text" placeholder="Apellidos" onChange={formik.handleChange} error={formik.errors.lastname}/>
            <Form.Input name="username" type="text" placeholder="Nombre de Usuario" onChange={formik.handleChange} error={formik.errors.username}/>
            <Form.Input name="email" type="text" placeholder="Correo Electrónico" onChange={formik.handleChange} error={formik.errors.email}/>
            <Form.Input name="password" type="password" placeholder="Contraseña" onChange={formik.handleChange} error={formik.errors.password}/>
            <div className="actions">
                <Button type="button">
                    Iniciar sesión
                </Button>
                <Button type="submit" className="submit">
                    Registrar
                </Button>
            </div>
        </Form>
    )
}

function initialValues(){
    return{
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: ""
    }
}

function validationSchema(){
    return{
        name: Yup.string().required(true),
        lastname: Yup.string().required(true),
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true)
    }
}