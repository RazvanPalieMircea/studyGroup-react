/* eslint-disable css-modules/no-unused-class */
import ListMentorsGroupsPage from 'features/Home/components/ListMentorsGroupsPage/ListMentorsGroupsPage'
import { Nav } from 'features/NavBar'

import styles from './home.module.scss'

const ListMentorsGroups = () => (
  <div className={styles.parent_with_nav}>
    <Nav />
    <ListMentorsGroupsPage />
  </div>
)

export default ListMentorsGroups
