import { Link } from 'react-router-dom'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './loginPage.module.scss'

const LoginPage = () => {
  return (
    <div className={styles.parent}>
      <img src={studyImgae} alt='login' className={styles.image} />
      <div className={styles.form_container}>
        <input type='text' placeholder='Nume user' className={styles.input} />
        <input type='password' placeholder='Parola' className={styles.input} />
        <a href='*' className={styles.text}>
          Ai uitat parola?
        </a>
      </div>
      <Link className={styles.button} to='/start'>
        Login
      </Link>
    </div>
  )
}

export default LoginPage

export const user = {
  id: 1,
  name: 'string',
  password: 'string',
  varsta: 'string',
  universitate: 'string',
  facultate: 'string',
  specializare: 'string',
  mail: 'string',
  quizResult: [
    { key: 'denumire camp', value: 'string' },
    { key: 'denumire camp', value: 'string' },
  ],
  mentors: [1, 2, 3], //keyle sunt id-urile altor useri
  mentys: [1, 2, 3], //keyle sunt id-urile altor useri
  groups: [1, 2], //keyle sunt id-urile grupurilor
  createdGroup: [1, 2], //keyle sunt id-urile grupurilor dar aici sunt grupurile unde e admin
}

export const group = {
  id: 1,
  facultate: 'string',
  specializare: 'string',
  materie: 'string',
  members: [1, 2, 3], //keyle sunt id-urile altor useri
  maxNumberMembers: 5, // number
}

export const mnetor = {
  id: 1,
  facultate: 'string',
  specializare: 'string',
  materie: 'string',
  members: [1, 2, 3], //keyle sunt id-urile altor useri
  maxNumberMembers: 5, // number
}
