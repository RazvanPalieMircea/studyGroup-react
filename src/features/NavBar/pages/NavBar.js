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
      </div>
      {showMenu ? (
        <ul className={(styles.navbarMenu, styles.show)}>
          <li className={styles.navbarItem}>
            <Link to='/' className={styles.navbarLink}>
              Acasă
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to='/profile' className={styles.navbarLink}>
              Profil
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to='/groups' className={styles.navbarLink}>
              Grupurile/mentori
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to='/students' className={styles.navbarLink}>
              Studentii mei
            </Link>
          </li>
        </ul>
      ) : (
        ''
      )}
    </nav>
  )
}

export default Navbar
