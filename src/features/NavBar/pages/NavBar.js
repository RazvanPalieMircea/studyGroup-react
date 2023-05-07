/* eslint-disable css-modules/no-undef-class */
/* eslint-disable css-modules/no-unused-class */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './nav.module.scss'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const id = localStorage.getItem('Id')

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link to='/' className={styles.navbarBrand}>
          <img
            src='https://cdn-icons-png.flaticon.com/512/566/566985.png'
            alt='Learning icon'
            style={{
              filter: 'brightness(0) saturate(100%) invert(100%)',
              width: '20px',
              height: '20px',
              padding: '2px',
            }}
          />
          STUDY GROUP
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <button className={styles.navbarToggle} onClick={toggleMenu}>
          <span className={styles.navbarToggleIcon} />
          <span className={styles.navbarToggleIcon} />
          <span className={styles.navbarToggleIcon} />
        </button>
        <Link to='/home' className={styles.showDesktop}>
          Acasă
        </Link>
        <Link to={`/profil/${id}`} className={styles.showDesktop}>
          Profil
        </Link>
        <Link to='/list-create' className={styles.showDesktop}>
          Grupurile/mentori
        </Link>
        <Link to='/students' className={styles.showDesktop}>
          Studentii mei
        </Link>
        <Link to='/calendar' className={styles.showDesktop}>
          Evenimente
        </Link>
      </div>
      {showMenu ? (
        <div onClick={toggleMenu} className={(styles.navbarMenu, styles.show)}>
          <Link to='/home' className={styles.navbarLink}>
            Acasă
          </Link>
          <Link to={`/profil/${id}`} className={styles.navbarLink}>
            Profil
          </Link>
          <Link to='/list-create' className={styles.navbarLink}>
            Grupurile/mentori
          </Link>
          <Link to='/students' className={styles.navbarLink}>
            Studentii mei
          </Link>
          <Link to='/calendar' className={styles.navbarLink}>
            Evenimente
          </Link>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default Navbar
