/* eslint-disable css-modules/no-unused-class */
import CreatePage from 'features/Home/components/CreatePageMentor/CreatePageMentor'
import { Nav } from 'features/NavBar'

import styles from './home.module.scss'

const CreateMentor = () => (
  <div className={styles.parent_with_nav}>
    <Nav />
    <CreatePage />
  </div>
)

export default CreateMentor
