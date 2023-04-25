/* eslint-disable css-modules/no-unused-class */
import ListPage from 'features/Home/components/ListPage/ListPage'
import { Nav } from 'features/NavBar'

import styles from './home.module.scss'

const List = () => (
  <div className={styles.parent_with_nav}>
    <Nav />
    <ListPage />
  </div>
)

export default List
