/* eslint-disable css-modules/no-unused-class */
import CalendarPage from 'features/Home/components/CalendarPage/CalendarPage'
import { Nav } from 'features/NavBar'

import styles from './home.module.scss'

const Create = () => (
  <div className={styles.parent_with_nav}>
    <Nav />
    <CalendarPage />
  </div>
)

export default Create
