import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/header-logo.svg';

import styles from '../styles/layout/header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
            <img src={logo} alt="kasa-logo" className={styles.logo}/>
            <nav>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}><Link to='/' className={styles.link}>Accueil</Link></li>
                    <li className={styles.menuItem}><Link to='/a-propos' className={styles.link}>A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;