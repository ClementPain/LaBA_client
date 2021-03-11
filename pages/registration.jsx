import React from 'react';

import RegistrationForm from '@auth_components/RegistrationForm/index.tsx';

import { handleSuccessfulAuth } from '@auth_tools';

const Registration = ({ setLoggedInStatus, setUser, logged_in_status }) => (
  <RegistrationForm
    handleSuccessfulAuth = { (res) => handleSuccessfulAuth(res, setLoggedInStatus, setUser) }
    logged_in_status = { logged_in_status }
  />
);

export default Registration;