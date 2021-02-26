import React from "react";
import Link from "next/link";
import {useRouter} from 'next/router';

export const Header = () => {
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
      <Link href='/blog' passHref>
        <span style={router.pathname === '/blog' ? styles.active : styles.link}>Blog</span>
      </Link>
      <Link href='/profile' passHref>
        <span style={router.pathname === '/profile' ? styles.active : styles.link}>Profile</span>
      </Link>
      <Link href='/blog/items' passHref>
        <span style={router.pathname === '/blog/items' ? styles.active : styles.link}>Items</span>
      </Link>
      <Link href='/blog/categories' passHref>
        <span style={router.pathname === '/blog/categories' ? styles.active : styles.link}>Categories</span>
      </Link>
      <Link href='/events' passHref>
        <span style={router.pathname === '/events' ? styles.active : styles.link}>Events</span>
      </Link>
    </div>
  )
}