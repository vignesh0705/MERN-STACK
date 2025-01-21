import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#home" style={styles.link}>Home</a></li>
        <li style={styles.navItem}><a href="#about" style={styles.link}>About</a></li>
        <li style={styles.navItem}><a href="#gallery" style={styles.link}>Gallery</a></li>
        <li style={styles.navItem}><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#242424',
    padding: '1rem',
    textAlign: 'center',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  navItem: {
    display: 'inline',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default Navbar;
