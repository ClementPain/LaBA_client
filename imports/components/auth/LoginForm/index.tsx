import React, { useState } from 'react';

import { auth } from '@api_manager';
import { RegistrationJSON } from '@api_types';

import style from "./loginForm.module.css";

export interface authTypes {
  handleSuccessfulAuth: (res: RegistrationJSON) => void,
  logged_in_status: string
}

const LoginForm: React.FC<authTypes> = ({ handleSuccessfulAuth, logged_in_status}) => {
  
  interface LoginInfos {
    'email': string,
    'password': string
  }

  const [user_infos, setUserInfos] = useState<LoginInfos>({
    'email': '',
    'password': ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfos({ ...user_infos, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const login_json = {
      'user': user_infos
    }

    if (logged_in_status !== 'LOGGED_IN') auth('sessions', login_json, handleSuccessfulAuth)
  }

  return (
  <div className = { style.main }>
    <h1> Formulaire de connexion </h1>
    <form onSubmit = { handleSubmit }>
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
  </div>
  )
}

export default LoginForm;