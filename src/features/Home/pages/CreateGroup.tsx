/* eslint-disable css-modules/no-unused-class */
import CreatePage from 'features/Home/components/CreatePageGroup/CreatePageGroup'
import { Nav } from 'features/NavBar'

import styles from './home.module.scss'

const CreateGroup = () => (
  <div className={styles.parent_with_nav}>
    <Nav />
    <CreatePage />
  </div>
)

export default CreateGroup
