import { Link } from 'react-router-dom'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './registerPage.module.scss'

const RegisterPage = () => {
  return (
    <div className={styles.parent}>
      <img src={studyImgae} alt='login' className={styles.image} />
      <div className={styles.form_container}>
        <input type='text' placeholder='Nume user' className={styles.input} />
        <input type='text' placeholder='Vârstă' className={styles.input} />
        <input type='text' placeholder='Universitatea' className={styles.input} />
        <input type='text' placeholder='Facultatea' className={styles.input} />
        <input type='text' placeholder='Specializare' className={styles.input} />
        <input type='text' placeholder='Mail' className={styles.input} />
        <input type='password' placeholder='Parola' className={styles.input} />
        <a href='#' className={styles.text}>
          Ai uitat parola?
        </a>
      </div>

      <Link className={styles.button} to='/start'>
        Inregistrare
      </Link>
    </div>
  )
}

export default RegisterPage
