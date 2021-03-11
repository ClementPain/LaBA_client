import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

import { UserInfosJSON } from '@api_types';

import { handleLogout } from '@auth_tools/handleAuth.ts';

interface HeaderType {
  logged_in_status: string,
  setLoggedInStatus: (logged_in_status: string) => void,
  setUser: (user: UserInfosJSON | {}) => void
}

const Header: React.FC<HeaderType> = ({ logged_in_status, setLoggedInStatus, setUser }) => {
  const router = useRouter();

  const styles = {
    header: {
      marginBottom: 20,
      padding: 20,
      border: "1px, solid #DDD"
    },
    link : {
      margin: 15
    },
    active: {
      margin: 15,
      color: 'blue'
    }
  }

  return (
    <div style={styles.header}>
      <Link href='/' passHref>
        <span style={router.pathname === '/' ? styles.active : styles.link}>Home</span>
      </Link>
      <Link href='/profile' passHref>
        <span style={router.pathname === '/profile' ? styles.active : styles.link}>Profil</span>
      </Link>

      { (logged_in_status === "NOT_LOGGED_IN") && (
        <>
          <Link href='/login' passHref>
            <span style={router.pathname === '/login' ? styles.active : styles.link}>Connexion</span>
          </Link>
          <Link href='/registration' passHref>
            <span style={router.pathname === '/registration' ? styles.active : styles.link}>Inscription</span>
          </Link>
        </>
      )}

      { (logged_in_status === "LOGGED_IN") && (
        <button onClick = { () => handleLogout(logged_in_status, setLoggedInStatus, setUser) }>
          Déconnexion
        </button>
      )}
    </div>
  )
}

export default Header;