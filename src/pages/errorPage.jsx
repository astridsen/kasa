import React from "react";
import { NavLink } from 'react-router-dom';
import styles from '../styles/pages/errorPage.module.css';

const errorPage = () => {
    return (
        <main className={styles.wrapper}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.text}> Oups! la page que vous demandez n'existe pas.</p>
            <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
        </main>
    )
}

export default errorPage;