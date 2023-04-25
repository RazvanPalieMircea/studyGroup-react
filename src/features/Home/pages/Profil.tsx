/* eslint-disable css-modules/no-unused-class */
import ProfilPage from 'features/Home/components/ProfilPage/ProfilPage'
import { Nav } from 'features/NavBar'

import styles from './home.module.scss'

const Profil = () => (
  <div className={styles.parent_with_nav}>
    <Nav />
    <ProfilPage />
  </div>
)

export default Profil
