/* eslint-disable css-modules/no-unused-class */
import { Link } from 'react-router-dom'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './resultPage.module.scss'

const ResultPage = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <p className={styles.textInfo}>{text}</p>
        <img src={studyImgae} alt='placeholder' className={styles.image} />
      </div>
      <Link to='/start' className={styles.button}>
        Acasa
      </Link>
    </div>
  )
}

export default ResultPage
