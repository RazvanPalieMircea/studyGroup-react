import { Link } from 'react-router-dom'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './startPage.module.scss'

const StartPage = () => {
  return (
    <div className={styles.parent}>
      <img src={studyImgae} alt='your-image' className={styles.image} />
      <h2 className={styles.title}>Date with LEARNING!</h2>
      <Link className={styles.login} to='/login'>
        Login
      </Link>
      <Link className={styles.button} to='/register'>
        Register
      </Link>
    </div>
  )
}

export default StartPage
