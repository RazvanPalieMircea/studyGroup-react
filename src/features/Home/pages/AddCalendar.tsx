/* eslint-disable css-modules/no-unused-class */
import AddCalendarPage from 'features/Home/components/AddCalendarPage/AddCalendarPage'
import { Nav } from 'features/NavBar'

import styles from './home.module.scss'

const AddCalendar = () => (
  <div className={styles.parent_with_nav}>
    <Nav />
    <AddCalendarPage />
  </div>
)

export default AddCalendar
