import React from 'react';

import LoginForm from '@auth_components/LoginForm/index.tsx';

import { handleSuccessfulAuth } from '@auth_tools/handleAuth.ts';

const Login = ({ setLoggedInStatus, setUser, logged_in_status }) => (
  <LoginForm
    handleSuccessfulAuth = { (res) => handleSuccessfulAuth(res, setLoggedInStatus, setUser) }
    logged_in_status = { logged_in_status }
  />
);

export default Login;