import React, { useState } from 'react';

import { auth } from '@api_manager';
import { RegistrationJSON } from '@api_types';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FormikForm from '@formik_form';
import { MyTextInput } from '@formik_manager';

import style from "./loginForm.module.css";

interface authTypes {
  handleSuccessfulAuth: (res: RegistrationJSON) => void,
  logged_in_status: string
}

const LoginForm: React.FC<authTypes> = ({ handleSuccessfulAuth, logged_in_status}) => {
  interface LoginInfos {
    email: string,
    password: string
  }

  const initial_values: LoginInfos = {
    email: "",
    password: ""
  };

  const [errors, setErrors] = useState(null);

  const handleErrors = (error: any) => setErrors(error.response.data.error_message);

  const handleSubmit = (values: LoginInfos) => {
    setErrors(null);
    
    const login_json = {
      'user': values
    }

    if (logged_in_status !== 'LOGGED_IN') auth('sessions', login_json, handleSuccessfulAuth, handleErrors)
  }

  return (
  <Container>
    <Row>
      <h1> Formulaire de connexion </h1>
    </Row>
    
    { errors && (
      <Row>
        <pre>{ errors }</pre>
      </Row>
    )}
    
    <Row>
      <FormikForm
        initialValues = { initial_values }
        handleSubmit = { handleSubmit }
      >
        <MyTextInput
          name="email" label="Email"
          type='email'
          placeholder="Renseignez votre email..."
          maxlength={80}
        />

        <MyTextInput
          name="password" label="Mot de passe"
          type='password'
          placeholder="Renseignez votre mot de passe..."
          maxlength={40}
        />
      </FormikForm>
    </Row>
  </Container>
  )
}

export default LoginForm;