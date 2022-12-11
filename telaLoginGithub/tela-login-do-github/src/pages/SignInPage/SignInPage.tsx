import React from "react";
import logo from '../../assets/logo.svg';
import styles from './SignInPage.module.css'

export function SignInPage() {
    return (
        <>
            <div className='containerPage'>
                <div className='elementosPagina'>
                    <div className={styles.containerLogoETitulo}>
                        <img src={logo} alt="Logo do github" className={styles.logo}></img>
                        <h1 className={styles.titulo}>Sign in to GitHub</h1>
                    </div>
                </div>
            </div>
        </>
    );
}