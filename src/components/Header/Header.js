import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return <header className={styles.header_container}>
    {/*<h1>
      <img src="/assets/logo512.png" alt="Logo" />
</h1>*/}
    <nav>
      <ul>
        <li>Home</li>
        <li>Articles</li>
        <li>Newsletter</li>
      </ul>
    </nav>
  </header>;
};


export default Header;
