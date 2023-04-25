/* eslint-disable css-modules/no-unused-class */
import CreatePage from 'features/Home/components/CreatePage/CreatePage'
import { Nav } from 'features/NavBar'

import styles from './home.module.scss'

const Create = () => (
  <div className={styles.parent_with_nav}>
    <Nav />
    <CreatePage />
  </div>
)

export default Create
