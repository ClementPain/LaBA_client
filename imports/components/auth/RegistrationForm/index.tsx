import React, { useState } from 'react';

import { auth } from '@api_manager';
import { RegistrationJSON } from '@api_types';

export interface authTypes {
  handleSuccessfulAuth: (res: RegistrationJSON) => void,
  logged_in_status: string
}

const RegistrationForm: React.FC<authTypes> = ({ handleSuccessfulAuth, logged_in_status }) => {
  interface RegistrationInfos {
    'email': string,
    'password': string,
    'password_confirmation': string
  }

  const [user_infos, setUserInfos] = useState<RegistrationInfos>({
    'email': "",
    'password': "",
    'password_confirmation': ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfos( { ...user_infos, [e.target.name]: e.target.value } );
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registration_json = {
      'user': user_infos
    }

    if (logged_in_status !== 'LOGGED_IN') auth('registrations', registration_json, handleSuccessfulAuth);
  }

  return (
    <div>
      <h1>Formulaire de connexion</h1>
      <form onSubmit = { handleSubmit }>
        <input
          type="email" name="email" placeholder="Email"
          onChange = { handleChange }
          required
        />

        <input
          type="password" name="password" placeholder="Password"
          onChange={ handleChange }
          required
        />

        <input
          type="password" name="password_confirmation" placeholder="Password Confirmation"
          onChange={ handleChange }
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm;