import React from "react";
import Header from "./header";

import { UserResJSON } from '@api_types';

interface LayoutType {
  children: React.ReactNode,
  logged_in_status: string,
  setLoggedInStatus: (logged_in_status: string) => void,
  setUser: (user: UserResJSON | {}) => void
}

const Layout: React.FC<LayoutType> = ({ children, logged_in_status, setLoggedInStatus, setUser }) => {
  return (
    <div>
      <Header
        logged_in_status = { logged_in_status }
        setLoggedInStatus = { setLoggedInStatus }
        setUser = { setUser }
      />
      {children}
    </div>
  )
}

export default Layout;