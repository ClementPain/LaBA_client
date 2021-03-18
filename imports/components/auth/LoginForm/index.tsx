import React, { useState } from 'react';

import { auth } from '@api_manager';
import { RegistrationJSON } from '@api_types';

import {
  Container, Row, Col, Card, FormGroup, Button,
} from 'react-bootstrap';
import style from "./loginForm.module.css";

interface authTypes {
  handleSuccessfulAuth: (res: RegistrationJSON) => void,
  logged_in_status: string
}

const LoginForm: React.FC<authTypes> = ({ handleSuccessfulAuth, logged_in_status}) => {
  
  interface LoginInfos {
    'email': string,
    'password': string
  }

  const [user_infos, setUserInfos] = useState<LoginInfos>({
    'email': "",
    'password': ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfos({ ...user_infos, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const login_json = {
      'user': user_infos
    }

    console.log(login_json)

    if (logged_in_status !== 'LOGGED_IN') auth('sessions', login_json, handleSuccessfulAuth)
  }

  return (
  <Container>
    <Row>
      <h1> Formulaire de connexion </h1>
    </Row>

    <Row>
      <form onSubmit = { handleSubmit } autoComplete = 'off'>
        <label htmlFor = 'username'> Email </label>
        <input
          type = "email" name = "email" placeholder = "email"
          className = { style.input }
          onChange = { handleChange }
          required
          />

        <label htmlFor = 'password'> Mot de passe </label>
        <input
          type = "password" name = "password" placeholder = "password"
          className = { style.input }
          onChange = { handleChange }
          required
          />

        <button type = "submit" className = { style.button }> Connexion </button>
      </form>
    </Row>
  </Container>
  )
}

export default LoginForm;