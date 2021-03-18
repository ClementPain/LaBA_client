import Router from 'next/router';

import { RegistrationJSON, UserResJSON, LoggedInJSON, LogoutJSON } from '@api_types';

import { find, destroy } from '@api_manager';

type handleSuccessfulAuthType = (
  res: RegistrationJSON,
  setLoggedInStatus: (logged_in_status: string) => void,
  setUser: (user: UserResJSON | {}) => void
) => void;

export const handleSuccessfulAuth: handleSuccessfulAuthType = (res, setLoggedInStatus, setUser) => {
  if (res.logged_in) {
    setLoggedInStatus('LOGGED_IN');
    setUser(res.user);
    Router.push("/profile");
  }
}

type checkLoggedStatusType = (
  logged_in_status: string,
  setLoggedInStatus: (logged_in_status: string) => void,
  setUser: (user: UserResJSON | {}) => void
) => void;


export const checkLoginStatus: checkLoggedStatusType = (logged_in_status, setLoggedInStatus, setUser) => {
  const ifLoggedIn = (res: LoggedInJSON): void => {
    if (res.data.logged_in && logged_in_status === "NOT_LOGGED_IN") {
      setLoggedInStatus("LOGGED_IN");
      setUser(res.data.user);
    } else if (!res.data.logged_in && logged_in_status === "LOGGED_IN") {
      setLoggedInStatus("NOT_LOGGED_IN");
      setUser({});
    }
  }

  find('logged_in', true,
    (res: LoggedInJSON) => ifLoggedIn(res),
    (error: ErrorEvent) => console.log(error)
  );
}

export const handleLogout: checkLoggedStatusType = (logged_in_status, setLoggedInStatus, setUser) => {
  const ifLogout = (res: LogoutJSON): void => {
    if (res.data.logout && logged_in_status === "LOGGED_IN") {
      setLoggedInStatus("NOT_LOGGED_IN");
      setUser({});
      Router.push("/");
    }
  }

  destroy('logout', true,
    (res: LogoutJSON) => ifLogout(res),
    (e: ErrorEvent) => console.log(e)
  )
}