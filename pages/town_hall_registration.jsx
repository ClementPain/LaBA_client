import React from 'react';

import TownHallRegistrationForm from '@auth_components/TownHallRegistrationForm/index.tsx';

// import { handleSuccessfulAuth } from '@auth_tools';

const TownHallRegistration = ({ setLoggedInStatus, setUser, logged_in_status }) => (
  <TownHallRegistrationForm />
);

export default TownHallRegistration;