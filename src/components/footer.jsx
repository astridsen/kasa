import React from "react";
import logo from '../assets/footer-logo.svg';
import rights from '../assets/all-rights-reserved.svg';

import styles from '../styles/layout/footer.module.css';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <img src={logo} alt="kasa-logo" className={styles.logo}/>
            <img src={rights} alt="all-rights-reserved" className={styles.rights}/>
        </footer>
    )
}

export default Footer;