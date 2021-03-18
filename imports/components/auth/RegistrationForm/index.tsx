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
    'password_confirmation': string,
    'role': "villager"
  }

  interface ProfileInfos {
    'first_name': string,
    'last_name': string
  }

  const [user_infos, setUserInfos] = useState<RegistrationInfos>({
    'email': "",
    'password': "",
    'password_confirmation': "",
    'role': "villager"
  })

  const [profile_infos, setProfileInfos] = useState<ProfileInfos>({
    'first_name': "",
    'last_name': ""
  })

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfos( { ...user_infos, [e.target.name]: e.target.value } );
  }

  const handleChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileInfos( { ...profile_infos, [e.target.name]: e.target.value } );
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registration_json = {
      'user': user_infos,
      'profile': profile_infos
    }

    if (logged_in_status !== 'LOGGED_IN') auth('registrations', registration_json, handleSuccessfulAuth);
  }

  return (
    <div>
      <h1>Formulaire de connexion</h1>
      <form onSubmit = { handleSubmit } autoComplete = 'off'>
        <input
          type="email" name="email" placeholder="Email"
          onChange = { handleChangeUser }
          required
        />

        <input
          type="password" name="password" placeholder="Password"
          onChange={ handleChangeUser }
          required
        />

        <input
          type="password" name="password_confirmation" placeholder="Password Confirmation"
          onChange={ handleChangeUser }
          required
        />

        <input
          type="text" name="first_name" placeholder="First Name"
          onChange={ handleChangeProfile }
          required
        />

        <input
          type="text" name="last_name" placeholder="Last Name"
          onChange={ handleChangeProfile }
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm;