/* eslint-disable css-modules/no-unused-class */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './nav.module.scss'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link to='/' className={styles.navbarBrand}>
          STUDY GROUP
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <button className={styles.navbarToggle} onClick={toggleMenu}>
          <span className={styles.navbarToggleIcon} />
          <span className={styles.navbarToggleIcon} />
          <span className={styles.navbarToggleIcon} />
        </button>
        <Link to='/' className={styles.showDesktop}>
          Acasă
        </Link>
        <Link to='/profile' className={styles.showDesktop}>
          Profil
        </Link>
        <Link to='/groups' className={styles.showDesktop}>
          Grupurile/mentori
        </Link>
        <Link to='/students' className={styles.showDesktop}>
          Studentii mei
        </Link>
      </div>
      {showMenu ? (
        <div className={(styles.navbarMenu, styles.show)}>
          <Link to='/' className={styles.navbarLink}>
            Acasă
          </Link>
          <Link to='/profile' className={styles.navbarLink}>
            Profil
          </Link>
          <Link to='/groups' className={styles.navbarLink}>
            Grupurile/mentori
          </Link>
          <Link to='/students' className={styles.navbarLink}>
            Studentii mei
          </Link>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default Navbar
