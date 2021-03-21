import React, { useState } from 'react';

import { auth } from '@api_manager';
import { RegistrationJSON } from '@api_types';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FormikForm from '@formik_form';
import { MyTextInput } from '@formik_manager';

interface authTypes {
  handleSuccessfulAuth: (res: RegistrationJSON) => void,
  logged_in_status: string
}

const RegistrationForm: React.FC<authTypes> = ({ handleSuccessfulAuth, logged_in_status }) => {
  interface RegistrationInfos {
    email: string,
    password: string,
    password_confirmation: string,
    first_name: string,
    last_name: string
  }

  const initial_values: RegistrationInfos = {
    email: "test56@test.fr",
    password: "testfr",
    password_confirmation: "testfr",
    first_name: "test",
    last_name: "test"
  };

  const [errors, setErrors] = useState<Array<string> | null>(null);

  interface errorObject {
    response: {
      data: {
        error_message: Record<string, string>
      }
    }
  }
  
  const handleErrors = (errorJSON: errorObject) => {
    const error_messages = errorJSON.response.data.error_message;
    let error_array = [];

    for (let err of Object.keys(error_messages)) {
      let err_string = `${err} ${error_messages[err]}`;
      error_array.push(err_string);
    }

    setErrors(error_array);
  }

  const handleSubmit = (values: RegistrationInfos) => {
    setErrors(null);

    const registration_json = {
      'user': {
        email: values.email,
        password: values.password,
        password_confirmation: values.password_confirmation,
        role: 'villager'
      },
      'profile': {
        first_name: values.first_name,
        last_name: values.last_name
      }
    }

    if (logged_in_status !== 'LOGGED_IN') auth('registrations', registration_json, handleSuccessfulAuth, handleErrors);
  }

  return (
  <Container>
    <Row>
      <h1>Formulaire de connexion</h1>
    </Row>
    
    { errors && errors.map( (err, i) => (
        <Row key={ i }>
          <pre>{ err }</pre>
        </Row>
      ))
    }

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

        <MyTextInput
          name="password_confirmation" label="Confirmation de mot de passe"
          type='password'
          placeholder="Confirmez votre mot de passe..."
          maxlength={40}
        />

        <MyTextInput
          name="first_name" label="Prénom"
          type='text'
          placeholder="Indiquez votre prénom..."
          maxlength={40}
        />

        <MyTextInput
          name="last_name" label="Nom"
          type='text'
          placeholder="Indiquez votre nom..."
          maxlength={40}
        />
      </FormikForm>
    </Row>
  </Container>
  )
}

export default RegistrationForm;