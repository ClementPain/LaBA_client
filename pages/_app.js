import React, { useState, useEffect } from "react";

import Layout from "@layout";

import { checkLoginStatus } from '@auth_tools/handleAuth.ts';

import "@imports/global.css";

const MyApp = ({Component, pageProps}) => {
  const [logged_in_status, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});

  useEffect(() => {
    checkLoginStatus(logged_in_status, setLoggedInStatus, setUser)
  }, [logged_in_status])

  return (
  <Layout
    logged_in_status = { logged_in_status }
    setLoggedInStatus = { setLoggedInStatus }
    setUser = { setUser }  
  >
    <Component
      {...pageProps}
      logged_in_status = { logged_in_status }
      setLoggedInStatus = { setLoggedInStatus }
      user = { user }
      setUser = { setUser }
    />
  </Layout>
  )
}

export default MyApp;
