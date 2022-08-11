import React from 'react'
import styles from '../Header/header.module.css'
import logo from '../../../src/Images/logo-cafe.png'
import logoB from '../../../src/Images/arrow-back.png'


const Header = () => {
 return (
<header className={styles.header}>
<img src={logo} alt='logomain' className={styles.logo} />
<img src={logoB} alt='logoback' className={styles.logoB} />
</header>

 )
}

export default Header;