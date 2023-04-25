/* eslint-disable css-modules/no-unused-class */
import HomePage from 'features/Home/components/HomePage/HomePage'
import { Nav } from 'features/NavBar'

import styles from './home.module.scss'

const Home = () => (
  <div className={styles.parent_with_nav}>
    <Nav />
    <HomePage />
  </div>
)

export default Home
